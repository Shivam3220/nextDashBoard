import Navbar from "@/Components/Navbar";
import SideBar from "@/Components/SideBar";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import Script from "next/script";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [ToggleSideBar, setToggleSideBar] = useState(true);
  const router= useRouter()
 

  return (
    <>{
      router.pathname!="/login"&& router.pathname!="/forget"&& router.pathname!="/register"&&router.pathname!="/404"&&router.pathname!="/401"&&router.pathname!="/500"? <>
      <div id="layoutSidenav">
        <div id="layoutSidenav_content">
          <Navbar
            setToggleSideBar={setToggleSideBar}
            ToggleSideBar={ToggleSideBar}
          />
          </div>
      </div>
          <div className={`${ToggleSideBar ? "d-flex " : "d-block "}`}>
            <SideBar ToggleSideBar={ToggleSideBar} />
            <Component {...pageProps} />
          </div>
          </>:<> <Component {...pageProps} /></>
    }
   
        
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></Script>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js" crossorigin="anonymous"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/simple-datatables@7.1.2/dist/umd/simple-datatables.min.js" crossorigin="anonymous"></Script>
    </>
  );
}
