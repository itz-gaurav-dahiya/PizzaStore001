import React,{Component} from "react";
import NavBar from "./navbar";
import AddForm from "./addform";
import Addstock from "./addstock";
class HomePage extends Component{
     state={
        Products:
[
 {
 code: "PEP1253", price: 20, brand: "Pepsi", category: "Food",
 specialOffer: false, limitedStock: false, quantity: 25
 },
 {
 code: "MAGG021", price: 25, brand: "Nestle", category: "Food",
 specialOffer: true, limitedStock: true, quantity: 10
 },
 {
 code: "LEV501", price: 1000, brand: "Levis", category: "Apparel",
 specialOffer: true, limitedStock: true, quantity: 3
 },
 {
 code: "CLG281", price: 60, brand: "Colgate", category: "Personal Care",
 specialOffer: true, limitedStock: true, quantity: 5
 },
 {
 code: "MAGG451", price: 25, brand: "Nestle", category: "Food",
 specialOffer: true, limitedStock: true, quantity: 0
 },
 {
 code: "PAR250", price: 40, brand: "Parachute", category: "Personal Care",
 specialOffer: true, limitedStock: true, quantity: 5
 }
]
 ,
 view:0,
 editIndex:-1,
 edit:false
     }
     showAddForm=()=>{
        let s1={...this.state};
        s1.view=1;
        this.setState(s1)
     }
     addProduct=(data)=>{
     let s1={...this.state};
     if(s1.editIndex>=0){
        s1.Products[s1.editIndex]=data
     }
     else{
         s1.Products.push(data);
     }
     s1.view=0;
     s1.editIndex=-1;
     s1.edit=false
     this.setState(s1)  
     }
     editData = (index) => {
        this.setState({
          editIndex: index,
          edit: true,
          view:1
        });
      };
      showHomePage=()=>{
        this.setState({view:0,editIndex:-1,edit:false})
      }
      showAddStock=()=>{
        this.setState({view:2})
      }
      addQuantity=(data)=>{
        let s1={...this.state}
       let indexforaddqty= s1.Products.findIndex((a)=>(
          a.code==data.code
        ))
        s1.Products[indexforaddqty].quantity+= +data.stock;
        s1.view=0;
        this.setState(s1);
      }
      render(){
        let {view,Products,editIndex,edit}=this.state
        let passdatainform=editIndex>=0?Products[editIndex]:{
            code: "",
            price: "",
            brand: "",
            category: "",
            specialOffer: false,
            limitedStock: false,
            quantity:0
          }
      let productss=Products.length;
      let quantity =Products.reduce((total, product) => {
        return total + Number(product.quantity);
      }, 0);
      let value=Products.reduce((acc,curr)=>{
        return acc + curr.quantity*curr.price
      },0);
      console.log(productss,quantity,value);
        return(
            <div className="container ">
                <div className="row">
                    <div className="col-12 ">
                        <NavBar productss={productss} quantity={quantity} value={value}></NavBar>
                    </div>
                    <div className="col-12 ">
                     {
                        view===0?
                        <div className="row">
                          {
                            Products.map((a,index)=>(
                        <div className="col-4" key={index}  >
                        <div className="card mb-3">
                        <div className="card-body text-center">
                        <h5 className="card-title">Code: {a.code}</h5>
                        <p className="card-text">Brand: {a.brand}</p>
                        <p className="card-text">Category: {a.category}</p>
                        <p className="card-text">Price: ${a.price}</p>
                        <p className="card-text">Quantity: {a.quantity}</p>
                        <p className="card-text ">Spacial Offers: {a.specialOffer?'Yes':'No'}</p>
                        <p className="card-text ">Limited Stockes: {a.limitedStock?'Yes':'No'}</p>
                        <div className="card-footer ">
                        <button className="btn btn-warning " onClick={()=>this.editData(index)}>Edit Details</button>
                        </div>
                        </div>
                        </div>
                        </div>
                            ))
                          }  
                        <div>
                            <button className="btn btn-primary mx-2 " onClick={()=>this.showAddForm()}>Add New Products</button>
                            <button className="btn btn-primary mx-2 " onClick={()=>this.showAddStock()}>Receive Stocks</button>
                        </div>
                        </div>
                        :view==1?
                        <div className="row">
                        <AddForm addProduct={this.addProduct} edit={edit} passdatainform={passdatainform} showHomePage={this.showHomePage}></AddForm>
                        </div>
                        :view==2?
                        <div className="row">
                            <Addstock Products={Products} showHomePage={this.showHomePage} addQuantity={this.addQuantity}></Addstock>
                        </div>
                        :''
                     }
                    </div>
                </div>
            </div>
        )
    }
}
export default HomePage