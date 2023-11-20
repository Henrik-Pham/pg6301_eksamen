import React, {useState, useEffect} from "react";
import {Link, BrowserRouter, Route, Routes} from "react-router-dom";

export function TaskApplication(){
    const [tasks, setTasks] = useState();
    useEffect(() => {
        setTasks([
            {
                title: "Prepare for exam",
                status: "doing"
            }
            ]
        )
    }, []);

    return <>
        <h1>Here are the tasks</h1>
        <button>Add new task</button>
        {tasks && tasks.map(t => <div>
            <h3>{t.title} ({t.status})</h3>
            </div>)}
        {!tasks && <div>Loading...</div>}
    </>
}