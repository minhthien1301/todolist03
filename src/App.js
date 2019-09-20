import React, { Component } from "react";
import "./App.css";
import Control from "./Components/Control.js";
import TaskForm from "./Components/TaskForm.js";
import TaskList from "./Components/TaskList.js";
import {connect} from "react-redux";
import * as actions from "./actions/index"


class App extends Component {

  //function open or close
  // onToggleForm = () => {
  //   if (this.state.isDispPlayFrom && this.state.taskEditting !== null) {
  //     this.setState({
  //       isDispPlayFrom: true,
  //       taskEditting: null
  //     });
  //   } else {
  //     this.setState({
  //       isDispPlayFrom: !this.state.isDispPlayFrom,
  //       taskEditting: null
  //     });
  //   }
  // };
    onToggleForm =() => {
      var {isDisplayForm, itemEditting} = this.props;
      if(isDisplayForm === true && itemEditting !== null){
        this.props.onEditTask(null);
      }
      else{ 
        this.props.onToggleForm();
        // this.props.onEditTask(null);
      }
    }
  // được gọi khi reset
  componentWillMount() {
    if (localStorage && localStorage.getItem("tasks")) {
      var tasks = JSON.parse(localStorage.getItem("tasks"));
      this.setState({
        tasks: tasks
      });
    }
  }
  
  //đưa dữ liệu từ taskForm App
  onSubmit = data => {
    var { tasks } = this.state;
    if (data.id === "") {
      data.id = this.generateId();
      tasks.push(data);
    } else {
      var index = this.findIndex(data.id);
      tasks[index] = data;
    }
    this.setState({
      tasks: tasks,
      taskEditting: null
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
  //hàm tìm kiếm id trả về vị trí
  // findIndex = id => {
  //   var { tasks } = this.state;
  //   var resulf = -1;
  //   tasks.forEach((task, index) => {
  //     if (task.id === id) {
  //       resulf = index;
  //     }
  //   });
  //   return resulf;
  // };
  //hàm xóa
  // onDelete = id => {
  //   var { tasks } = this.state;
  //   var index = this.findIndex(id);
  //   if (index !== -1) {
  //     tasks.splice(index, 1);
  //     this.setState({
  //       tasks: tasks
  //     });
  //     localStorage.setItem("tasks", JSON.stringify(tasks));
  //   }
  //   this.onCloseForm();
  // };
  onEdit = id => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    var taskEditting = tasks[index];
    this.setState({
      taskEditting
    });
    this.onShowForm();
  };
  onSearch = keyword => {
    this.setState({
      keyword: keyword.toLowerCase()
    });
  };
  //close form
  onCloseForm = () => {
    this.setState({
      isDispPlayFrom: false
    });
  };
  onShowForm = () => {
    this.setState({
      isDispPlayFrom: true
    });
  };
  onSort = sortValue => {
    sortValue = parseInt(sortValue);
    this.setState({
      sortValue
    });
  };
  render() {

    // if (keyword) {
    //   tasks = tasks.filter(task => {
    //     return task.name.toLowerCase().indexOf(keyword) !== -1;
    //   });
    // }
    // if (sortValue) {
    //   tasks.sort((a, b) => {
    //     var nameA = a.name.toUpperCase();
    //     var nameB = b.name.toUpperCase();
    //     if (nameA > nameB) {
    //       return -sortValue;
    //     } else if (nameA < nameB) {
    //       return sortValue;
    //     }
    //     return 0;
    //   });
    // }
    return (
      <div className="container">
        <h1>
          Project 03 - ToDo List <small>ReactJS</small>
        </h1>{" "}
        <hr />
        <div className="row">
          <Control onSearch={this.onSearch} onSort={this.onSort} />
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
            <button
              type="button"
              className="btn btn-info col-xs-10 col-sm-10 col-md-10 col-lg-10 "
              onClick={this.onToggleForm}
            >
              Add Item
            </button>
          </div>
        </div>
        <TaskList onEdit={this.onEdit} />
        <TaskForm
        />
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    isDisplayForm: state.isDisplayForm,
    itemEditting: state.itemEditting
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddTask: (task) => {
      dispatch(actions.addTask(task))
    },
    onToggleForm: () => {
      dispatch(actions.toggleForm())
    },
    onEditTask : (task) => {
      dispatch(actions.editTask(task))
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
