import React from "react";
import "./settings.css"
import Sidebar from "../../components/Sidebar/Sidebar"
export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update your account</span>
            <span className="settingsDeleteTitle">Delete account</span>
          </div>
          <form action="" className="settingsForm">
            <label >Profile Picture</label>
            <div className="settingsPP">
              <img src="https://scontent.fnag10-1.fna.fbcdn.net/v/t1.6435-9/196833748_1677151405802067_6626006200618820223_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_ohc=DS4H97fby8sAX83abrh&_nc_ht=scontent.fnag10-1.fna&oh=00_AfC6Ww9k8FQR2-zbOmEKz8-ZDI4FsCEqun4nJg422kSv7w&oe=6516F1E0" alt="" />
              <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-regular fa-circle-user"></i>
              </label>
              <input type="file" id="fileInput" style={{display:"none"}} />
            </div>
            <label>Username</label>
            <input type="text" placeholder="Roshan Mungane" />
            <label>Email</label>
            <input type="text" placeholder="roshanmungane@gmail.com" />
            <label>Password</label>
            <input type="password"/>
            <button className="settingsSubmit">Update</button>
          </form>
        </div>
        <Sidebar/>
    </div>
  )
}
