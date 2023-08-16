import React from "react";

const index = () => {
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

export default index;
