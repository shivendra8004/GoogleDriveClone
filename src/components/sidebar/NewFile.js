import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import "../../styles/NewFile.css";

import firebase from 'firebase/app';
import 'firebase/storage'; // Import storage module
import 'firebase/firestore'; // Import firestore module
import { storageRef, db } from "../../firebase";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 5,
    p: 4,
    borderRadius: "8px",
};
const NewFile = () => {
    const [open, setOpen] = useState(false);
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleChange = (e) => {
        if (e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };
    const handleUpload = () => {
        setUploading(true);
        storageRef
            .child(`files/${file.name}`)
            .put(file)
            .then((snapshot) => {
                console.log(snapshot);
                storageRef
                    .child("files")
                    .child(file.name)
                    .getDownloadURL()
                    .then((url) => {
                        // Fixed typo "thrn" to "then"
                        db.collection("myFiles").add({
                            timestamp: firebase.firestore.FieldValue.serverTimestamp(), // Fixed reference to firestore.FieldValue
                            caption: file.name,
                            fileUrl: url,
                            size: snapshot._delegate.bytesTransferred,
                        });
                        setUploading(false);
                        setOpen(false);
                        setFile(null);
                    });
            });
    };

    return (
        <div className="newFile">
            <div className="newFile_container" onClick={handleOpen}>
                <AddIcon />
                <p>New</p>
            </div>
            <div>
                <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                    <Box sx={style}>
                        <p>Select files you want to upload!</p>
                        {uploading ? (
                            <p>Uploading...</p>
                        ) : (
                            <>
                                <input type="file" onChange={handleChange} />
                                <button onClick={handleUpload}>Upload</button>
                            </>
                        )}
                    </Box>
                </Modal>
            </div>
        </div>
    );
};

export default NewFile;
