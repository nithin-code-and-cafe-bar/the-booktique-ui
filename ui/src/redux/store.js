import { configureStore } from "@reduxjs/toolkit";
import dashBoardReducer from '../redux/reducers/dashboardReducer'

export const store = configureStore({
    reducer: {
        dashboard: dashBoardReducer
    },
});