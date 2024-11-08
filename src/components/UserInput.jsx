import React from 'react';

export  const UserInput = (props) => {
    const { input, goal } = props;

    return (
        <div style={{"letter-spacing": ".15rem"}}>
            {input && input.split().map(c => <div>{c}</div>)}
        </div>
    );
};

export default UserInput;