import React, { Component } from 'react'
import './index.css'
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import { GANK_TYPES } from './data'
import { GANK_TYPE } from './data'

class Header extends Component {
    render() {
        // console.log(this.props)
        return (
            <div className="nav-container">
                <div className="nav-logo">
                    <img src="http://oo12ugek5.bkt.clouddn.com/images/logo-text-white.png" alt="" />
                </div>
                <div className="nav-list">
                    {
                        GANK_TYPES.map(
                            index => (

                                <div className="tab-item" key={index}>
                                    <Link to={`/${index}`} alt={GANK_TYPE[index]} title={GANK_TYPE[index]}>{GANK_TYPE[index]}</Link>
                                </div>
                            )
                        )
                    }
                </div>
                <button className="nav-btn">
                    <i></i>
                </button>
            </div>

        )
    }
}
export default Header