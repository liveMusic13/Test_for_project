import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actions } from '../../store/task/task.slice';
import styles from './AddTask.module.scss';

const AddTask: FC = () => {
	const [titleTask, setTitleTask] = useState('');
	const [descriptionTask, setDescriptionTask] = useState('');

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { idTask } = useSelector(state => state);
	const { tasks } = useSelector(state => state);

	useEffect(() => {
		if (idTask[0]) {
			const task = tasks.find(task => task.id === idTask[0]);
			if (task) {
				setTitleTask(task.title);
				setDescriptionTask(task.description);
			}
		}
	}, [idTask, tasks]);

	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title_page}>Enter your task</h2>
			<div className={styles.block_task}>
				<input
					type='text'
					placeholder='Name task'
					value={titleTask}
					onChange={event => setTitleTask(event.target.value)}
				/>
				<textarea
					value={descriptionTask}
					onChange={event => setDescriptionTask(event.target.value)}
				>
					fsdfsf
				</textarea>
			</div>
			<button
				onClick={() => {
					if (titleTask !== '' || descriptionTask !== '') {
						dispatch(
							actions.addTask({
								id: Math.random(),
								title: titleTask,
								description: descriptionTask,
								isDone: false,
							})
						);
					}

					navigate('/');
				}}
			>
				Add
			</button>
			<button onClick={() => navigate('/')}>Back</button>
		</div>
	);
};

export default AddTask;
