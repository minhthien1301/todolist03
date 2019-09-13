import React, { Component } from 'react';

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state={
      id :'',
      name:'',
      status: 'small'
    };
  }
  onSubmit = (event)=>{
    event.preventDefault(); 
    this.props.onSubmit(this.state);
    this.onClear();
    this.onCloseForm();
  }
  onCloseForm =()=>{
    this.props.onCloseForm();
  }
  onChange = (event)=>{
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name] :value
    });
  }
  onClear= ()=>{
    this.setState({
      name:'',
      status:'small'
    })
  }
  render() {
    return (
      <div className="panel panel-warning col-md-6 col-md-offset-3 ">
        <div className="panel-heading">
          <h3 className="panel-title">
            Edit Item
            <i className="fa fa-times-circle pd-16" aria-hidden="true" onClick= {this.onCloseForm} > </i>
          </h3>

        </div>
        <div className="panel-body">
          <form onSubmit = {this.onSubmit} >
            <div className="form-group">
              <label style={{ float: 'left' }}>Tên: </label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Nhập tên"
                value={this.state.name}
                onChange= {this.onChange}

              />
            </div>
            <label style={{ float: 'left' }}>Trạng thái: </label>
            <select
              name="status"
              className="form-control"
              value={this.state.status}
              onChange={this.onChange}
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="hight">hight</option>
            </select><br />
            <div className="col-md-9 col-md-offset-4">
              <button type="submit" className="btn btn-success">Submit</button>&nbsp;
              <button type="button" className="btn btn-warning" onClick={this.onClear} >Cansel</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default TaskForm;