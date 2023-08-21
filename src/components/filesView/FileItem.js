import React from "react";
import "../../styles/FileItem.css";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import { dbCollection, storage } from "../../firebase";
import { ref, deleteObject } from "firebase/storage";
import { doc, deleteDoc } from "firebase/firestore/lite";
import { message } from "antd";
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const FileItem = ({ id, caption, timestamp, fileUrl, size, userEmail, state, setState }) => {
    const fileDate = `${timestamp?.toDate().getDate()} ${monthNames[timestamp?.toDate().getMonth()]} ${timestamp?.toDate().getFullYear()}`;

    const getReadableFileSizeString = (fileSizeInBytes) => {
        let i = -1;
        const byteUnits = [" kB", " MB", " GB", " TB", "PB", "EB", "ZB", "YB"];
        do {
            fileSizeInBytes = fileSizeInBytes / 1024;
            i++;
        } while (fileSizeInBytes > 1024);

        return Math.max(fileSizeInBytes, 0.1).toFixed(1) + byteUnits[i];
    };

    const handleDelete = async (id) => {
        try {
            const deleteCollectionRef = doc(dbCollection, `${userEmail}`, id);
            await deleteDoc(deleteCollectionRef);
            const deleteStorageRef = ref(storage, `files/${userEmail}/${caption}`);
            await deleteObject(deleteStorageRef);
            message.success("File Deleted");
            setState(!state);
        } catch (error) {
            setState(!state);
            console.error(error);
            message.error("File Deletion Failed");
        }
    };
    return (
        <div className="fileItem">
            <div className="fileItem_left">
                <InsertDriveFileIcon />
                <p>{caption}</p>
            </div>
            <div className="fileItem_right">
                <p>{fileDate}</p>
                <p>{getReadableFileSizeString(size)}</p>
                <p>
                    <a href={fileUrl} target="_blank" download rel="noreferrer">
                        <VisibilityIcon />
                    </a>
                </p>
                <p>
                    <DeleteIcon onClick={() => handleDelete(id)} />
                </p>
            </div>
        </div>
    );
};

export default FileItem;
