import React from "react"
import deleteCheese from "../Api/deleteCheese";

interface DeleteButtonProps {
    cheeseId : number;
    onCheeseDeleted : () => void;
}
function DeleteButton({cheeseId, onCheeseDeleted}  : DeleteButtonProps) {

    const onClick = async () => {
        await deleteCheese(cheeseId);

        onCheeseDeleted();
    }

    return (
        <>
          <button onClick={onClick}>Delete</button>
        </>
    )
}

export default DeleteButton;