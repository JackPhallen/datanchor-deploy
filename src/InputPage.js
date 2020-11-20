import React, { Component } from "react";

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
                <input
                    name={"clusterName"}
                    value={this.props.clusterName}
                    onChange={this.handleChange}
                />
                <input
                    name={"region"}
                    value={this.props.region}
                    onChange={this.handleChange}
                />
                <input
                    name={"maxNodes"}
                    value={this.props.maxNodes}
                    onChange={this.handleChange}
                />
                <input
                    name={"minNodes"}
                    value={this.props.minNodes}
                    onChange={this.handleChange}
                />
                <input
                    name={"projectName"}
                    value={this.props.projectName}
                    onChange={this.handleChange}
                />
                <button
                    onClick={this.props.callDeploy}
                >
                    Submit
                </button>
            </div>
        )
    }
}

