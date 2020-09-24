import React from 'react';
import {useSelector} from "react-redux";
import {selectBoard} from "./boardContext";

export function DisplayBoard() {
    const board = useSelector(selectBoard);
    console.log(board)

    return(
        <div>

        </div>
    );
}


export default DisplayBoard;