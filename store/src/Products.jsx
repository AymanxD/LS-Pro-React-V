import React from 'react';
import {Route, Link} from 'react-router-dom';
import Scarf from './Scarf.jsx';

export default (props) => (
  <div>
    <h2>Our variety of scarves.</h2>
    <ul>
      <li><Link to={'${props.match.url}/scarfred'}>Red Scarf</Link></li>
      <li><Link to={'${props.match.url}/scarfyellow'}>Yellow Scarf</Link></li>
      <li><Link to={'${props.match.url}/scarfblue'}>Blue Scarf</Link></li>
    </ul>

    <Route path={props.match.url} render={() => {
      return  <h3>Select a scarf.</h3>
      }} />
    <Route path={'${props.match.url}/:scarfId'} component={Scarf} />
  </div>
);
