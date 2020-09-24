import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {selectBoard} from "./boardContext";
import {solveSudoku} from "./sudokusolver";
import {Container, Button, FormText} from "react-bootstrap";


export function DisplayBoard() {
    const [state, setState] = useState(0);
    const board = useSelector(selectBoard);

    return(
        <>
            <h1 className={"title"}>Sudoku Solver</h1>
            {visualRepresentation(board)}
            <div className={"buttonhome"}>
                <Button variant="primary" size="lg" onClick={solve} >Submit</Button>
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
        displayBoardRows.push(theBoard[i].map((value: any) => <FormText className={"item"}>{value}</FormText>));
    }

    let displayColumn = [];
    displayColumn.push(displayBoardRows.map((value:any) => <FormText className={"row"}>{value}</FormText>));

    return (
        <Container>
            {displayColumn}
        </Container>
    );
}


export default DisplayBoard;