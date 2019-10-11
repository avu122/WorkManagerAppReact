import React, { Component } from 'react';
import Search from '../components/Search';
import Sort from '../components/Sort';

export default class Control extends Component {
    render() {
        return (
            <div className="row mt-2">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <Search />
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <Sort />
                </div>
            </div>
        )
    }
}
