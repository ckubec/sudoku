import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {selectBoard} from "./boardContext";
import {solveSudoku} from "./sudokusolver";
import {Button} from "@material-ui/core";


export function DisplayBoard() {
    const [state, setState] = useState(0);
    const board = useSelector(selectBoard);

    return(
        <>
            <h1 className={"title"}>Sudoku Solver</h1>
            {visualRepresentation(board)}
            <button onClick={solve} >Submit</button>
        </>
    );

    function solve() {
        let temp = solveSudoku(board);
        setState(temp);
    }
}

function visualRepresentation(theBoard:any) {
    let displayBoardRows = [];

    for(let i = 0; i<9; i++) {
        displayBoardRows.push(theBoard[i].map((value: any) => <Button variant={"outlined"} className={"item"}>{value}</Button>));
    }

    let displayColumn = [];
    displayColumn.push(displayBoardRows.map((value:any) => <div className={"row"}>{value}</div>));

    return (
        <div className={"container"}>
            {displayColumn}
        </div>
    );
}

export default DisplayBoard;