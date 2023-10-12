import React,{Component} from "react";
class Navbar extends Component{
    render(){
        return(
            <div className="row">
             <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">MyFavPizza</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#"><button className="btn" onClick={()=>this.props.handleShow('vegpizza')}>Veg Pizza</button></a>
        <a class="nav-link" href="#" ><button onClick={()=>this.props.handleShow('nonvegpizza')} className="btn">Non-Veg Pizza</button></a>
        <a class="nav-link" href="#"><button className="btn" onClick={()=>this.props.handleShow('sidedish')}>Side Dishes </button></a>
        <a class="nav-link" href="#"> <button className="btn" onClick={()=>this.props.handleShow('other')}>Other Items</button></a>
      </div>
    </div>
  </div>
</nav>
             </div>
        )
    }
}
export default Navbar