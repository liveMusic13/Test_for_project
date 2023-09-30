import { createSlice } from '@reduxjs/toolkit';

const initialState = [
	{
		id: 1231,
		title: 'Тестовое',
		description: 'Пройти тестовое и попасть на проект',
		isDone: false,
	},
];

export const Tasks = createSlice({
	name: 'tasks',
	initialState,
	reducers: {
		addTask: (state, { payload }) => {
			state.push(payload);
			console.log(state);
		},
		deleteTask: (state, { payload }) => {
			return state.filter(task => task.id !== payload);
		},
		doneTask: (state, { payload }) => {
			const taskIndex = state.findIndex(task => task.id === payload);

			if (taskIndex !== -1) {
				state[taskIndex].isDone = !state[taskIndex].isDone;
			}
		},
	},
});

export const { actions, reducer } = Tasks;
