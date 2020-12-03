import React, { Component } from "react";
import {PENDING, ERROR, SUCCESS} from "./StatusTypes";
import InputPage from "./InputPage";
import StatusPage from "./StatusPage";
import {deploy, getIP, healthCheck} from "./ServerRequests";

export default class Main extends Component {

    constructor(props) {
        super(props);

        // Make 'this' available in all functions acting as callbacks
        this.handleInput = this.handleInput.bind(this);
        this.callDeploy = this.callDeploy.bind(this);
        this.callHealthCheck = this.callHealthCheck.bind(this);
        this.callGetIP = this.callGetIP.bind(this);
        this.deployCallback = this.deployCallback.bind(this);
        this.healthCheckCallback = this.healthCheckCallback.bind(this);
        this.getIPCallback = this.getIPCallback.bind(this);


        this.state = {
            // true when on status page, false when on input page
            statusPage: false,
            // script params
            clusterName: "",
            region: "",
            maxNodes: 0,
            minNodes: 0,
            projectName: "",
            // ip for dns mapping
            ip: "",
            // response from hitting /deploy in API
            deployStatus: PENDING,
            // status fo 1st healthcheck (1 element for each healthcheck script)
            status: [PENDING, PENDING, PENDING, PENDING],
            // status fo 2st healthcheck (1 element for each healthcheck script)
            status2: [PENDING, PENDING, PENDING, PENDING]
        }
    }


    /**
     * This function will be called by the InputPage to update the state with new param values
     *
     * @param newState "{stateKey: newValue}"
     */
    handleInput(newState) {
        this.setState(newState);
    }


    /**
     * function to hit '/deploy' on backend
     */
    callDeploy() {
        // switch to status page
        this.setState({statusPage: true})

        deploy(this.state.clusterName, this.state.region, this.state.maxNodes, this.state.minNodes,
            this.state.projectName, this.deployCallback)
    }

    /**
     * function to hit '/check' on backend
     */
    callHealthCheck() {
        healthCheck(this.state.clusterName, this.state.region, this.state.maxNodes, this.state.minNodes,
            this.state.projectName, this.healthCheckCallback)
    }


    /**
     * function to hit '/getip' on backend
     */
    callGetIP() {
        getIP(this.state.clusterName, this.getIPCallback)
    }

    /**
     * Process response data from '/deploy'
     * @param data
     */
    deployCallback(data) {
        if (data['success']) {
            this.setState({deployStatus: SUCCESS})
            this.callGetIP()
        } else {
            alert("Error connecting to deployment server!")
        }
    }

    /**
     * Process response data from '/check'
     * @param data
     */
    healthCheckCallback(data) {
        const newState = data['result'].map( result => {
            return result ? SUCCESS : ERROR
        });
        this.setState({status: newState})
    }

    /**
     * Process response data from '/getip'
     * @param data
     */
    getIPCallback(data) {
        try {
            this.setState({ip: data['ip']});
        } catch (e) {
            alert("Error connecting to deployment server!")
        }
    }


    render() {
        return(
            <div>
                {
                    this.state.statusPage ?

                        <StatusPage
                            ip={this.state.ip}
                            deployStatus={this.state.deployStatus}
                            status={this.state.status}
                            status2={this.state.status2}
                            callHealthCheck={this.callHealthCheck}
                        />
                    :
                        <InputPage
                            clusterName={this.state.clusterName}
                            region={this.state.region}
                            maxNodes={this.state.maxNodes}
                            minNodes={this.state.minNodes}
                            projectName={this.state.projectName}
                            updateValue={this.handleInput}
                            callDeploy={this.callDeploy}
                        />
                }
            </div>
        )
    }
}

