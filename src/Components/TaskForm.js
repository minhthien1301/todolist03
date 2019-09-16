import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      status: "small"
    };
  }
  //setsate là đưa dư liệu vào state
  componentDidMount() {
    if (this.props.task) {
      this.setState({
        id: this.props.task.id,
        name: this.props.task.name,
        status: this.props.task.status
      });
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.task) {
      this.setState({
        id: nextProps.task.id,
        name: nextProps.task.name,
        status: nextProps.task.status
      });
    } else {
      this.onClear();
    }
    // else if (!nextProps.task) {
    //   this.setState({
    //     id: "",
    //     name: "",
    //     status: "small"
    //   });
    // }
  }

  // onSubmit = event => {
  //   event.preventDefault();
  //   this.props.onSubmit(this.state);
  //   this.onClear();
  //   this.onCloseForm();
  // };
  onSubmit = field => {
    this.props.onSubmit(field);
  };

  // onChange = event => {
  //   var target = event.target;
  //   var name = target.name;
  //   var value = target.value;
  //   this.setState({
  //     [name]: value
  //   });
  // };
  onCloseForm = () => {
    this.props.onCloseForm();
  };
  onClear = () => {
    this.setState({
      id: "",
      name: "",
      status: "small"
    });
  };
  render() {
    var { id } = this.state;
    return (
      <Formik
        enableReinitialize
        initialValues={this.state}
        validationSchema={Yup.object().shape({
          name: 
            Yup.string()
            .required("Name is required")
            .trim()
            .min(5, "Name must have min 5 characters")
        })}
        onSubmit={this.onSubmit}
        render={({ errors, touched }) => (
          <div className="panel panel-warning col-md-6 col-md-offset-3 ">
            <div className="panel-heading">
              <h3 className="panel-title">
                {id === "" ? "Add Item" : "Edit Item"}
                <i
                  className="fa fa-times-circle pd-16"
                  aria-hidden="true"
                  onClick={this.onCloseForm}
                >
                  {" "}
                </i>
              </h3>
            </div>
            <div className="panel-body">
              <Form>
                {touched.name && errors.name ? (
                  <div className="alert alert-danger">
                    <strong>Error!</strong> {errors.name}
                  </div>
                ) : (
                  ""
                )}
                <div className="form-group">
                  <label style={{ float: "left" }}>Tên: </label>
                  <Field
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Nhập tên"
                  />
                </div>
                <label style={{ float: "left" }}>Trạng thái: </label>
                <Field component="select" name="status" className="form-control">
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="hight">hight</option>
                </Field>
                <br />
                <div className="col-md-9 col-md-offset-4">
                  <button type="submit" className="btn btn-success">
                    Submit
                  </button>
                  &nbsp;
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={this.onClear}
                  >
                    Cansel
                  </button>
                </div>
              </Form>
            </div>
          </div>
        )}
      />
    );
  }
}

export default TaskForm;
{
  /* <div className="panel panel-warning col-md-6 col-md-offset-3 ">
        <div className="panel-heading">
          <h3 className="panel-title">
            {id === "" ? "Add Item" : "Edit Item"}
            <i
              className="fa fa-times-circle pd-16"
              aria-hidden="true"
              onClick={this.onCloseForm}
            >
              {" "}
            </i>
          </h3>
        </div>
        <div className="panel-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label style={{ float: "left" }}>Tên: </label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Nhập tên"
                value={this.state.name}
                onChange={this.onChange}
              />
            </div>
            <label style={{ float: "left" }}>Trạng thái: </label>
            <select
              name="status"
              className="form-control"
              value={this.state.status}
              onChange={this.onChange}
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="hight">hight</option>
            </select>
            <br />
            <div className="col-md-9 col-md-offset-4">
              <button type="submit" className="btn btn-success">
                Submit
              </button>
              &nbsp;
              <button
                type="button"
                className="btn btn-warning"
                onClick={this.onClear}
              >
                Cansel
              </button>
            </div>
          </form>
        </div>
      </div> */
}
