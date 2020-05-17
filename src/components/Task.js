import React, { Component } from 'react'
import Styles from "./mystyle.module.css"

export class Task extends Component {

constructor(props)
{
    super(props);

    this.id = props.id;
    this.desc = props.desc;
    this.completed = props.completed;
}

    render() {
        return (
            <div className={Styles.Task}>
                <div>{this.props.id}</div>
                <div>{this.props.desc}</div>
            </div>
        )
    }
}





export default Task
