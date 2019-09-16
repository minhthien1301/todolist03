import React, { Component } from "react";

class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }
  onChange=(event)=>{
    var target = event.target;
    var value = target.value;
    this.props.onSort(value)
  }
  render() {
    
    return (
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <select 
          name="filterName" 
          className="form-control"
          onChange = {this.onChange}
        >
          <option value={-1}>ASD</option>
          <option value={1}>DESC</option>
        </select>
      </div>
    );
  }
}

export default Sort;
