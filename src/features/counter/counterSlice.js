import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

export const CounterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        rest: (state) => {
            state.count = initialState.count;
        }, 
        incrementbyamount: (state,action) => {
            state.count += action.payload;
        }
    }
})

export const { increment, decrement, rest,incrementbyamount } = CounterSlice.actions;

export default CounterSlice.reducer;