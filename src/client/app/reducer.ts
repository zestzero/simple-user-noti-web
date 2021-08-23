import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CommonState {
    gatewayUrl: string;
}

const initialState: CommonState = {
    gatewayUrl: '',
};

const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        setup(state, action: PayloadAction<CommonState>) {
            state = action.payload;
        }
    }
})

export const { setup } = commonSlice.actions
export default commonSlice.reducer
