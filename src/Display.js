import React from "react";
import PropTypes from 'prop-types';

const Display = ({ firstName, age, strOrNum, employee, arr, person }) => {

    return (
        <>
            {firstName},{age},{strOrNum}
        </>
    )
}

//checking the datatype
//props values that are expected
Display.propTypes = {
    firstName: PropTypes.string.isRequired,
    age: PropTypes.number,
    strOrNum: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    arr: PropTypes.arrayOf(PropTypes.number).isRequired,
    // person: PropTypes.shape({

    // }),
    employee: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        designation: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired
    })),

    fullName: PropTypes.func
}

//
Display.defaultProps = {
    firstName: 'harry',
    age: 30,
    strOrNum: 34,
    arr: [90, 88, 78],
    employee: [{
        id: 1,
        designation: 'developer',
        username: 'NJFN'
    }, {
        id: 2,
        designation: 'HR',
        username: 'nhjfk'
    }]
}


export default Display;