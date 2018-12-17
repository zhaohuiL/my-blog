import React, { Component } from 'react'
import './index.css'
import { BrowserRouter as Router, Route, Switch, Link,Redirect } from 'react-router-dom';
import Header from '../../components/header/index'
import Aside from '../../components/aside/index'
import Footer from '../../components/footer/index'
import { connect } from 'react-redux'
const mapStateToProps = (state) => {
    return {
        aticle: state.homepage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}


class Aticle extends Component{
    
    render(){
        console.log(this.props)
        return (
            <div className="aticle">
                <div className="aticle-header">
                    <div className="aticle-nav">
                        <Header/>
                    </div>
                </div>
               
                <div className="main-body">
                    <div className="main-container">
                        
                    </div>
                    <div className="main-apart">
                        <Aside  allData={this.props.aticle.asideData}/>
                    </div>
                </div>
                <div className="footer-box">
                    <Footer/>
                </div>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Aticle)
