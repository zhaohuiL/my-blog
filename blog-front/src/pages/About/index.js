import React, { Component } from 'react'
import './index.css'
import Header from '../../components/header/index'
import Footer from '../../components/footer/index'
import { connect } from 'react-redux'
const mapStateToProps = (state) => {
    return {
        about: state.homepage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

class About extends Component{
    render(){
        console.log(this.props)
        return (
            <div className="about">
               <div className="header" style={{ backgroundImage: "url(" + this.props.about.backgroundImage + ")" }}>
                    <div className="nav">
                        <Header/>
                    </div>
                    <section className="page-info">
                        <h1>{this.props.about.title}</h1>
                        <hr />
                        <p>{this.props.about.description}</p>
                    </section>
                </div>
                <div className="main-body">
                    <div className="about-container">
                        <h3>关于我</h3>
                        <div className="about-quote">
                            <p>一个有着百度情结的小菜鸟，在前端路上不停爬行。</p>
                            <a href="#">在线简历 Online CV</a>
                        </div>
                        
                        <p>
                            偏爱前端开发，固执己见，正在尝试进入后端领域。
                            <br/>
                            热爱美好事物，热爱独立音乐，热爱国学，崇尚自由，是个十足的愤青伪文艺，如臭味相投，欢迎交流。
                        </p>
                        <p>以下是我的联系方式</p>
                        <ul className="about-list">
                            <li>邮件：<a href="#">liuzhaohui12138@163.com</a></li>
                            <li>github：<a href="#">https://github.com/zhaohuiL</a></li>
                            <li>其它方式：<a href="#">知乎</a>、<a href="#">微博</a></li>
                        </ul>
                        <h3>建站初衷</h3>
                        <div className="about-quote">
                            <p>记录成长路上的风景</p>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>时间</th>
                                    <th>事件</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>2017-09-12</td>
                                    <td>
                                        从头搭建个人 hexo-theme-skapp 主题，并正式开源，地址 <a href="#">hexo-theme-skapp</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2017-08-01</td>
                                    <td>模仿 <a href="#">凹凸实验室</a> 从头写了一个自己的主题，主题名叫 mb 。</td>
                                </tr>
                                <tr>
                                    <td>2016-03-09</td>
                                    <td>初步使用 hexo next 主题搭建好静态博客。然后界面很无耻的使用默认的样式，还没有修改。</td>
                                </tr>
                                <tr>
                                    <td>2015-12-20</td>
                                    <td>学习 git 的时候接触到 GitHub 从而了解到 GitHub Pages 于是想着自己用 hexo 搭了一个博客，再然后也不了了之了</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="footer-box">
                    <Footer/>
                </div>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(About)