import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore/lite";
import { dbCollection } from "../../firebase";
import FileItem from "./FileItem";
import "../../styles/FilesView.css";
import FileCard from "./FileCard";
const FilesView = ({ state, userEmail }) => {
    const [files, setFiles] = useState([]);
    useEffect(() => {
        const fetch = async () => {
            const tempFiles = [];
            try {
                const collectionPath = `${userEmail}`;
                const querySnapshot = await getDocs(collection(dbCollection, collectionPath));
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
    }, [state]);
    return (
        <div className="filesview">
            <div className="filesview_row">
                {files?.slice(0, 6)?.map(({ id, item }) => (
                    <FileCard key={id} name={item.caption} />
                ))}
            </div>
            <div className="filesview_titles">
                <p className="name">Name</p>
                <p>Last Modified</p>
                <p>File Size</p>
                <p>View</p>
                <p>Delete</p>
            </div>
            {files.length > 0 ? (
                <>
                    {files.map(({ id, item }) => (
                        <FileItem key={id} id={id} caption={item.caption} timestamp={item.timestamp} fileUrl={item.fileUrl} size={item.size} />
                    ))}
                </>
            ) : (
                <div className="filesview_noFiles">
                    <span>There are no files to display</span>
                    <span>Add files using New button</span>
                </div>
            )}
        </div>
    );
};

export default FilesView;
