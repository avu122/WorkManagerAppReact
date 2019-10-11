import React, { Component } from 'react'

export default class Sort extends Component {


    render() {
        return (
            <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" type="button">
                    Sắp Xếp <span className="fa fa-caret-square-o-down ml-5" />
                </button>
                <ul className="dropdown-menu">
                    <li>
                        <a role="button" href="/#">
                            <span className="fa fa-sort-alpha-asc pr-5">
                                Tên A-Z
                        </span>
                        </a>
                    </li>
                    <li>
                        <a role="button" href="/#">
                            <span className="fa fa-sort-alpha-desc pr-5">
                                Tên Z-A
                        </span>
                        </a>
                    </li>
                    <li role="separator" className="divider" />
                    <li><a role="button" href="/#">Trạng Thái Kích Hoạt</a></li>
                    <li><a role="button" href="/#">Trạng Thái Ẩn</a></li>
                </ul>
            </div>
        )
    }
}
