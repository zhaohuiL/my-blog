import React, { Component } from 'react'
import './index.css'
class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-main-box">
                    <div className="footer-main">
                        <div className="footer-about">
                            <h1>关于</h1>
                            <p>
                                本站是基于 Hexo 搭建的静态资源博客，主要用于分享日常学习、生活及工作的一些心得总结，欢迎点击右下角订阅 rss。
                        </p>
                            <div>
                                <i className="footer-about-fill"></i>
                                Shanghai,Shanghai Province China
                        </div>
                            <div>
                                <i className="footer-about-email"></i>
                                liuzhaohui12138@163.com
                        </div>
                        </div>
                        <div className="footer-img">
                            <img src="http://oo12ugek5.bkt.clouddn.com/images/qrcode.png" alt="" />
                        </div>
                        <div className="footer-friend">
                            <h1>友情链接</h1>
                            <ul>
                                <li><a href="https://blog.liufulin.online/">formattedzz</a></li>
                                <li><a href="https://jdc.jd.com/">JDC京东设计中心</a></li>
                                <li><a href="https://aotu.io/">凹凸实验室</a></li>
                                <li><a href="http://fex.baidu.com/">百度FEX</a></li>
                                <li><a href="http://taobaofed.org/">淘宝FED</a></li>
                                <li><a href="http://tgideas.qq.com/">TGIdeas</a></li>
                                <li><a href="http://isux.tencent.com/">ISUX</a></li>
                            </ul>
                        </div>
                        <div className="footer-tool">
                            <h1>构建工具</h1>
                            <ul>
                                <li><a href="https://hexo.io/">Hexo</a></li>
                                <li><a href="http://sass-lang.com/">Sass</a></li>
                                <li><a href="http://node-swig.github.io/swig-templates/">Swig</a></li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div className="footer-author-box">
                    <div className="footer-author">
                        <div className="footer-author-word">
                            <span>© </span>
                            <a href="">Skapp</a>
                            <span> powered by </span>
                            <a href="">Hexo</a>
                            <span>,made by </span>
                            <a href="">liuzhaohui</a>
                        </div>
                        <div className="footer-author-img">
                            <a href="">
                                <i></i>
                            </a>
                            <a href="">
                                <i></i>
                            </a>
                            <a href="">
                                <i></i>
                            </a>
                            <a href="">
                                <i></i>
                            </a>
                            <a href="" className="footer-dingyue">
                                <i></i>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default Footer;