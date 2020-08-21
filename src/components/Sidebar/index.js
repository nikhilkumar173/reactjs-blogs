import React,{useState,useEffect} from 'react';
import './style.css';
import Card from '../UI/Card';
import blogPost from "../../data/blog.json";
import { NavLink } from 'react-router-dom';

/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {
  
  const[posts, setPost]= useState([]);    
    useEffect(()=> {
        const posts = blogPost.data;
        setPost(posts);
    },[posts]);

  return(
      <div className="sidebarContainer" style={{
        width:props.width
      }}>
        <Card style={{marginBottom:'20px', padding:'20px',boxSizing:'border-box'}}>
          <div className="cardHeader">
            <span>ABOUT Us</span>
          </div>
          <div className="profileimageContainer">
            <img src="https://instagram.fpat1-1.fna.fbcdn.net/v/t51.2885-19/s320x320/45798714_508638832976954_9061632815552004096_n.jpg?_nc_ht=instagram.fpat1-1.fna.fbcdn.net&_nc_ohc=NHoy6tBcytwAX-_GQxL&oh=51602ccb7254f51b434edc8624153709&oe=5F6351E3 " alt="" />
          </div>
          <div className="cardBody">
            <p className="personalBio">My name is Nikhil Singh I am a software developer specialization in Front end developement.....</p>
          </div>
        </Card>

        <Card style={{marginBottom:'20px', padding:'20px',boxSizing:'border-box'}}>
          <div className="cardHeader">
            <span>Social Network</span>
          </div>
        </Card>
        <Card style={{marginBottom:'20px', padding:'20px',boxSizing:'border-box'}}>
          <div className="cardHeader">
            <span>Recent Posts</span>
          </div>

          <div className="recentPosts">
            {
              posts.map(post =>{
                return(
                  <NavLink key={post.id}to={`/post/${post.slug}`}>
                    <div className="recentPost">
                      <h3>{post.blogTitle}</h3>
                      <span>{post.postedOn}</span>
                    </div>
                  </NavLink>
                  
                );
              })
            }
            
          </div>
        </Card>
      </div>
   )

 }

export default Sidebar