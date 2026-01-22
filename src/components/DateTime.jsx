import React, { useEffect } from "react";
import { useState } from "react";


const DateTime=()=>{
    const [datetime,setDatetime]=useState("");

    useEffect(()=>{
        const updatetime=()=>{
            const now=new Date();
            const formater=now.toLocaleString('en-US',{
                weekday:'short',
                month:'short',
                day:'numeric',
                hour:'2-digit',
                minute:'2-digit',
                second:'2-digit',
                hour12: true
            }).toLowerCase().replace(',','');
        setDatetime(formater);
        }

        updatetime();
        const interval=setInterval(updatetime,1000);
        return ()=>clearInterval(interval);
    },[])
    return (
        <div>{datetime}</div>
    );
}

export default DateTime;