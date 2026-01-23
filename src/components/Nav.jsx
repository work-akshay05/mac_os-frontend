import React from "react";
import './nav.scss'
import DateTime from "./DateTime";
const Nav=()=>{
    return (
        <nav className="navBar">
            <div className="left">
                <div className="appleIcon">
                    <p><i className="ri-apple-line"></i></p>
                </div>
                <div className="navItem">
                    <p>Akshay Kumar</p>
                </div>
                <div className="navItem">
                    <p>Files</p>
                </div>
                <div className="navItem">
                    <p>Window</p>
                </div>
                <div className="navItem">
                    <p>Terminal</p>
                </div>
            </div>
            <div className="right">
                <div className="wifi">
                    <i className="ri-wifi-line"></i>
                </div>
                <div className="dateTime">
                    <DateTime/>
                </div>
            </div>
        </nav>
    )
}
export default Nav;