import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const IdTask = createSlice({
	name: 'id',
	initialState,
	reducers: {
		addIdTask: (state, { payload }) => {
			return [payload];
		},
	},
});

export const { actions, reducer } = IdTask;
