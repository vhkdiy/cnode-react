import React, { Component } from "react";
import { Link } from "react-router";

class Header extends Component {
  constructor() {
   super();
   this.state = { clicked: false };
   this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    let navbar = this.state.clicked ? 'navbar-collapse' : 'collapse navbar-collapse';
    const NAVBAR_ITEM = [{name: '首页', path: '/'}, {name: '新手入门', path: '/getstart'}, {name: '关于', path: '/about'}, {name: '注册', path: '#'}, {name: '登陆', path: '/login'}];
    return (
      <nav className="navbar navbar-inverse navbar-static-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" onClick={this.handleClick} >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/">
              <img className="navbar-brand" src="http://o4j806krb.qnssl.com/public/images/cnodejs_light.svg" alt="" />
            </Link>
          </div>

          <div className={navbar} id="responsive-navbar">
            <form action="" className="navbar-form navbar-left">
              <input type="text" placeholder="search" className="form-control navbar-search" />
            </form>

            <div className="navbar-right">
              <ul className="nav navbar-nav">
                {
                  NAVBAR_ITEM.map((item, i) => <li key={i}><Link to={item.path} onClick={this.handleClick}>{item.name}</Link></li>)
                }
              </ul>
            </div>

          </div>

        </div>
      </nav>
    );
  }
}

export default Header;