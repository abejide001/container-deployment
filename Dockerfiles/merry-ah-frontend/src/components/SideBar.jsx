import React from 'react';

const SideBar = () => (
  <div className="wrapper">
    <nav id="sidebar">
      <ul className="list-unstyled components">
        <li className="active">
          <a className='side'><i className="fa fa-user"></i> My Page</a>
        </li>
        <li>
          <a className='side'>
              <i className="fa fa-cog"></i> Settings</a>
        </li>
      </ul>
    </nav>
    <div className="clear-fix"></div>
  </div>
);

export default SideBar;
