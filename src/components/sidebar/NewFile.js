import React from "react";
import AddIcon from "@mui/icons-material/Add";
import "../../styles/NewFile.css";
const NewFile = () => {
    return (
        <div className="newFile">
            <div className="newFile_container">
                <AddIcon />
                <p>New</p>
            </div>
        </div>
    );
};

export default NewFile;
