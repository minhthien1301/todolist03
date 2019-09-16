import React, { Component } from "react";

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
    var { keyword } = this.state;
    return (
      <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 pd-0">
        <div className="input-group">
          <input
            name="keyword"
            type="text"
            className="form-control"
            placeholder="Search"
            value={keyword}
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

export default Search;
