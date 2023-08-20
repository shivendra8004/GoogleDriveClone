import React from "react";
import AddIcon from "@mui/icons-material/Add";
import CalenderIcon from "../../media/googlecalenderIcon.svg";
import KeepIcon from "../../media/googlekeepIcon.svg";
import TranslateIcon from "../../media/googletranslateIcon.svg";
import "../../styles/SideIcons.css";
const SideIcons = () => {
    return (
        <div className="sideIcons">
            <div className="sideIcons_top">
                <img src={CalenderIcon} alt="Google Calender" />
                <img src={KeepIcon} alt="Google Keep" />
                <img src={TranslateIcon} alt="Google Translate" />
            </div>
            <hr />
            <div className="sideIcons_plusIcon">
                <AddIcon />
            </div>
        </div>
    );
};

export default SideIcons;
