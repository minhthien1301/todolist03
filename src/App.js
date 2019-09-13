import React, { Component } from 'react';
import './App.css';
import Control from './Components/Control.js';
import TaskForm from './Components/TaskForm.js';
import TaskList from './Components/TaskList.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      tasks: [],
      isDispPlayFrom : false
    });
  }
  //close form
  onCloseForm =()=>{
    this.setState({
      isDispPlayFrom : false
    })
  }
  //function open or close
  onToggleForm = ()=>{    
    this.setState({
      isDispPlayFrom : !this.state.isDispPlayFrom
    });
  }
  // được gọi khi reset
  componentWillMount(){
    if (localStorage && localStorage.getItem('tasks')) {
      var tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
          tasks: tasks
      });
  }
    
  }
  ongerenateData = () =>{
    var tasks = [
      {
        id: this.generateId(),
        name: 'Học lập trình',
        status: 'hight'
      },
      {
        id: this.generateId(),
        name: 'thien',
        status: 'medium'
      },
      {
        id: this.generateId(),
        name: 'thanh thanh ty ty',
        status: 'small'
      }
    ];
    this.setState({
      tasks: tasks
  });
    localStorage.setItem('tasks', JSON.stringify(tasks));      
  }
  
  randomId(){
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  generateId() {
    return this.randomId() + this.randomId() + '-' + this.randomId() + '-' + this.randomId() + '-' + this.randomId() + '-' + this.randomId()
        + this.randomId() + this.randomId();
}
//đưa dữ liệu từ taskForm App
onSubmit =(data)=>{
  var {tasks} = this.state;
  data.id = this.generateId();
  tasks.push(data);
  this.setState({
    tasks: tasks
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
//hàm tìm kiếm id trả về vị trí
findIndex = (id) => {
  var { tasks } = this.state;
  var resulf = -1;
  tasks.forEach((task, index) => {
      if (task.id === id) {
          resulf = index;
      }
  });
  return resulf;
}
//hàm xóa 
onDelete = (id)=>{
  var { tasks } = this.state;
        var index = this.findIndex(id);
        if (index !== -1) {
            tasks.splice(index, 1);
            this.setState({
                tasks: tasks
            });
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
        this.onCloseForm();
}
  render() {
    var {tasks, isDispPlayFrom} = this.state;
    var elmTaskFrom = isDispPlayFrom 
    ? <TaskForm 
      onCloseForm= {this.onCloseForm}
      onSubmit = {this.onSubmit}

    /> : '';
    return (
      <div className="container">
      <h1>Project 03 - ToDo List <small>ReactJS</small></h1> <hr />
      <div className="row">
        <Control/>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
          </div>
          <button 
            type="button" 
            className="btn btn-info col-xs-10 col-sm-10 col-md-10 col-lg-10 " 
            onClick= {this.onToggleForm  }
          >
            Add Item
          </button>

        </div>
      </div>
      <TaskList tasks={tasks} onDelete ={this.onDelete} />
      {elmTaskFrom}      
    </div>
    );
  }
}

export default App;