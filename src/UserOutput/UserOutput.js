import React from "react";

const userOutput = (props) => {
  const style = {
    border: '1px dashed black',
    boxShadow: '0 2px 3px #ccc',
    marginTop: '15px',
    width: '50%',
  };

  return (
    <div style={style}>
      <p>{props.userName}</p>
      <p>Extra stuff</p>
    </div>
  )
};

export default userOutput;