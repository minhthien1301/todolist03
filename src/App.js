import React, { Component } from "react";
import "./App.css";
import Control from "./Components/Control.js";
import TaskForm from "./Components/TaskForm.js";
import TaskList from "./Components/TaskList.js";
import { connect } from "react-redux";
import * as actions from "./actions/index";

class App extends Component {
  onToggleForm = () => {
    var { isDisplayForm, itemEditting } = this.props;
    if (isDisplayForm === true && itemEditting !== null) {
      this.props.onEditTask(null);
    } else {
      this.props.onToggleForm();
      this.props.onEditTask(null);
    }
  };
  render() {
    return (
      <div className="container">
        <h1>
          Project 03 - ToDo List <small>ReactJS-Redux</small>
        </h1>{" "}
        <hr />
        <div className="row">
          <Control />
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
        <TaskList />
        <TaskForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isDisplayForm: state.data.isDisplayForm,
    itemEditting: state.data.itemEditting
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onToggleForm: () => {
      dispatch(actions.toggleForm());
    },
    onEditTask: task => {
      dispatch(actions.editTaskRequest(task));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
