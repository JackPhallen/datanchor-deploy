import React, { Component } from "react";
import {PENDING, ERROR, SUCCESS} from "./StatusTypes";
import InputPage from "./InputPage";
import StatusPage from "./StatusPage";

export default class Main extends Component {

    constructor(props) {
        super(props);

        // Make 'this' available in all functions acting as callbacks
        this.handleInput = this.handleInput.bind(this);
        this.callDeploy = this.callDeploy.bind(this);
        this.callHealthCheck1 = this.callHealthCheck1.bind(this);
        this.callHealthCheck2 = this.callHealthCheck2.bind(this);

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
     * Call Akhil's function to hit '/deploy' on backend
     */
    callDeploy() {
        // switch to status page
        this.setState({statusPage: true})

        // Akhil, your function that this calls does not need to be in a React component/class
        // Just make sure it is async
        // be sure to update the state when the results are returned to this function... or tell me to
    }

    /**
     * Call Akhil's function to hit '/check1' on backend
     */
    callHealthCheck1() {
        // Akhil, your function that this calls does not need to be in a React component/class
        // Just make sure it is async

    }

    /**
     * Call Akhil's function to hit '/check2' on backend
     */
    callHealthCheck2() {
        // Akhil, your function that this calls does not need to be in a React component/class
        // Just make sure it is async
    }


    /*
        This will render StatusPage when this.state.statusPage = true
        or InputPage when this.state.inputPage = false

        If you want to work on StatusPage, just hardcode the state to be statusPage = true
     */

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
                            callHealthCheck1={this.callHealthCheck1}
                            callHealthCheck2={this.callHealthCheck2}
                        />
                    :
                        <InputPage
                            clusterName={this.state.clusterName}
                            region={this.state.region}
                            maxNodes={this.state.minNodes}
                            minNodes={this.state.maxNodes}
                            projectName={this.state.projectName}
                            updateValue={this.handleInput}
                            callDeploy={this.callDeploy}
                        />
                }
            </div>
        )
    }
}

