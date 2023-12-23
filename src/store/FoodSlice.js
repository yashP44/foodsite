import { createSlice } from "@reduxjs/toolkit";

const addFood = createSlice({
    name: 'addfood',
    initialState: [],
    reducers: {
        addItem: (state, action) => { },
        removeItem: (state, action) => { },
        clearCart: () => { }
    },
})