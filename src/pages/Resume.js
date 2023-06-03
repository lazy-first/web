import React from "react";
import { storage } from "../firebase";

export default function Resume() {
    const formHandler = (e) => {
        e.preventDefault();
        const file = e.target[0].files[0];
        console.log(file);
    };

    const UploadFiles = (file) => {
        //
    };

    return(
        <div className="Resume">
            <form onSubmit={formHandler}>
                <input type="file" className="input"/>
                <button type="submit">Upload</button>
            </form>
        </div>
    )
}