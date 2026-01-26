import React, { useEffect, useState } from "react";
import Terminal from "./terminal";
import { LuBookMarked } from "react-icons/lu";
import './github.scss'
import commitImg from '../../assets/commitimg.png'

const card=()=>{
    return(
        <div className="box">
            <div className="title">
                <LuBookMarked />
                <a className="repo_name" href="http://">cp_journey</a>
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
    const [userInfo,setUserInfo]=useState(null);
    const [repoInfo,setRepoInfo]=useState([]);
    
    useEffect(()=>{
        const fetching_data=async ()=>{
            const response=await fetch('http://localhost:3000/api/github/user')
            const userData=await response.json();
            console.log("fetched:", userData);
            setUserInfo(userData.user_info);
        }
        fetching_data();
    },[])
    
    useEffect(()=>{
        console.log("user info updated:", userInfo);
    },[userInfo])
    
    return(
        <Terminal>
            <div className="profile">
                <div className="avatar">
                    <img src={userInfo?.avatar_url} alt="GitHub Avatar"/>
                    <h2 className="name">{userInfo?.name}</h2>
                    <h3 className="userName">{userInfo?.login}</h3>
                    <div className="followersCnt">
                        <i class="ri-group-fill icon"></i>
                        <span className="followers">{userInfo?.followers} followers</span> ·
                        <span className="following">{userInfo?.following} following</span>
                    </div>
                    <hr className="hr" />
                </div>
                <div className="repo_commit">
                    <div className="repos">
                    {card()}
                    {card()}
                    {card()}
                    {card()}
                </div>
                <div className="commits">
                    <h3>Commits in the last year</h3>
                    <img className="commit_table" src={commitImg} alt="GitHub Commit Chart"/>
                </div>
                </div>
                
            </div>
        </Terminal>
    )
}

export default Github;