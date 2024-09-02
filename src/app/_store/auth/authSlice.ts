import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogin: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // handleOnLogin: (state, action: PayloadAction<TPayloadHandleOnLogin>) => {},
  },
});

export default authSlice.reducer;
