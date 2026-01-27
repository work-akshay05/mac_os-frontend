import React from "react";
import { Rnd } from "react-rnd";
import './terminal.scss'
import { MdMinimize } from "react-icons/md";
import { FaRegWindowRestore } from "react-icons/fa6";

const Terminal = ({children, height = 600, width = 600}) => {
    return (
        <Rnd 
        default={{
                width: width,
                height: height,
                x: 20,
                y: 20
            }}
        >
            <div className="terminal">
                <div className="top">
                    <div className="windowCntlIcon cross"><i className="ri-close-fill"></i></div>
                    <div className="windowCntlIcon minimize"><MdMinimize /></div>
                    <div className="windowCntlIcon restore"><FaRegWindowRestore /></div>
                    <div className="file-local">./Terminal.zsh</div>
                </div>
                <div className="bottom">
                    {children}
                </div>
            </div>
        </Rnd>
    );
}

export default Terminal;