import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("wishlist")) || [];

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        wishlist: (state, { payload }) => {
            const index = state.findIndex((el) => el.id === payload.id);
            if (index < 0) {
                state.push(payload);
            } else {
                state.splice(index, 1);
            }
            localStorage.setItem("wishlist", JSON.stringify(state));
        }
    }
});

export const { wishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
