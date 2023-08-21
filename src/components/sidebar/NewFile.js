import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { message } from "antd";
import "../../styles/NewFile.css";
// import firebase from "firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection, serverTimestamp } from "firebase/firestore/lite";
import { storage, dbCollection } from "../../firebase";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CircularProgress from "@mui/material/CircularProgress";
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    height: 300,
    bgcolor: "background.paper",
    boxShadow: 5,
    borderRadius: "8px",
};
const NewFile = ({ state, setState, userEmail }) => {
    const [open, setOpen] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [noOfFiles, setNoOfSelectedFile] = useState(0);
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleChange = (e) => {
        const files = e.target.files;
        const updatedSelectedImages = [];
        for (let i = 0; i < files.length; i++) {
            updatedSelectedImages.push(files[i]);
        }
        setNoOfSelectedFile(files.length);
        setSelectedFiles(updatedSelectedImages);
    };
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleUpload = async () => {
        setUploading(true);
        if (selectedFiles.length > 0) {
            for (let i = 0; i < selectedFiles.length; i++) {
                const storeFile = selectedFiles[i];
                const fileRef = ref(storage, `files/${userEmail}/${storeFile.name}`);
                const snapshot = await uploadBytes(fileRef, storeFile);
                const downloadURL = await getDownloadURL(snapshot.ref);
                try {
                    const collectionName = `${userEmail}`;
                    const myFilesRef = collection(dbCollection, collectionName);
                    await addDoc(myFilesRef, {
                        timestamp: serverTimestamp(),
                        caption: storeFile.name,
                        fileUrl: downloadURL,
                        size: snapshot.metadata.size,
                    });
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
            setState(!state);
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
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                borderBottom: "1px solid #000000",
                                padding: "15px 30px 5px 30px",
                            }}
                        >
                            <p style={{ margin: "0", fontSize: "1.3rem", fontWeight: "550" }}>Upload File</p>
                            <CloseOutlinedIcon style={{ cursor: "pointer" }} onClick={handleClose} />
                        </div>
                        <div style={{ padding: "15px 30px" }}>
                            <form
                                style={{
                                    border: "2px dashed #0066db",
                                    borderRadius: "8px",
                                    width: "100%",
                                    height: "170px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                {uploading ? (
                                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                        <CircularProgress />
                                        <p> Uploading...</p>
                                    </Box>
                                ) : (
                                    <div className="input_div">
                                        <input type="file" className="files" multiple onChange={handleChange} id="files" name="files" />
                                        <label htmlFor="files" className="files_icon">
                                            <CloudUploadIcon style={{ color: "#0066db", fontSize: "2.5rem" }} />
                                        </label>
                                        <label className="files_text" htmlFor="files">
                                            Select a file to Upload
                                        </label>
                                        <p>{noOfFiles} files selected</p>
                                    </div>
                                )}
                            </form>
                            <div className="" style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "15px" }}>
                                <button
                                    onClick={handleUpload}
                                    style={{
                                        display: "block",
                                        height: "35px",
                                        width: "70px",
                                        backgroundColor: "transparent",
                                        border: "1px solid #0066db",
                                        borderRadius: "8px",
                                        color: "#0066db",
                                        fontWeight: "550",
                                    }}
                                >
                                    {uploading ? (
                                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            <CircularProgress style={{ height: "20px", width: "20px" }} />
                                        </Box>
                                    ) : (
                                        "Upload"
                                    )}
                                </button>
                            </div>
                        </div>
                    </Box>
                </Modal>
            </div>
        </div>
    );
};

export default NewFile;
