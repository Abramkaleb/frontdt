import React from 'react';
import './SidebarApp.css';
import { SidebarData } from "./SidebarData";
import FaceIcon from '@mui/icons-material/Face';


const Sidebar = ({children}) => {
    return (
            <div className="Container">
            <div className="Sidebar">
            <div className="Sidebar2">
            <div className="Logo">
            <FaceIcon sx={{fontSize: 70}}/>
            <div className="Logotext">
                <h1>DIGITAL</h1>
                <h1>TWIN</h1> 
            <div className="Sidebackbar">       
            <ul className="SidebarList">
            {SidebarData.map((val, key) => {
            return (
            <li key={key} className="row" id={window.location.pathname === val.link ? "active" : " "} onClick={() => { window.location.pathname = val.link;}}>
            <div id="icon">{val.icon}</div><div id="title">{val.title}</div>
            </li>
            );
            })}

            </ul>
            </div>
            </div>
            </div>
            </div>
            </div>
            <main className='main_container'>{children}</main>
            </div>

            );
    }

export default Sidebar;