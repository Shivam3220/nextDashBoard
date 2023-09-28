import Link from 'next/link';
import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai';

const Custom401 = () => {
  return (
    <div id="layoutError">
    <div id="layoutError_content">
        <main>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="text-center mt-4">
                            <h1 className="display-1">401</h1>
                            <p className="lead">Unauthorized</p>
                            <p>Access to this resource is denied.</p>
                            <Link href="/">
                                <AiOutlineArrowLeft/>
                                Return to Dashboard
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
    <div id="layoutError_footer">
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
</div>
  )
}

export default Custom401