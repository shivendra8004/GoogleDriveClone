import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import GDriveIcon from "../../media/gdriveIcon.png";
import "../../styles/Header.css";
const index = ({ userPhoto }) => {
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
                <img src={userPhoto} alt="User Profile" />
            </div>
        </div>
    );
};

export default index;
