import React, { Component } from "react";
import {connect} from "react-redux";
import * as actions from "./../actions/index"

class TaskItem extends Component {
  itemList = () => {
    var { task } = this.props;
    if (task.status === "hight") {
      return "label label-default";
    } else if (task.status === "medium") {
      return "label label-info";
    } else {
      return "label label-success";
    }
  };
  onDelete = () => {    
    this.props.onDeleteTask(this.props.task.id);   
    this.props.onCloseForm();
  };
  onEdit = () => {
    this.props.onEditTask(this.props.task);
    this.props.onOpenForm();
  };
  render() {
    var { task, index } = this.props;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{task.name}</td>
        <td>
          <span className={this.itemList()}>{task.status}</span>
        </td>
        <td>
          <button
            type="button"
            className="btn btn-warning mr-15"
            onClick={this.onEdit}
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

const mapStateToProps = (state) => {
  return {
    
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteTask : (id) => {
      dispatch(actions.deleteTaskRequest(id))
    },
    onEditTask : (task) => {
      dispatch(actions.editTaskRequest(task))
    },
    onOpenForm: () => {
      dispatch(actions.openForm())
    },
    onCloseForm: () => {
      dispatch(actions.closeForm())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);

