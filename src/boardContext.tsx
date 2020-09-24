import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {RootState} from "./store";

interface AppState {
    board:string[][];
};

const initialState: AppState = {
    board: [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],
        ["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],
        [".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]],
};

export const slice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        changeBoard (state, action: PayloadAction<string[][]>) {
            state.board = action.payload;
        },
    }
});

export const { changeBoard } = slice.actions;

export const selectBoard = (state: RootState) => state.app.board;

export default slice.reducer;
