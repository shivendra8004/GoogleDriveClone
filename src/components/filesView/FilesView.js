import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore/lite";
import { dbCollection } from "../../firebase";
const FilesView = () => {
    const files = [];
    const fetch = async () => {
        try {
            const querySnapshot = await getDocs(collection(dbCollection, "myFiles"));
            querySnapshot.forEach((doc) => {
                files.push({
                    id: doc.id,
                    item: doc.data(),
                });
            });
        } catch (error) {
            console.log(error);
        }
    };
    fetch();
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
        </div>
    );
};

export default FilesView;
