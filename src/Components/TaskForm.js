import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import * as actions from "./../actions/index";

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      status: "small"
    };
  }
  componentDidMount() {
    if (this.props.itemEditting) {
      this.setState({
        id: this.props.itemEditting.id,
        name: this.props.itemEditting.name,
        status: this.props.itemEditting.status
      });
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.itemEditting) {
      this.setState({
        id: nextProps.itemEditting.id,
        name: nextProps.itemEditting.name,
        status: nextProps.itemEditting.status
      });
    } else if (!nextProps.itemEditting) {
      this.setState({
        id: "",
        name: "",
        status: "small"
      });
    }
  }

  onSubmit = fields => {
    
    if (fields.id === "") {
      this.props.onAddTaskRequest(fields);
      this.props.onCloseForm();
    } else {
      this.props.onUpdateTask(fields);
      this.props.onCloseForm();
      this.onClear();
    }
  };

  onClear = () => {
    this.setState({
      // id: "",
      name: "",
      status: "small"
    });
  };
  render() {
    var { id } = this.state;

    var { isDisplayForm } = this.props;
    if (isDisplayForm === false) {
      return "";
    }
    return (
      <Formik
        enableReinitialize
        initialValues={this.state}
        validationSchema={Yup.object().shape({
          name: Yup.string()
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
                  onClick={this.props.onCloseForm}
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
                <Field
                  component="select"
                  name="status"
                  className="form-control"
                >
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

const mapStateToProps = state => {
  return {
    isDisplayForm: state.data.isDisplayForm,
    itemEditting: state.data.itemEditting
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddTaskRequest: task => {
      dispatch(actions.addTaskRequest(task));
    },
    onCloseForm: () => {
      dispatch(actions.closeForm());
    },
    onUpdateTask: task => {
      dispatch(actions.updateTaskRequest(task));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskForm);
