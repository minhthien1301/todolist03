import React, { Component } from 'react';

class Control extends Component {
    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 pd-0">

            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search" />
              <span className="input-group-btn">
                <button type="button" className="btn btn-info">Search</button>
              </span>
            </div>

            {/* end col-9 */}
          </div>

          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">

            <select name="filterName" className="form-control" >
              <option value="">ASD</option>
              <option value="">DESC</option>
            </select>
          </div>

          {/* end col-6 */}
        </div>
        );
    }
}

export default Control;