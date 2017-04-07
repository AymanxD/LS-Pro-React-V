import React from 'react';

const Scarf = (props) => (
  <div>
    <h3>{props.match.params.scarfId}</h3>
  </div>
);

export default Scarf;
