import React, { Component } from 'react'
import { Task } from "./Task"

export class TaskList extends Component {

    getTasks = () => {
        //This suppose to get data from db and set it to state property.
        return data;
    }

    render() {
        return (
            <div>
                {data.map((item, index) => {
                    return <Task key={index} {...item}/>
                })}
            </div>
        )
    }
}

const data = [
    {
        id: 1,
        desc: "Take the trash out",
        completed: false
    },
    {
        id: 2,
        desc: "Charge the phone",
        completed: false
    },
    {
        id: 3,
        desc: "build react app",
        completed: false
    },
    {
        id: 4,
        desc: "publish article",
        completed: false
    },
    {
        id: 5,
        desc: "make colors",
        completed: false
    },
    {
        id: 6,
        desc: "deploy",
        completed: false
    }


];

export default TaskList
