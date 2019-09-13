import React, { Component } from 'react';

class TaskItem extends Component {
    itemList =()=>{
        var { task } = this.props;
        if(task.status === 'hight'){
            return 'label label-default'

        }else if(task.status === 'medium'){
            return 'label label-info'
        }else{
            return 'label label-success'
        }
    }
    onDelete =()=>{
        this.props.onDelete(this.props.task.id);
    }
    render() {
        var { task, index } = this.props;
        return (
            <tr>
                <td>{index +1}</td>
                <td>{task.name}</td>
                <td>
                    <span
                        className={this.itemList()}    
                    >  
                    {task.status }
                        </span>
                </td>
                <td>
                    <button
                        type="button"
                        className="btn btn-warning mr-15"
                    >
                        <i className="fa fa-pencil pd-4 " aria-hidden="true"></i>Edit
                        </button>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={this.onDelete}
                    >
                        <i className="fa fa-trash pd-4 " aria-hidden="true"></i>Delete
                        </button>
                </td>
            </tr>
        );
    }
}

export default TaskItem;