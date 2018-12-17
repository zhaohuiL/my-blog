import React, { Component } from 'react'
import './index.css'
import { BrowserRouter as Router, Route, Switch, Link,Redirect } from 'react-router-dom';
import Header from '../../components/header/index'
import Aside from '../../components/aside/index'
import Footer from '../../components/footer/index'
import { connect } from 'react-redux'
import { getData, changeArchivesTab } from '../../redux/actions/archives'
import AticleList from '../../components/aticle/index'
import {ARCHIVES_TAB} from './data'
const mapStateToProps = (state) => {
    return {
        archives: state.archives
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getData: () => {
            dispatch(getData())
        },
        changeArchivesTab: (year) => {
            dispatch(changeArchivesTab(year))
        }
    }
}

class Archives extends Component{
    componentDidMount() {
        this.props.getData()
    }
    render(){
        console.log(this.props)
        return (
            <div className="archives">
                <div className="archives-header">
                    <div className="archives-nav">
                        <Header/>
                    </div>
                </div>
               
                <div className="main-body">
                    <div className="main-container">
                        <div className="archives-tab">
                            <ul>
                                {
                                    ARCHIVES_TAB.map(
                                        (val,index) => (
                                            <li key={index} 
                                            onClick={() => this.props.changeArchivesTab(val)}>
                                                <Link to={`/archives/${val}`} className={"archives-tab-item" + (this.props.archives.year === val ? ' active' : '')}>{val}年</Link>
                                            </li>
                                        )
                                    )
                                }
                            </ul>
                        </div>
                        <div className="aticle-list">
                            {
                                this.props.archives.data.map(
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
                        <Aside  allData={this.props.archives.data}/>
                    </div>
                </div>
                <div className="footer-box">
                    <Footer/>
                </div>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Archives)
