import {createSlice} from "@reduxjs/toolkit";
import profile from "./profile.json"

const profileSlice = createSlice({
    name: "profile",
    initialState:profile,
    reducers:{
        updatePro(state, action){

            let curPro = state.find((curPro) =>
                curPro.id === action.payload.id)

            curPro.firstName = action.payload.firstName
            curPro.lastName = action.payload.lastName
            curPro.bio = action.payload.bio
            curPro.location = action.payload.location
            curPro.website = action.payload.website
            curPro.dateOfBirth = action.payload.dateOfBirth
            // console.log(curPro.firstName)
        },
        changeEdit(state, action){
            let curPro = state.find((curPro) =>
                curPro.id === action.payload.id)

            curPro.editing = ! curPro.editing
        }
    }
})


export const {updatePro, changeEdit} = profileSlice.actions
export default profileSlice.reducer;