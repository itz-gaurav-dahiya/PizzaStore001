import React, { Component } from "react";
class NavBar extends Component {
render() {
let {productss,quantity,value} = this.props;
return (
<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
<a className="navbar-brand" href="#">
ProdStoreSys
</a>
<div className="" id="navbarSupportedContent">
<ul className="navbar-nav mr-auto">
<li className="nav-item">
<a className="nav-link" href="#">
Products{productss}
<span className="badge badge-pill badge-secondary"></span>
</a>
</li>
<li className="nav-item">
<a className="nav-link" href="#">
Quantity{quantity}
<span className="badge badge-pill badge-secondary"></span>
</a>
</li>
<li className="nav-item">
<a className="nav-link" href="#">
Value{value}
<span className="badge badge-pill badge-secondary"></span>
</a>
</li>
</ul>
</div>
</nav>
);
}
}
export default NavBar;