import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { message } from "antd";
import "../../styles/NewFile.css";
// import firebase from "firebase";
import firebase from "firebase/compat/app";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { ref as refD, push } from "firebase/database";
import { storage, db } from "../../firebase";

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
    const [uploading, setUploading] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleChange = (e) => {
        const files = e.target.files;
        const updatedSelectedImages = [];
        for (let i = 0; i < files.length; i++) {
            updatedSelectedImages.push(files[i]);
        }
        setSelectedFiles(updatedSelectedImages);
    };
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleUpload = async () => {
        setUploading(true);
        if (selectedFiles.length > 0) {
            for (let i = 0; i < selectedFiles.length; i++) {
                const storeFile = selectedFiles[i];
                const fileRef = ref(storage, `files/${storeFile.name}`);
                const snapshot = await uploadBytes(fileRef, storeFile);
                const downloadURL = await getDownloadURL(snapshot.ref);
                try {
                    const fileRef = refD(db, "files");
                    push(fileRef, { fileUrl: downloadURL, timestamp: new Date().getTime() });
                    message.success("File Uploaded!");
                    setUploading(false);
                    setOpen(false);
                    setSelectedFiles([]);
                } catch (error) {
                    setSelectedFiles([]);
                    setOpen(false);
                    setUploading(false);
                    message.error("Unable to upload files!");
                    console.log("Error In Uploading File", error);
                }
            }
        } else {
            setOpen(false);
            setUploading(false);
            message.warning("No files selected!");
        }
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
                                <input type="file" multiple onChange={handleChange} />
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
