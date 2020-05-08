import React, { useState } from 'react';

const ValidationComponent = (props) => {

    let validationMsg = null;

    if (props.textLength < props.minLength) {
        validationMsg = "its too short"
    } else {
        validationMsg = "its too long"
    }
    props.textLength === null || props.textLength === 0 ? validationMsg = "0" : validationMsg


    return (
        <div>
            <p>
                {/* text minimum length is :{props.minLength} but user entered {props.textLength} */}
                Text Box Char length : {validationMsg}
            </p>
        </div>
    );
};

export default ValidationComponent;