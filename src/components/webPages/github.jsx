import React, { useEffect, useState } from "react";
import Terminal from "./terminal";
import { LuBookMarked } from "react-icons/lu";
import './github.scss'

const card=()=>{
    return(
        <div className="box">
            <div className="title">
                <LuBookMarked />
                <a href="http://">cp_journey</a>
                <p className="public">public</p>
            </div>
            <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita sapiente necessitatibus nostrum ea culpa. Optio rerum hic excepturi doloribus a!</p>
            <div className="buttom">
                <span className="stars"><i className="ri-star-s-line"></i> 0</span>
                <span className="forks"><i className="ri-git-fork-line"></i> 0</span>
            </div>
            
        </div>
    )
}
const Github=()=>{
    // const [userInfo,setUserInfo]=useState(null);
    // const [repoInfo,setRepoInfo]=useState([]);
    
    // useEffect(()=>{
    //     const fetching_data=async ()=>{
    //         const response=await fetch('http://localhost:3000/api/github/user')
    //         const userData=await response.json();
    //         console.log("fetched:", userData);
    //         setUserInfo(userData.user_info);
    //     }
    //     fetching_data();
    // },[])
    
    // useEffect(()=>{
    //     console.log("user info updated:", userInfo);
    // },[userInfo])
    
    return(
        <Terminal>
            <div className="profile">
                <div className="avatar">
                    <img src="https://avatars.githubusercontent.com/u/159712478?v=4" alt="GitHub Avatar"/>

                </div>
                <div className="repos">
                    {card()}
                    {card()}
                    {card()}
                    {card()}
                </div>
            </div>
        </Terminal>
    )
}

export default Github;