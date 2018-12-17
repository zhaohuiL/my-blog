import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './index.css'

class AticleList extends Component {
    render(){
        return (
            <div className="aticlelist">
                <div className="aticlelist-img">
                    <img src={this.props.data.img} alt=""/>
                    <div className="aticlelist-time"><span>{this.props.data.time.day}</span><span>{this.props.data.time.mounth}</span></div>
                    <Link className="aticlelist-link" to={`/${this.props.data.create_time.year}/${this.props.data.create_time.mounth}/${this.props.data.create_time.day}/${this.props.data.en_title}`}></Link>
                </div>
                <div className="aticlelist-dec">
                    <div className="aticlelist-title">
                        <Link to={`/${this.props.data.create_time.year}/${this.props.data.create_time.mounth}/${this.props.data.create_time.day}/${this.props.data.en_title}`}>{this.props.data.title}</Link>
                    </div>
                    <div className="aticlelist-author">by {this.props.data.author}</div>
                    <p className="aticlelist-des">{this.props.data.des}</p>
                    <div className="aticlelist-tag">
                        <i className="aticlelist-icon"></i>
                        {this.props.data.tag.map((val,index) => {
                            return (
                                <Link to={`/tags/${val}`} key={index}>
                                    <span>{val}</span>{index + 1 == this.props.data.tag.length ? '' : ','}
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
export default AticleList