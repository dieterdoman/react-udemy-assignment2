import React from 'react';

const ValidationComponent = (props) => {
    let string = "Text too short";
    if(props.textLength >= 5) {
        string = "Text long enough";
    }
    return (<p>{string}</p>);
};

export default ValidationComponent;
