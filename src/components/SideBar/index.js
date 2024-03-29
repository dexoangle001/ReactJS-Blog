import React,{useState,useEffect} from "react";
import "./style.css";
import Card from "../UI/Card";
import blogPost from "../../data/blog.json"
import { NavLink } from "react-router-dom";

const SideBar=(props)=>{

    const [posts,setPosts]=useState([]);    

    useEffect(()=>{
        const posts=blogPost.data;        
        setPosts(posts);
    },[posts]);



    return(
       
        <div className="sidebarContainer" >
            <Card style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box'}}>
                <div className="cardHeader">
                    <span>About Us</span>
                </div>

                <div className="profileImageContainer">
                        <img src={require("../../assets/blogPostImages/bene.jpg")}  alt="Image"  />
                </div>

                <div className="cardBody">
                    <p className="personalBio">Hi,I'm Benedicta Okoh, widely known as the world best Economics Analyst.....</p>
                </div>

            </Card>

            <Card>
                <div className="cardHeader">
                    <span>Social Network</span>
                </div>
            </Card>

            <Card style={{marginBottom:'20px',boxSizing:'border-box',marginTop:'20px'}}>
                <div className="cardHeader">
                    <span>Recent Posts</span>
                </div>

                <div className="recentPosts">

                {
                    posts.map(post=>{
                        return(
                            <NavLink key={post.id} to={`/post/${post.slug}`}>
                            <div className="recentPost">
                                <h3>{post.blogTitle} </h3>
                                <span>{post.postedOn} </span>
                            </div>
                            </NavLink>
                            
                        )
                    })
                }
                
                </div>
            </Card>
        </div>
        
    )
}


export default SideBar;