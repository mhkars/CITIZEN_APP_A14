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
    reducers: {},
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

export default citizenSlice.reducer;
