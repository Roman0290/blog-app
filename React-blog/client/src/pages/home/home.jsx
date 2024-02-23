import "./home.css";
import Header from '../../components/header/header';
// import Post from "../../components/post/Post";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Posts from "../../components/posts/Posts";



export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("/posts" + search);
        setPosts(res.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
  
    fetchPosts();
  }, [search]);
  
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}
