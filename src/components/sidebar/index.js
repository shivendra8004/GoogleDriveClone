import React from "react";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import StorageIcon from "@mui/icons-material/Storage";
import NewFile from "./NewFile";
import SidebarItems from "./SidebarItems";
import "../../styles/Sidebar.css";

const index = ({ state, setState, userEmail }) => {
    return (
        <div className="sideBar">
            <NewFile state={state} setState={setState} userEmail={userEmail} />
            <div className="sideBar_itemsContainer">
                <SidebarItems arrow={true} icon={<InsertDriveFileIcon />} label={"My Drive"} />
                <SidebarItems arrow={true} icon={<ImportantDevicesIcon />} label={"Computers"} />
                <SidebarItems icon={<PeopleAltIcon />} label={"Shared with me"} />
                <SidebarItems icon={<QueryBuilderIcon />} label={"Recent"} />
                <SidebarItems icon={<StarBorderIcon />} label={"Starred"} />
                <SidebarItems icon={<DeleteOutlinedIcon />} label={"Bin"} />
                <SidebarItems icon={<StorageIcon />} label={"Storage"} />
            </div>
        </div>
    );
};

export default index;
