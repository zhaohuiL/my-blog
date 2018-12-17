import React, {Component} from 'react'
import './index.css'
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux'
import {getAsideData} from '../../redux/actions/aside'
// import {fetchAsideData} from '../../service/service'
const mapStateToProps = (state) => {
    return {aside: state.aside}
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAsideData: () => {
            dispatch(getAsideData())
        }
    }
}
class Aside extends Component {
    componentDidMount() {
        this
            .props
            .getAsideData()
    }
    render() {
        return (
            <div className="aside">
                <div className="aside-search">
                    <form action="/search">
                        <label htmlFor="">
                            <input
                                className="aside-search-box"
                                type="text"
                                name="search"
                                placeholder="Search..."/>
                            <i></i>
                        </label>
                    </form>
                </div>
                <div className="aside-summary">
                    <h2 className="aside-title">
                        简介
                    </h2>
                    <div className="aside-summary-content">
                        {this.props.aside.asideData[0] && this.props.aside.asideData[0].summary}
                    </div>
                </div>
                <div className="aside-apart">
                    <h2 className="aside-title">
                        文章分类
                    </h2>
                    <div className="aside-apart-content">
                        {this.props.aside.asideData[0] && this
                            .props
                            .aside
                            .asideData[0]
                            .aticle_apart
                            .map((val, index) => (
                                <div key={index}>
                                    <Link
                                        to={`/categories/${this.props.aside.asideData[0].aticle_apart[index].aticle_apart_name}`}>
                                        {this.props.aside.asideData[0].aticle_apart[index].aticle_apart_name}
                                    </Link>
                                    <span>({this.props.aside.asideData[0].aticle_apart[index].aticle_apart_all.length})</span>
                                </div>
                            ))
}
                    </div>
                </div>
                <div className="aside-new">
                    <h2 className="aside-title">
                        最新文章
                    </h2>
                    <div className="aside-new-content">
                        {this
                            .props
                            .allData
                            .map((val, index) => {
                                if (index <= 3) {
                                    return (
                                        <Link
                                            to={`/${this.props.allData[index].create_time.year}/${this.props.allData[index].create_time.mounth}/${this.props.allData[index].create_time.day}/${this.props.allData[index].en_title}`}
                                            key={index}>
                                            <div className="aside-new-content-img">
                                                <img src={this.props.allData[index].img} alt=""/>
                                            </div>
                                            <div className="aside-new-content-dec">
                                                <p>{this.props.allData[index].title}</p>
                                                <div>{this.props.allData[index].create_time.year}年 {this.props.allData[index].create_time.mounth}月 {this.props.allData[index].create_time.day}日</div>
                                            </div>
                                        </Link>
                                    )
                                }
                            })
}
                    </div>
                </div>
                <div className="aside-tag">
                    <h2 className="aside-title">
                        文章标签
                    </h2>
                    <div className="aside-tag-content">
                        {this.props.aside.asideData[0] && this
                            .props
                            .aside
                            .asideData[0]
                            .aticle_tag
                            .map((val, index) => (
                                <Link
                                    key={index}
                                    to={`/tags/${this.props.aside.asideData[0].aticle_tag[index]}`}>
                                    {this.props.aside.asideData[0].aticle_tag[index]}
                                </Link>
                            ))
}
                    </div>
                </div>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Aside)