import React, { Component } from 'react'
import './index.css'
import { BrowserRouter as Router, Route, Switch, Link,Redirect } from 'react-router-dom';
// import { GANK_TYPES } from './data'
// import { GANK_TYPE } from './data'
import { getData } from '../../redux/actions/homepage'
import { connect } from 'react-redux'
import AticleList from '../../components/aticle/index'
import Footer from '../../components/footer/index'
import Aside from '../../components/aside/index'
import Header from '../../components/header/index'

const mapStateToProps = (state) => {
    return {
        homepage: state.homepage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getData: () => {
            dispatch(getData())
        }
        
    }
}
class HomePage extends Component {
    componentDidMount() {
        this.props.getData()
    }
    render() {
        return (
            <div className="homepage">
                <div className="header" style={{ backgroundImage: "url(" + this.props.homepage.backgroundImage + ")" }}>
                    <div className="nav">
                        <Header/>
                    </div>
                    <section className="page-info">
                        <h1>{this.props.homepage.title}</h1>
                        <hr />
                        <p>{this.props.homepage.description}</p>
                    </section>
                </div>
                <div className="main-body">
                    <div className="main-container">
                        <div className="aticle-list">
                            {
                                this.props.homepage.data.map(
                                    (val, index) => (
                                        <div className="aticle-body" key={index}>
                                            <AticleList data={val} />
                                        </div>
                                    )
                                )
                            }

                        </div>
                        <div className="page-button"></div>
                    </div>
                    <div className="main-apart">
                        <Aside  allData={this.props.homepage.data}/>
                    </div>
                </div>
                <div className="footer-box">
                    <Footer/>
                </div>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)