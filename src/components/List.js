import React, { Component } from 'react'
import ListItem from './ListItem'

export default class List extends Component {


    render() {

        const { items } = this.props;
        const elmItems = items.map((item, index) => {
            return <ListItem
                key={item.id}
                index={index}
                item={item}
                onUpdateStatus={this.props.onUpdateStatus}
                onDelete= {this.props.onDelete}
                onUpdate= {this.props.onUpdate}
            />
        })

        return (
            <table className="table table-bordered table-hover mt-15">
                <thead>
                    <tr>
                        <th className="text-center">STT</th>
                        <th className="text-center">Tên</th>
                        <th className="text-center">Trạng Thái</th>
                        <th className="text-center">Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td />
                        <td>
                            <input type="text" className="form-control" />
                        </td>
                        <td>
                            <select className="form-control">
                                <option value={-1}>Tất Cả</option>
                                <option value={0}>Ẩn</option>
                                <option value={1}>Kích Hoạt</option>
                            </select>
                        </td>
                        <td />
                    </tr>
                    {elmItems}
                </tbody>
            </table>
        )
    }
}
