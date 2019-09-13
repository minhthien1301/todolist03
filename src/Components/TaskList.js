import React, { Component } from 'react';
import TaskItem from './TaskItem.js';

class TaskList extends Component {
    render() {
        var {tasks} = this.props;
        var elmItem = tasks.map((task, index)=>{
            return <TaskItem 
                      key = {index} 
                      index= {index} 
                      task= {task}
                      onDelete = {this.props.onDelete}
                    />
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
                <tbody>
                  {elmItem}
                </tbody>
              </table>

            </div>
          </div>
        </div>
      </div>

        );
    }
}

export default TaskList;