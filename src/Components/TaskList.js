import React, { Component } from "react";
import TaskItem from "./TaskItem.js";
import { connect } from "react-redux";
import { orderBy } from "lodash";
import * as actions from "./../actions/index";

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = () => {
    this.props.listRequest();
  };
  render() {
    var { tasks, keyword, sortValue } = this.props;   
    if (keyword) {
      tasks = tasks.filter(task => {
        return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
      });
    }
    if (sortValue === 1) {
      tasks = orderBy(tasks, ["name"], ["asd"]);
    } else if (sortValue === -1) {
      tasks = orderBy(tasks, ["name"], ["desc"]);
    }
      var elmItem = tasks.map((task, index) => {
        return (
          <TaskItem
            key={index}
            index={index}
            task={task}
            onEdit={this.props.onEdit}
          />
        );
      });
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 pd-40">
          <div className="panel panel-info">
            <div className="panel-heading">
              <h3 className="panel-title">List Item</h3>
            </div>
            <div className="panel-body">
              <table className="table table-bordered table-hover ">
                <thead>
                  <tr>
                    <th className="col-lg-1">#</th>
                    <th className="col-lg-7">Name</th>
                    <th className="col-lg-2">Level</th>
                    <th className="col-lg-2">Action</th>
                  </tr>
                </thead>
                <tbody>{elmItem}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    tasks: state.tasks,
    keyword: state.search,
    sortValue: state.sort
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    listRequest: () => {
      dispatch(actions.listRequest());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
