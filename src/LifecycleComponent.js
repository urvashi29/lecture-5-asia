import { Component } from "react";

export default class LifecycleComponent extends Component {
    //initialization stage
    constructor() {
        super();//method, to call parent constructor
        // this is referring to LifecycleComponent 
        this.state = {
            name: 'alex'
        }
    }

    componentWillMount = () => {
        //api calls, update state
    }

    componentDidMount = () => {
        //api calls, update state
    }

    handleUpdate = () => {
        this.setState({
            name: 'harry'
        })
    }

    shouldComponentUpdate = () => {
        return true;
    }

    componentWillUpdate = () => {

    }

    componentDidUpdate = () => {

    }


    render() {
        return (
            <>
                <button onClick={this.handleUpdate}>Click</button>
            </>
        )
    }
}

//inheritance