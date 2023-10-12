import React, { Component } from "react";

class AddForm extends Component {
  state = {
    data:this.props.passdatainform,
    categorys: ["Food", "Personal Care", "Apparel"],
    Food: ["Nestle", "Haldiram", "Pepsi", "Coca Cola", "Britannia", "Cadburys"],
    PersonalCare: ["Colgate", "Parachute", "Gillette", "Dove"],
    Apparel: ["Levis", "Van Heusen", "Manyavaar", "Zara"],
    errors:{}
  };

  handleChange = (e) => {
    const { currentTarget: input } = e;
    // const { name, type, value, checked } = input;

    // this.setState((prevState) => ({
    //   data: {
    //     ...prevState.data,
    //     [name]: type === "checkbox" ? checked : value
        
    //   }
    // }));
 let s1={...this.state}
 s1.data[input.name]=input.value;
 if(input.name=='category'){
  s1.data.brand=''
 }
 this.setState(s1);
  };
handleSubmit=()=>{
   let errors=this.validateAll()
   if(this.isValid(errors)){
     this.props.addProduct(this.state.data)
   }
   else{
   let s1={...this.state}
   s1.errors=errors;
   this.setState(s1)
   if(s1.errors.category||s1.errors.brand){
    alert('select category and brand')
   }
   
   }
   
}
isValid=(errors)=>{
  let key =Object.keys(errors);
 let count= key.reduce((acc,curr)=>errors[curr]?acc+1 :acc,0);
 return count===0;
}
validateAll=()=>{
  let {code,price,brand,category}=this.state.data
  let errors={};
  if(!code) errors.code='please enter code';
  if(!price) errors.price='please enter price';
  if(!brand) errors.brand='please enter brand';
  if(!category) errors.category='please enter category';
  return errors;
}
  render() {
    const {
      code,
      price,
      brand,
      category,
      specialOffer,
      limitedStock,
      quantity
    } = this.state.data;
    const { categorys, Food, PersonalCare, Apparel } = this.state;
    const dropdown =
      category === "Food"
        ? Food
        : category === "Personal Care"
        ? PersonalCare
        : category === "Apparel"
        ? Apparel
        : [];
let {edit}=this.props;
let {errors}=this.state
    return (
      <div className="col-12">
        <div className="form-group">
          <label className="form-label">Product Code</label>
          <input
            className="form-control"
            type="text"
            name="code"
            value={code}
            onChange={this.handleChange}
          />
   <div className="my-2 text-dark fs-4 bg-danger ">{errors.code?errors.code:''}</div>
        </div>
        <div className="form-group">
          <label className="form-label">Price</label>
          <input
            className="form-control"
            type="number"
            name="price"
            value={price}
            onChange={this.handleChange}
          />
            <div className="my-2 text-dark fs-4 bg-danger ">{errors.price?errors.price:''}</div>
        </div>
        <div className="form-group">
          <label className="form-label width-bold">Category</label>
          {categorys.map((a, index) => (
            <div key={index} className="form-check">
              <input
                type="radio"
                className="form-check-input"
                value={a}
                name="category"
                checked={a === category}
                onChange={this.handleChange}
              />
              <label className="form-check-label">{a}</label>
            </div>
          ))}
        </div>
        
        <div className="form-group">
          <select
            className="form-select"
            name="brand"
            value={brand}
            onChange={this.handleChange}
          >
            <option value="">Select brand</option>
            {dropdown.map((a, index) => (
              <option key={index} value={a}>
                {a}
              </option>
            ))}
          </select>
           
        </div>
        <div className="form-group">
          <input
            type="checkbox"
            name="specialOffer"
            checked={specialOffer}
            onChange={this.handleChange}
          />
          <label className="form-check-label">Special Offer</label>
        </div>
        <div className="form-group">
          <input
            type="checkbox"
            name="limitedStock"
            checked={limitedStock}
            onChange={this.handleChange}
          />
          <label className="form-check-label">Limited Stock</label>
        </div>
        <div>
          <button className="btn btn-primary mx-2" onClick={()=>this.handleSubmit()}>{edit?'edit product':'add product'}</button>
          <button className="btn btn-primary mx-2" onClick={()=>this.props.showHomePage()}>back to home page</button>
        </div>
      </div>
    );
  }
}

export default AddForm;
