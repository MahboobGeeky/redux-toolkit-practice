import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: JSON.parse(localStorage.getItem("countValue")) || 0,
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state,action) => {
            state.value += 1;
        },
        decrement: (state,action) => {
            if(state.value>0) state.value -= 1;
        },
        reset: (state,action) => {
            state.value = 0;
        },
    },
});

export const {increment, decrement, reset} = counterSlice.actions
export default counterSlice.reducer;
