import React from "react"
import Cheese from "../Types/Cheese";
//import deleteCheese from "../Api/deleteCheese";

interface UploadPhotoButtonProps {
    cheese: Cheese;
    onPhotoUploaded: () => void;
}

function UploadPhotoButton({ cheese, onPhotoUploaded }: UploadPhotoButtonProps) {
    const onClick = async () => {
        //await deleteCheese(cheeseId);

        onPhotoUploaded();
    }

    return (
        <>
            <button onClick={onClick}>Upload Photo</button>
        </>
    )
}

export default UploadPhotoButton;