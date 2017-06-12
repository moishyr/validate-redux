import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            person: {
                firstName: '',
                lastName: '',
                email: '',
                phone: ''
            }
        };
    
        this.changeHandler = this.changeHandler.bind(this);
        this.blurHandler = this.blurHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    changeHandler(e) {
        let person = this.state.person;
        person[e.target.name] = e.target.value;
        this.setState({ person });
    }

    blurHandler(e) {
        let person = this.state.person;
        if (e.target.name === 'lastName') {
            this.props.validateLastName(person[e.target.name]);
        } else if (e.target.name === 'email') {
            this.props.validateEmail(person[e.target.name]);
        }
    }

    submitHandler(e) {
        e.preventDefault();
        let person = this.state.person;
        this.props.validateLastName(person.lastName);
        this.props.validateEmail(person.email);
    }
    
    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input onChange={this.changeHandler} type="text" name="firstName" value={this.state.person.firstName} placeholder="first name" />
                <br />
                <input onChange={this.changeHandler} onBlur={this.blurHandler} type="text" name="lastName" value={this.state.person.lastName} placeholder="last name" />
                <br />
                <input onChange={this.changeHandler} onBlur={this.blurHandler} type="text" name="email" value={this.state.person.email} placeholder="email" />
                <br />
                <input onChange={this.changeHandler} type="text" name="phone" value={this.state.person.phone} placeholder="phone" />
                <br />
                <button>submit</button>
            </form>
        )
    }
}

function mapStateToProps(state) {
    return {
        errors: state.formErrors
    }
}

let reduxAware = connect(mapStateToProps, actions);
export default reduxAware(Form);