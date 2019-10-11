import React, { Component } from 'react';
import './App.css';
import TaskForm from '../components/TaskForm';
import List from '../components/List';
import Control from '../components/Control';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isDisplay: false,
      itemsEdit: null
    }
  }

  componentDidMount() {
    if (localStorage && localStorage.getItem('items')) {
      const items = JSON.parse(localStorage.getItem('items'));
      this.setState({
        items: items
      })
    }
  }

  onGenerateData = () => {
    const items = [
      {
        id: this.generateId(),
        name: 'Angurlar',
        status: false
      },
      {
        id: this.generateId(),
        name: 'React',
        status: true
      },
      {
        id: this.generateId(),
        name: 'Android',
        status: false
      }
    ];
    this.setState({
      items: items
    });

    localStorage.setItem('items', JSON.stringify(items));
  }

  s4Id() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

  generateId() {
    return this.s4Id() + this.s4Id() + '-' + this.s4Id() + this.s4Id() + '-' + this.s4Id() + this.s4Id() + '-' + this.s4Id() + this.s4Id();
  }

  onTongleForm = () => {
    this.setState({
      isDisplay: !this.state.isDisplay
    })
  }

  onCloseForm = () => {
    this.setState({
      isDisplay: false
    })
  }

  onShowForm = () => {
    this.setState({
      isDisplay: true
    })
  }

  onSubmit = (data) => {
    let { items } = this.state;
    if (data.id === '') {
      data.id = this.generateId();
      items.push(data);
    }else {
      let index = this.findIndex(data.id);
      items[index] = data
    }

    this.setState({
      items: items
    })
    localStorage.setItem('items', JSON.stringify(items));
  }

  onUpdateStatus = (id) => {
    let { items } = this.state;
    let index = this.findIndex(id);
    if (index !== -1) {
      items[index].status = !items[index].status;
      this.setState({
        items: items
      })
      localStorage.setItem('items', JSON.stringify(items));
    }
  }

  findIndex = (id) => {
    let resuft = -1;
    this.state.items.forEach((item, index) => {
      if (item.id === id) {
        resuft = index;
      }
    });
    return resuft;
  }

  onDelete = (id) => {
    let { items } = this.state;
    let index = this.findIndex(id);
    if (index !== -1) {
      items.splice(index, 1);
      this.setState({
        items: items
      })
      localStorage.setItem('items', JSON.stringify(items));
    }
    this.onCloseForm();
  }

  onUpdate = (id) => {
    let { items } = this.state;
    let index = this.findIndex(id);
    let itemsEdit = items[index];
    this.setState({
      itemsEdit: itemsEdit
    })
    this.onShowForm();

  }

  render() {

    const { items, isDisplay, itemsEdit } = this.state;
    const elmTaskForm = isDisplay
      ? <TaskForm
        onSubmit={this.onSubmit}
        onCloseForm={this.onCloseForm}
        itemE={itemsEdit}
      /> : ''
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row mt-2">
          <div className={isDisplay ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
            {elmTaskForm}
          </div>
          <div className={isDisplay ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
            <button
              type="button"
              className="btn btn-primary mr-2"
              onClick={this.onTongleForm}
            >
              <span className="fa fa-plus mr-2" />Thêm Công Việc
              </button>
            <button
              type="button"
              className="btn btn-danger mr-2"
              onClick={this.onGenerateData}
            >
              <span className="fa fa-plus mr-5" />Genner
              </button>
            <Control />
            <div className="row mt-2">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <List
                  items={items}
                  onUpdateStatus={this.onUpdateStatus}
                  onDelete={this.onDelete}
                  onUpdate={this.onUpdate}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

}

export default App;
