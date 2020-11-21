import React, { Component } from "react";
import {PENDING, ERROR, SUCCESS} from "./StatusTypes";

export default class StatusPage extends Component {

    constructor(props) {
        super(props);
    }

    /*

        check what props are passed to this component in main.js


        Runmin, you need to render a table that displays the values of the props as well as the IP for DNS mapping.
        For example, a gray circle when pending, green when success, and red when fail. You also need to
        create two buttons to trigger the healthcheck scripts. To trigger the 1st half of the health checks, you will
        call this.props.callHealthCheck1() [i already did this one for you below]. The 2nd half will be
        this.props.callHealthCheck2()

        The status will come in arrays. For example, the status of first healthcheck script in the 1st half of scripts
        will be this.props.status[0]. The first healthcheck script in the 2nd half of scripts will be
        this.props.status2[0]. I'm not sure how many total health check scripts there are yet...

        EXAMPLE: if (this.props.status[0] == PENDING)

     */

    getIcon(status){
        if(status===SUCCESS){
            return <img src={"./img/success.png"} alt={"success"}/>
        }else if(status===ERROR){
            return <img src={"./img/fail.png"} alt={"error"}/>
        }else if(status===PENDING){
            return <img src={"./img/pending.png"} alt={"pending"}/>
        }
    }





    render() {
        return(

            <div>
                <table align={'center'} >
                    <tr>
                        <th width={500}>Service</th>
                        <th>status</th>
                    </tr>
                    <tr>
                        <td width>Status of master deploy script</td>
                        <td>{this.getIcon(this.props.deployStatus)}</td>
                    </tr>
                    <button onClick={this.props.callHealthCheck1}>Call Health Check</button>
                    <tr>
                        <td>Kubernetes health check</td>
                        <td>{this.getIcon(this.props.status[0])} </td>
                    </tr>
                    <tr>
                        <td>Backend Services check</td>
                        <td>{this.getIcon(this.props.status[1])}</td>
                    </tr>
                    <tr>
                        <td>Certificates check</td>
                        <td>{this.getIcon(this.props.status[2])}</td>
                    </tr>
                    <tr>
                        <td>Other Services status</td>
                        <td>{this.getIcon(this.props.status[3])}</td>
                    </tr>
                </table>
            </div>

        )
    }
}

