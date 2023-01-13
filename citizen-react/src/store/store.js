import { configureStore } from "@reduxjs/toolkit";
import { CitizenSlice } from "./features";


const store = configureStore({
    reducer: {
        citizen: CitizenSlice,

    },
});

export default store;