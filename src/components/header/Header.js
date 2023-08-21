import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import GDriveIcon from "../../media/gdriveIcon.png";
import "../../styles/Header.css";

const Header = ({ user, setUser }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
    };
    return (
        <div className="header">
            <div className="header_logo">
                <img src={GDriveIcon} alt="GDrive Logo" />
                <span>Drive</span>
            </div>
            <div className="header_searchContainer">
                <div className="header_searchBar">
                    <SearchIcon />
                    <input type="search" placeholder="Search in Drive" />
                    <ExpandMoreIcon />
                </div>
            </div>
            <div className="header_icons">
                <span>
                    <HelpOutlineOutlinedIcon />
                    <SettingsIcon />
                </span>
                <AppsIcon />
                <img onClick={handleOpen} src={user.photoURL} alt="User Profile" />
            </div>
            <div className="modal">
                <div className="modal_content">
                    <img src={user.photoURL} height={"60px"} width={"60px"} alt="" />
                    <div className="email">{user.email}</div>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </div>
    );
};

export default Header;
