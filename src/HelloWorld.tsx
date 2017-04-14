import {h, Component} from 'preact';

export interface HelloWorldProps {
    name: string
}

export default class HelloWorld extends Component<HelloWorldProps, any> {

    defaultProps = {};

    constructor() {
        super(HelloWorld.defaultProps);
        this.state = {
            iCanCountTo: 6
        }
    }

    render (props) {
        let a = 8;
        
        return (
            <div>
                <p>Hello {props.name}...</p>
                <p>I can count to {this.state.iCanCountTo} !</p>
                <p>My number is: {a}</p>
            </div>
        );
    }
}