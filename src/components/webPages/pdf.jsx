import React from "react";
import Terminal from "./terminal";
import resume from "../../assets/akshay_kumar_14thjan.pdf"
import './pdf.scss'

const PdfView=()=>{
    return (
        <Terminal height={600} width={600}>
            <div className="resume">
                <iframe className="file" src={resume} frameBorder="0"></iframe>
            </div>
        </Terminal>
    )
}

export default PdfView;