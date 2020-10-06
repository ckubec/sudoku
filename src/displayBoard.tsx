import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {selectBoard} from "./boardContext";
import {solveSudoku} from "./sudokusolver";


export function DisplayBoard() {
    const [state, setState] = useState(0);
    const board = useSelector(selectBoard);

    return(
        <>
            <h1 className={"title"}>Sudoku Solver</h1>
            {visualRepresentation(board)}
            <div className={"buttonhome"}>
                <button onClick={solve} >Submit</button>
            </div>
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
        displayBoardRows.push(theBoard[i].map((value: any) => <div className={"item"}>{value}</div>));
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