import React, { Component } from "react";
import {PENDING, ERROR, SUCCESS} from "./StatusTypes";
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'
import Spinner from 'react-bootstrap/Spinner'

export default class StatusPage extends Component {

    constructor(props) {
        super(props);
    }
    getIcon(status){
        if(status===SUCCESS){
            return <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-check-circle" fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path fill-rule="evenodd"
                      d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
            </svg>
        }else if(status===ERROR){
            return <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-x-circle" fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path fill-rule="evenodd"
                      d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
        }else if(status===PENDING){
            return <Spinner animation="border" />
        }
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

    render() {




        return(
            <div>
                    <Navbar bg="dark" variant="dark">
                        <Navbar.Brand href="#home">
                            <img
                                alt=""
                                src="./Anchor - Logo - Primary.png"
                                width="150"
                                height="40"
                                className="d-inline-block align-top"
                            />
                        </Navbar.Brand>
                    </Navbar>


                <table className="table">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Service</th>
                        <th scope="col">Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Status of master deploy script</td>
                        <td>{this.getIcon(this.props.deployStatus)} </td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Kubernetes health check</td>
                        <td>{this.getIcon(this.props.status[0])} </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Backend Services check</td>
                        <td>{this.getIcon(this.props.status[1])} </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Certificates check</td>
                        <td>{this.getIcon(this.props.status[2])} </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Other Services status</td>
                        <td>{this.getIcon(this.props.status[3])} </td>
                    </tr>
                    </tbody>
                </table>


                <button type="button" className="btn btn-dark" onClick={this.props.callHealthCheck1}>Health Check</button>

            </div>
        )
    }
}

