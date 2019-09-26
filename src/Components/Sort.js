import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./../actions/index";

class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }
  onChange = event => {
    var target = event.target;
    var value = target.value;
    value = parseInt(value, 10);
    this.props.onSort(value);
  };
  render() {
    return (
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <select
          name="filterName"
          className="form-control"
          onChange={this.onChange}
        >
          <option value={0}>ALL</option>
          <option value={1}>ASD</option>
          <option value={-1}>DESC</option>
        </select>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onSort: sortValue => {
      dispatch(actions.sortTaskRequest(sortValue));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sort);
