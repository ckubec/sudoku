import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {selectBoard} from "./boardContext";
import {solveSudoku} from "./sudokusolver";
import {Button, Container} from "@material-ui/core";


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
    let idNum = 0;

    for(let i = 0; i<9; i++) {
        displayBoardRows.push(theBoard[i].map((value: any) => <Button variant={"outlined"} className={"item"} key={idNum++}>{value}</Button>));
    }

    let displayColumn = [];
    displayColumn.push(displayBoardRows.map((value:any) => <div className={"row"}>{value}</div>));

    return (
        <Container className={"container"} maxWidth={"xl"}>
            {displayColumn}
        </Container>
    );
}

export default DisplayBoard;