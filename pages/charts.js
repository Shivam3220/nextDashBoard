import React from 'react'
import Barchart from '@/Components/BarChart';
import PieChart from '@/Components/PieChart';
import AreaChart from '@/Components/AreaChart';
import {FaChartBar, FaTable,FaChartPie } from 'react-icons/fa';
import Link from 'next/link';

const charts = () => {
  return (
    <div id="layoutSidenav_content" className=' overflow-y-scroll' style={{"height":"91vh"}}>
                <main > 
                    <div class="container-fluid px-4" >
                        <h1 class="mt-4">Charts</h1>
                        <ol class="breadcrumb mb-4">
                            <li class="breadcrumb-item"><Link href="/">Dashboard</Link></li>
                            <li class="breadcrumb-item active">Charts</li>
                        </ol>
                        <div class="card mb-4">
                            <div class="card-body">
                                Chart.js is a third party plugin that is used to generate the charts in this template. The charts below have been customized - for further customization options, please visit the official
                                <a target="_blank" href="https://www.chartjs.org/docs/latest/">Chart.js documentation</a>
                                .
                            </div>
                        </div>
                        <div class="card mb-4">
                            <div class="card-header">
                                <FaChartBar className='mx-2'/>
                                Area Chart Example
                            </div>
                            <div class="card-body"><AreaChart className="w-100 h-25" /></div>
                            <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="card mb-4">
                                    <div class="card-header">
                                    <FaChartBar className='mx-2'/>
                                        Bar Chart Example
                                    </div>
                                    <div class="card-body"><Barchart/></div>
                                    <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="card mb-4">
                                    <div class="card-header" >
                                    <FaChartPie className='mx-2'/>
                                        Pie Chart Example
                                    </div>
                                    <div class="card-body" style={{"height":"280px"}}><PieChart/></div>
                                    <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <footer class="py-4 bg-light mt-auto">
                    <div class="container-fluid px-4">
                        <div class="d-flex align-items-center justify-content-between small">
                            <div class="text-muted">Copyright &copy; Your Website 2023</div>
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

export default charts