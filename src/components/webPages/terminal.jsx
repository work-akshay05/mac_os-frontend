import React from "react";
import { Rnd } from "react-rnd";
import './terminal.scss'
import { MdMinimize } from "react-icons/md";
import { FaRegWindowRestore } from "react-icons/fa6";

const Terminal = ({children}) => {
    return (
        <Rnd 
        default={{
                width: 1000,
                height: 600,
                x: 20,
                y: 20
            }}
        >
            <div className="terminal">
                <div className="top">
                    <div className="windowCntlIcon cross"><i class="ri-close-fill"></i></div>
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