import cn from 'clsx';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { actions } from '../../store/id-task/idTask.slice';
import { actions as actionsTask } from '../../store/task/task.slice';
import styles from './App.module.scss';

interface ITask {
	id: number;
	title: string;
	description: string;
	isDone: boolean;
}

const App: FC = () => {
	const { tasks } = useSelector(state => state);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	return (
		<div className={styles.wrapper}>
			<h1>To do list</h1>
			<div className={styles.block_task}>
				<h2>My task</h2>
				{tasks.map((task: ITask) => {
					return (
						<div
							key={task.id}
							className={cn({
								[styles.task]: !task.isDone,
								[styles.taskDone]: task.isDone,
							})}
						>
							<Link
								to={'/addTask'}
								className={styles.title}
								onClick={() => dispatch(actions.addIdTask(task.id))}
							>
								{task.title}
							</Link>
							<button
								className={styles.done}
								onClick={() => dispatch(actionsTask.doneTask(task.id))}
							>
								Done
							</button>
							<button
								className={styles.delete}
								onClick={() => {
									dispatch(actionsTask.deleteTask(task.id));
								}}
							>
								Delete
							</button>
						</div>
					);
				})}
				<button
					onClick={() => {
						dispatch(actions.addIdTask(''));
						navigate('/addTask');
					}}
				>
					Add task
				</button>
			</div>
		</div>
	);
};

export default App;
