import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

class Errors extends React.Component {

    addLi(err, i) {
        if (this.props.errors[err] !== '') {
            return (
                <li key={i}>{this.props.errors[err]}</li>
            )
        } else {
            return;
        }
    }
    hasErrors(errorObject) {
        let hasErrors = false;
        if(Object.keys(errorObject).length > 0) {
            Object.keys(errorObject).forEach(elem => {
                if(errorObject[elem] !== '') {
                    hasErrors = true;
                }
            });
        }
        return hasErrors;
    }

    render() {
        if (this.hasErrors(this.props.errors)) {
            return (
                <div className="alert alert-danger">
                    <ul>
                        {/*{console.log(this.props.errors)}*/}
                        {Object.keys(this.props.errors).map((err, i) => this.addLi(err, i))}
                    </ul>
                </div>
            )
            } else {
                return (
                    <div></div>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        errors: state.formErrors
    }
}

let reduxAware = connect(mapStateToProps, actions);
export default reduxAware(Errors);