import React from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import "../../styles/SidebarItem.css";
const SidebarItems = ({ arrow, icon, label }) => {
    return (
        <div className="sidebarItem">
            <div className="sidebarItem_arrow">{arrow && <ArrowRightIcon />}</div>
            <div className="sidebarItem_main">
                {icon} <p>{label}</p>
            </div>
        </div>
    );
};

export default SidebarItems;
