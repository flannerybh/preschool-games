import React from 'react';

export  const UserInput = (props) => {
    const { input, goal } = props;

    return (
        <div style={{"letter-spacing": ".15rem"}}>
            {input && input.split("").map((c, i) => <span style={{color: (
                c === goal[i] ? "black" : "red"
            )}}>{c}</span>)}
        </div>
    );
};

export default UserInput;