interface TaskContainerProps {
  children: JSX.Element | JSX.Element[];
}
function TaskContainer(props: TaskContainerProps) {
  return <ul className="task-list"> {props.children} </ul>;

}

export default TaskContainer;