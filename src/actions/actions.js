import * as types from './types';

function hasLastNameErrors (hasError, lastNameErrors) {
    return {
        type: types.IS_VALID_LAST_NAME,
        hasError: hasError,
        errors: lastNameErrors
    }
}

function hasEmailErrors(hasError, emailErrors) {
    return {
        type: types.IS_VALID_EMAIL,
        hasError: hasError,
        errors: emailErrors
    }
}

function validateLastName(lastNameVal) {
    return dispatch => {
        let errors = {},
            hasError = false;
        if (lastNameVal === '') {
            errors.lastName = 'Last Name is required';
            hasError = true;
        } else {
            errors.lastName = '';
        }
        dispatch(hasLastNameErrors(hasError, errors));
    }
}

function validateEmail(emailVal) {
    return dispatch => {
        let errors = {},
            hasError = false,
            re = /\S+@\S+\.\S+/;
        if (emailVal === '') {
            errors.email = 'Email is required';
            hasError = true;
        } else if (!re.test(emailVal)) {
            errors.email = 'Need a valid email address';
            hasError = true;
        } else {
            errors.email = '';
        }
        dispatch(hasEmailErrors(hasError, errors));
    }
}

export {
    validateLastName,
    validateEmail
}

