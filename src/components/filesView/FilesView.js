import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore/lite";
import { dbCollection } from "../../firebase";
import FileItem from "./FileItem";
import "../../styles/FilesView.css";
const FilesView = () => {
    const [files, setFiles] = useState([]);
    useEffect(() => {
        const fetch = async () => {
            const tempFiles = [];
            try {
                const querySnapshot = await getDocs(collection(dbCollection, "myFiles"));
                querySnapshot.forEach((doc) => {
                    tempFiles.push({
                        id: doc.id,
                        item: doc.data(),
                    });
                });
                setFiles(tempFiles);
            } catch (error) {
                console.log(error);
            }
        };
        fetch();
    }, []);
    return (
        <div className="filesview">
            <div className="filesview_row"></div>
            <div className="filesview_titles">
                <div className="filesview_tiles_left">
                    <p>Name</p>
                </div>
                <div className="filesview_tiles_right">
                    <p>Last Modified</p>
                    <p>File Size</p>
                </div>
            </div>
            {files.map(({ id, item }) => (
                <FileItem key={id} id={id} caption={item.caption} timestamp={item.timestamp} fileUrl={item.fileUrl} size={item.size} />
            ))}
        </div>
    );
};

export default FilesView;
