import { createAsyncThunk,createSlice  } from "@reduxjs/toolkit";
import axios from "axios";
import citizenService from "../../config/CitizenService";

const initialStateCitizen={
    citizenListUpdate: false,
    returnCitizenCreate: false,
    isCitizenProfile: false,
    citizen: {
    },
    citizenList: [],
    filterList: [],
    isLoading: false,
    error: {
        code: "",
        message: "",
        fields: [],
    },
};

export const getCitizens = createAsyncThunk(
    "citizen/getCitizens",
    async (search) => {
        try {
            const response = await axios.get(citizenService.getCitizens, {
                headers: {
                  'Content-Type': 'application/json',
                },
              })
          
              return response.data
            } catch (error) {
              return error.response.data
              }
    }
);

const citizenSlice = createSlice({
    name: "citizen",
    initialState: initialStateCitizen,
    reducers: {
    setCitizenList: (state, action) =>{
    state.citizenList=action.payload}

    },
    extraReducers: (build) => {
        build.addCase(getCitizens.fulfilled, (state, action) => {
            state.citizenList= action.payload;
            state.isLoadingCitizen= false;
        });
        build.addCase(getCitizens.pending, (state, action) => {
            state.isLoadingCitizen= true;
        });
        build.addCase(getCitizens.rejected, (state, action) => {
            state.isLoadingCitizen= false;
            state.error = action.payload;
        });
    },
});

export const {setCitizenList }= citizenSlice.actions;
export default citizenSlice.reducer;
