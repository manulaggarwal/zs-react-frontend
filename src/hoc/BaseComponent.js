import React, {Component} from 'react';

const baseHOC = (WrappedComponent) => {
    return class BaseComponent extends Component {
        constructor() {
            super();
            console.log("BaseHoc: ctor");
        }
        render() {
            return <WrappedComponent {...this.props}/>
        }
    }
}

export default baseHOC;