import React from 'react';
import { Link, IndexLink } from 'react-router';
import NavLink from './NavLink';

export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          {/*active style applies a style to the currently rendered page*/}
          <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
          <li><NavLink to="/repos" activeClassName="active">Repos</NavLink></li>
          <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
        </ul>

        {/*render children inside of App.*/}
        {this.props.children}
      </div>
    )
  }
})
