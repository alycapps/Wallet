import React from "react";

// Generic navbar for top of all pages
class Nav extends React.Component {
  render () {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="col-md-4">
          <h1>
            <a className="text-white" href="/">Digital Wallet</a>
          </h1>
        </div>
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <a href="/all" className="navbar-brand">All</a>
          <a href="/add" className="navbar-brand">Add</a>
        </div>
      </nav>
    )
  }
};

export default Nav;