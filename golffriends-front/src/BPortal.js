import { Component } from 'react';
import ReactDOM from 'react-dom';

const portalRoot = document.getElementById('portal');

export default class Portal extends Component {
    constructor() {
        super();
        this.elem = document.createElement('div');
    }

    componentDidMount = () => {
    portalRoot.appendChild(this.elem);
    }

    componentWillUnmount = () => {
        portalRoot.removeChild(this.elem);
    }

    render() {
        const { children } = this.props;
        return ReactDOM.createPortal(children, this.elem);
    }
}
