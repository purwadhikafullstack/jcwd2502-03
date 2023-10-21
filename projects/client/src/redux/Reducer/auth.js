import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: 0,
    fullname: "",
    email: "",
    avatar: "",
    status: "",
    role: "",
    is_verified: "",
};

const authReducer = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.id = action.payload.id;
            state.fullname = action.payload.fullname;
            state.email = action.payload.email;
            state.avatar = action.payload.avatar;
            state.status = action.payload.status;
            state.role = action.payload.role;
            state.is_verified = action.payload.is_verified;
        },
        logout: () => {
            return initialState;
        },
    },
});

export const { login, logout } = authReducer.actions;

export default authReducer.reducer;
