import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./../actions/index";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ""
    };
  }
  onChange = event => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    });
  };
  onSearch = () => {
    this.props.onSearch(this.state.keyword);
  };

  render() {
    return (
      <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 pd-0">
        <div className="input-group">
          <input
            name="keyword"
            type="text"
            className="form-control"
            placeholder="Search"
            value={this.props.keyword}
            onChange={this.onChange}
          />
          <span className="input-group-btn">
            <button
              type="button"
              className="btn btn-info"
              onClick={this.onSearch}
            >
              Search
            </button>
          </span>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onSearch: keyword => {
      dispatch(actions.searchTaskRequest(keyword));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
