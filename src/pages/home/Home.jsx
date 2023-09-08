import React from 'react';
import Sidebar from "../../components/Sidebar/Sidebar"
import Header from "../../components/heder/Header"
import Posts from "../../components/posts/Posts"
import "./home.css"

export default function Home() {
  return (
    <>
          <Header/>
      <div className="home">
          <Posts/>
          <Sidebar/>
      </div>
    </>
  )
}
