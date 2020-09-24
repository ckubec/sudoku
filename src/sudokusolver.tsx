/**
 * Solving the board we have entered
 * @param board is the 3 dimensional array of input values
 */
import React from "react";

export function solveSudoku(board:any) {
    solve(board)
    return visualRepresentation(board);
};

/**
 * Validates the value of the current cell we're sitting in
 * @param cellValue The current value of the cell
 * @param position Where are we in the grid
 * @param theBoard The values of the entire board
 */
function validate(cellValue:string, position:number[], theBoard:number[][]){
    const [row, column] = position;

    // Checking the Row we're in
    for(let i = 0; i < 9; i++) {
        if(theBoard[i][column].toString() === cellValue && i !== row) {
            return false;
        }
    }

    // Checking the column we're in
    for(let i = 0; i < 9; i++) {
        if(theBoard[row][i].toString() === cellValue && i !== column) {
            return false;
        }
    }

    // Lets Check the 3x3 square we're in
    const boxRow = Math.floor(row / 3) * 3;
    const boxCol = Math.floor(column / 3) * 3;
    for(let i = boxRow; i < boxRow + 3; i++) {
        for(let j = boxCol; j < boxCol + 3; j++) {
            if(theBoard[i][j].toString() === cellValue && i !== row && j !== column) {
                return false
            }
        }
    }

    return true
}

/**
 * Find the first empty cell
 * @param theBoard
 */
function findEmpty (theBoard:[][]) {
    for(let row = 0; row < 9; row++) {
        for(let column = 0; column < 9; column++) {
            if(theBoard[row][column] === '.') {
                return [row, column]
            }
        }
    }
    return null
}

/**
 * Solve the sudoku board
 * @param board 3 dimensional array representing the board
 */
function solve (theBoard:any) {
    const currentPosition = findEmpty(theBoard);
    //If board is full let us break out
    if(currentPosition === null) {
        return true
    }

    //loop through 9 since sudoku is 9*9
    for(let i = 1; i <= 9; i++) {
        const currentValue = i.toString();

        if( validate(currentValue, currentPosition, theBoard) ) {
            const [y, x] = currentPosition;
            theBoard[y][x] = currentValue;

            if(solve(theBoard)) {
                return true
            }

            theBoard[y][x] = '.'
        }
    }
    return false
}

/**
 * Getting the visual representation to display the numbers 9x9
 * @param theBoard
 */
function visualRepresentation(theBoard:any) {
    let displayBoardRows = [];

    for(let i = 0; i<9; i++) {
        displayBoardRows.push(theBoard[i].map((value: any) => <div className={"item"}>{value}</div>));
    }

    let displayColumn = [];
    displayColumn.push(displayBoardRows.map((value:any) => <div className={"row"}>{value}</div>));

    return (
        <div className={"board"}>
            {displayColumn}
        </div>
    );
}