import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form'
import Col from "react-bootstrap/cjs/Col";
import Row from "react-bootstrap/Row";
export default class InputPage extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    /**
     * Handle input box change
     *
     * @param event - input change event
     */
    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        console.log(name);
        console.log(value);
        this.props.updateValue({
            [name]: value
        });
    }

    /*
        Michael, if you make the 'name' prop the name of the state and the 'value' prop the passed prop,
        and the 'onChange' prop this.handleChange, this will update the parent state automatically
        JUST MAKE SURE EVERYTHING IS NAMED IDENTICAL TO THE FIELD IN THE STATE OF Main.js

        All you need to do is make all the input fields correctly as well as a 'submit' button that calls
        this.props.callDeploy() when pressed
     */
    render() {
        return(
            <div>
                <Form>

                    <Form.Group as ={Row} controlId="clusterName">
                        <Form.Label column sm="2">Cluster Name</Form.Label>
                        <Col sm={10}>
                            <Form.Control name="clusterName" type="text" placeholder="Enter Cluster name" onChange={this.handleChange}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as ={Row} controlId="region">
                        <Form.Label column sm="2">Region</Form.Label>
                        <Col sm={10}>
                            <Form.Control name="region" type="text" placeholder="Enter the region"   onChange={this.handleChange} />
                        </Col>
                    </Form.Group>
                    <Form.Group as ={Row} controlId="maxNodes">
                        <Form.Label column sm="2">Max Nodes</Form.Label>
                        <Col sm={10}>
                            <Form.Control name="maxNodes" type="text" placeholder="0"  onChange={this.handleChange}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as ={Row}controlId="minNodes">
                        <Form.Label column sm="2">Min Nodes</Form.Label>
                        <Col sm={10}>
                            <Form.Control name="minNodes" type="text" placeholder="0"  onChange={this.handleChange}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as ={Row} controlId="projectName">
                        <Form.Label column sm="2">Project Name</Form.Label>
                        <Col sm={10}>
                            <Form.Control name="projectName" type="text" placeholder="Enter the project name"  onChange={this.handleChange}/>
                        </Col>
                    </Form.Group>
                    <button type="button" className="btn btn-dark" onClick={this.props.callDeploy}>Submit</button>
                </Form>

            </div>
        )
    }
}

