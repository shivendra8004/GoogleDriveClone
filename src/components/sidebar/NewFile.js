import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { storage, db } from "../../firebase";

import { makeStyles } from "@mui/styles";
import Modal from "@mui/material";
import "../../styles/NewFile.css";

function getModalStyle() {
    return {
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%,-50%)`,
    };
}
const useStyles = makeStyles((theme) => ({
    paper: {
        position: "absolute",
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: `2px solid #000`,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const NewFile = () => {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);
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
