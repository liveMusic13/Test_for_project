import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddTask from './add-task/AddTask';
import App from './app/App';

const Router: FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<App />} path='/' />
				<Route element={<AddTask />} path='/addTask' />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
