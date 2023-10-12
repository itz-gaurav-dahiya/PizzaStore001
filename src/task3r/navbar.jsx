import React,{Component} from "react";
class Navbar extends Component{
    render(){
        return(
            <nav class="navbar navbar-expand-lg navbar-light bg-dark text-light ">
            <a class="navbar-brand text-light" href="#">Bill System</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link text-light" href="#"><button className="btn text-light " onClick={()=>this.props.shownewbil(true)}>New Bill</button> </a>
                </li>
              </ul>
            </div>
          </nav>
          
        )
    }
}
export default Navbar