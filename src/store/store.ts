import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { reducer as idTask } from './id-task/idTask.slice';
import { reducer as tasks } from './task/task.slice';

const reducers = combineReducers({
	tasks: tasks,
	idTask: idTask,
});

export const store = configureStore({
	reducer: reducers,
});
