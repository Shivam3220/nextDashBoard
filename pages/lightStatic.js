import Link from 'next/link'
import React from 'react'

const lightStatic = () => {
  return (
    <div id="layoutSidenav_content" style={{"height":"91vh"}}>
    <main> 
        <div className="container-fluid px-4"  style={{"height":"75vh"}}>
            <h1 className="mt-4">Sidenav Light</h1>
            <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item"><Link href="/">Dashboard</Link></li>
                <li className="breadcrumb-item active">Sidenav Light</li>
            </ol>
            <div className="card mb-4">
                <div className="card-body">
                    This page is an example of using the light side navigation option. By appending the
                    <code>.sb-sidenav-light</code>
                    class to the
                    <code>.sb-sidenav</code>
                    class, the side navigation will take on a light color scheme. The
                    <code>.sb-sidenav-dark</code>
                    is also available for a darker option.
                </div>
            </div>
        </div>
    </main>
    <footer className="py-4 bg-light mt-auto">
        <div className="container-fluid px-4">
            <div className="d-flex align-items-center justify-content-between small">
                <div className="text-muted">Copyright &copy; Your Website 2023</div>
                <div>
                    <a href="#">Privacy Policy</a>
                    &middot;
                    <a href="#">Terms &amp; Conditions</a>
                </div>
            </div>
        </div>
    </footer>
</div>
  )
}

export default lightStatic