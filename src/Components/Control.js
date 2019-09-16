import React, { Component } from "react";
import Search from "./Search.js";
import Sort from "./Sort.js";
class Control extends Component {
  render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <Search onSearch={this.props.onSearch} />
        <Sort  onSort = {this.props.onSort} />
      </div>
    );
  }
}

export default Control;
