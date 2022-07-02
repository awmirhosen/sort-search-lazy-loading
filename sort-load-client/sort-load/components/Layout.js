import React from "react";
import Link from "next/link";
import Head from "next/head";
import LayoutRouter from "next/dist/client/components/layout-router.client";
import {useRouter} from "next/router";

const Layout = (props) => {
    const router = useRouter()

    return (
     <>

         <Head>
             <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
                   rel="stylesheet"
                   integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
                   crossOrigin="anonymous" />
         </Head>

         <header className='d-flex justify-content-center py-3'>
             <ul className='nav nav-pills'>
                 <li className='nav-item'>

                 </li>
             </ul>
         </header>


         <div className="album py-5 bg-light">
             <div className="container">
                 {props.children}
             </div>
         </div>
     </>
    )
}

export default Layout;