import React, {Component, Fragment} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faLock} from "@fortawesome/free-solid-svg-icons";
import ServiceInfo from "./serviceInfo";
import response from './data'

class RequestApprovalPage extends Component {
    state = { isFetching: true }

    /**
     * simulate API call buy deferring the render and showing loading animation
     */
    componentDidMount = () => {
        setTimeout(() => {
            this.setState({isFetching: false})
        }, 3000)
    }

    render = () => {
        return <Fragment>
            <p className="header-text">
                <span className="text-orange"><FontAwesomeIcon icon={faLock}/> Security message</span>&nbsp;
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            </p>
            <ServiceInfo isFetching={this.state.isFetching} data={response} />
        </Fragment>
    }
}

export default RequestApprovalPage