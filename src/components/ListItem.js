import React, { Component } from 'react'

export default class ListItem extends Component {

    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.item.id)
    }

    onDelete = () => {
        this.props.onDelete(this.props.item.id)
    }

    onUpdate = () => {
        this.props.onUpdate(this.props.item.id)
    }

    render() {

        const { item, index } = this.props;

        return (
            <tr>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td className="text-center">
                    <span onClick={this.onUpdateStatus}>
                        {item.status === true ? 'Kich Hoat' : 'An'}
                    </span>
                </td>
                <td className="text-center">
                    <button
                        type="button"
                        className="btn btn-warning"
                        onClick={this.onUpdate}
                    >
                        <span className="fa fa-pencil mr-5" />Sửa
                        </button>
                    &nbsp;
                        <button type="button"
                        className="btn btn-danger"
                        onClick={this.onDelete}
                    >
                        <span className="fa fa-trash mr-5" />Xóa
                        </button>
                </td>
            </tr>
        )
    }
}
