import useSWR from "swr";
import { FunctionComponent } from "react";
import fetch from 'unfetch'
import { useAppSelector } from "app/hook";
import { Task } from 'models/Task';
import { Spinner } from "react-bootstrap";

const fetcher = (url: string) => fetch(url).then(r => r.json())
const TaskList: FunctionComponent = () => {
    const gatewayUrl = useAppSelector(select => select.common.gatewayUrl);
    const { data } = useSWR<Task[]>(`${gatewayUrl}api/tasks`, fetcher);
    const renderTask = (task: Task, index: number) => (<li key={`Task-${index}`}>{task.title}</li>);

    return data ? (
        <div>
            {data.map(renderTask)}
        </div>
    ) : <Spinner animation="border"  />;
};

export default TaskList;
