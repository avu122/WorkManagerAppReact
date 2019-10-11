import React, { Component } from 'react'

export default class TaskForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id:'',
            name: '',
            status: false
        }
    }

    componentDidMount(){
        if(this.props.itemE){
            this.setState({
                id: this.props.itemE.id,
                name: this.props.itemE.name,
                status: this.props.itemE.status
            });
            console.log(this.state)
        }
    }

    onCloseForm = () => {
        this.props.onCloseForm()
    }

    handleChange = (event) => {
        let target = event.target;
        let value = target.value;
        let name = target.name;
        if(name === 'status'){
            value = (target.value === 'true') ? true:false;
        }
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.onCloseForm();
    }

    onClear = () => {
        this.setState({
            name: '',
            status: false
        })
    }

    render() {

        let { id } = this.state;
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        {id !== '' ? 'Update record': 'Add record'}
                    </h3>
                    <span className="text-right" onClick={this.onCloseForm}> x</span>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Tên :</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={this.state.name}
                                onChange={this.handleChange}
                            />
                        </div>
                        <label>Trạng Thái :</label>
                        <select
                            className="form-control"
                            name="status"
                            value={this.state.status}
                            onChange={this.handleChange}
                        >
                            <option value={true}

                            >Kích Hoạt</option>
                            <option value={false}>Ẩn</option>
                        </select>
                        <br />
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">Save</button>&nbsp;
                            <button type="button"
                            onClick={this.onClear}
                             className="btn btn-danger"
                             >Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
