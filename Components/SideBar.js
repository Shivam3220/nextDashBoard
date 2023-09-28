import Link from "next/link";
import React from "react";
import { RiDashboard3Line } from 'react-icons/ri';
import { BsLayoutSplit ,BsBook } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';
import {FaChartBar, FaTable } from 'react-icons/fa'
import { useRouter } from "next/router";

const SideBar = (props) => {
  const router= useRouter()
  const ToggleSideBar = props.ToggleSideBar;
  return (
    <div
      id="layoutSidenav_nav"
      className={`${ToggleSideBar ? "d-block" : "d-none"} `}
      style={{ width: "255px", height: `${router.pathname=="/staticNav"?"":"91vh"}`}}
    >
      <nav
        className={`sb-sidenav accordion ${router.pathname=="/lightStatic"?"sb-sidenav-light":"sb-sidenav-dark"}`}
        id="sidenavAccordion"
      >
        <div className="sb-sidenav-menu">
          <div className="nav">
            <div className="sb-sidenav-menu-heading">Core</div>
            <Link className="nav-link" href="/">
              <div className="sb-nav-link-icon">
                <RiDashboard3Line/>
              </div>
              Dashboard
            </Link>
            <div className="sb-sidenav-menu-heading">Interface</div>
            <button
              className="nav-link collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#collapseLayouts"
              aria-expanded="false"
              aria-controls="collapseLayouts"
            >
              <div className="sb-nav-link-icon">
                <BsLayoutSplit/>
              </div>
              Layouts
              <div className="sb-sidenav-collapse-arrow">
               <IoIosArrowDown/>
              </div>
            </button>
            <div
              className="collapse"
              id="collapseLayouts"
              aria-labelledby="headingOne"
              data-bs-parent="#sidenavAccordion"
            >
              <nav className="sb-sidenav-menu-nested nav">
                <Link className="nav-link" href="/staticNav">
                  Static Navigation
                </Link>
                <Link className="nav-link" href="/lightStatic">
                  Light Sidenav
                </Link>
              </nav>
            </div>
            <Link
              className="nav-link collapsed"
              href="/"
              data-bs-toggle="collapse"
              data-bs-target="#collapsePages"
              aria-expanded="false"
              aria-controls="collapsePages"
            >
              <div className="sb-nav-link-icon">
               <BsBook/>
              </div>
              Pages
              <div className="sb-sidenav-collapse-arrow">
              <IoIosArrowDown/>
              </div>
            </Link>
            <div
              className="collapse"
              id="collapsePages"
              aria-labelledby="headingTwo"
              data-bs-parent="#sidenavAccordion"
            >
              <nav
                className="sb-sidenav-menu-nested nav accordion"
                id="sidenavAccordionPages"
              >
                <a
                  className="nav-link collapsed"
                  href="#"
                  data-bs-toggle="collapse"
                  data-bs-target="#pagesCollapseAuth"
                  aria-expanded="false"
                  aria-controls="pagesCollapseAuth"
                >
                  Authentication
                  <div className="sb-sidenav-collapse-arrow">
                  <IoIosArrowDown/>
                  </div>
                </a>
                <div
                  className="collapse"
                  id="pagesCollapseAuth"
                  aria-labelledby="headingOne"
                  data-bs-parent="#sidenavAccordionPages"
                >
                  <nav className="sb-sidenav-menu-nested nav">
                    <Link className="nav-link" href="/login">
                      Login
                    </Link>
                    <Link className="nav-link" href="/register">
                      Register
                    </Link>
                    <Link className="nav-link" href="/forget">
                      Forgot Password
                    </Link>
                  </nav>
                </div>
                <a
                  className="nav-link collapsed"
                  href="#"
                  data-bs-toggle="collapse"
                  data-bs-target="#pagesCollapseError"
                  aria-expanded="false"
                  aria-controls="pagesCollapseError"
                >
                  Error
                  <div className="sb-sidenav-collapse-arrow">
                  <IoIosArrowDown/>
                  </div>
                </a>
                <div
                  className="collapse"
                  id="pagesCollapseError"
                  aria-labelledby="headingOne"
                  data-bs-parent="#sidenavAccordionPages"
                >
                  <nav className="sb-sidenav-menu-nested nav">
                    <Link className="nav-link" href="/401">
                      401 Page
                    </Link>
                    <Link className="nav-link" href="/404">
                      404 Page
                    </Link>
                    <Link className="nav-link" href="/500">
                      500 Page
                    </Link>
                  </nav>
                </div>
              </nav>
            </div>
            <div className="sb-sidenav-menu-heading">Addons</div>
            <Link className="nav-link" href="/charts">
              <div className="sb-nav-link-icon">
                <FaChartBar/>
              </div>
              Charts
            </Link>
            <Link className="nav-link" href="/tableDash">
              <div className="sb-nav-link-icon">
                <FaTable/>
              </div>
              Tables
            </Link>
          </div>
        </div>
        <div className="sb-sidenav-footer">
          <div className="small">Logged in as:</div>
          Start Bootstrap
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
