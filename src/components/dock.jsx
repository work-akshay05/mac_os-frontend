import React from "react";
import { Calendar } from "lucide-react";
import { Github } from "lucide-react";
import './dock.scss'

const Dock=()=>{
    return (
        <footer className="dock">
            <div className="icon github"><Github /></div>
            <div className="icon notes remix"><i class="ri-sticky-note-line"></i></div>
            <div className="icon pdf remix"><i class="ri-file-pdf-2-line"></i></div>
            <div className="icon calender"><Calendar /></div>
            <div className="icon spotify remix"><i class="ri-spotify-line"></i></div>
            <div className="icon mail remix"><i class="ri-mail-line"></i></div>
            <div className="icon link remix"><i class="ri-links-line"></i></div>
            <div className="icon cli remix"><i class="ri-terminal-line"></i></div>
        </footer>
    )
    
}
export default Dock;