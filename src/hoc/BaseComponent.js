import React, {Component} from 'react';

const baseHOC = (WrappedComponent) => {
    return class BaseComponent extends Component {
        constructor() {
            super();
            console.log("BaseHoc: ctor");
            this.registerErrorLog();
        }

        registerErrorLog() {
            window.onerror = (message, file, line, column, errorObject) => {
                column = column || (window.event && window.event.errorCharacter);
                var stack = errorObject ? errorObject.stack : null;

            //trying to get stack from IE
            if(!stack)
            {
                var stack = [];
                    var f = arguments.callee.caller;
                    while (f)
                    {
                        stack.push(f.name);
                        f = f.caller;
                    }
                    errorObject['stack'] = stack;
                }

                var data = {
                    message:message,
                    file:file,
                    line:line,
                    column:column,
                    errorStack:stack,
                };

                //here I make a call to the server to log the error

                //the error can still be triggered as usual, we just wanted to know what's happening on the client side
                console.log(data);
                return false;
            }
        }
        render() {
            return <WrappedComponent {...this.props}/>
        }
    }
}

export default baseHOC;