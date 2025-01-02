import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { endPoints } from "../../common/endpoints";
import { getData } from "../../service/httpService";

const initialState = {
    kpiMetrics: [],
    isLoading: false,
    errorMessage: ''
}

export const getMetricsForTiles = createAsyncThunk('dashboard/kmi-tiles',
    async () => {
        try {
            const apiUrl = endPoints.kmiDetailTiles;
            const response = await getData(apiUrl);
            return response.data;
        }
        catch (error) {
            return error;
        }
    }
);

export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getMetricsForTiles.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(getMetricsForTiles.fulfilled, (state, action) => {
                state.isLoading = false;
                state.kpiMetrics = action.payload;
            })
            .addCase(getMetricsForTiles.rejected, (state, action) => {
                state.errorMessage = 'Unable to load the metrics for tiles';
                state.isLoading = false;
                state.kpiMetrics = [];
            })
    }
}
);

export const { } = dashboardSlice.actions;
export default dashboardSlice.reducer;