import DashTable from '@/Components/DashTable'
import Link from 'next/link'
import React from 'react'

const tableDash = () => {
  return (
    <div id="layoutSidenav_content" className='overflow-y-scroll' style={{"height":"91vh"}}>
                <main>
                    <div className="container-fluid px-4" >
                        <h1 className="mt-4">Tables</h1>
                        <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item"><Link href="/">Dashboard</Link></li>
                            <li className="breadcrumb-item active">Tables</li>
                        </ol>
                        <div className="card mb-4">
                            <div className="card-body">
                                DataTables is a third party plugin that is used to generate the demo table below. For more information about DataTables, please visit the
                                <a target="_blank" href="https://datatables.net/">official DataTables documentation</a>
                                .
                            </div>
                        </div>
                       <DashTable/>
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

export default tableDash