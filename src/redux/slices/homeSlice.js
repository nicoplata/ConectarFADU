import { createSlice } from "@reduxjs/toolkit"; 
import { careers } from "../../data/careers";
import { classes } from "../../data/classes"

const homeSlice = createSlice({
    name: "home",

    initialState: {
        allCareers: careers,
        allClasses: classes,
        careerPressed: "",
        classesFilteredByCareer: [],
        classPressed: {},
    },

    reducers: {
        setCareerPressed: (state, action) => {
            state.careerPressed = action.payload;
        },

        setClassPressed: (state, action) => {
            state.classPressed = action.payload;

        }

    },
})

export const { setCareerPressed, setClassPressed } = homeSlice.actions;

export default homeSlice.reducer;