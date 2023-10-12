import React,{Component} from "react";
import { Link } from "react-router-dom";
class Navbar extends Component{
    render(){
        return(
            <div className="row">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <Link className="navbar-brand" to="/">MyCompany</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/emps">All </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/emps/New Delhi">New Delhi</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/emps/Noida">Noida</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

            </div>
        )
    }
}
export default  Navbar