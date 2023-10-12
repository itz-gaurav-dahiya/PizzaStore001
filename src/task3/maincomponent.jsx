import React,{Component} from "react";
import Navbar from "./navbar";
class Maincomponent extends Component{
    state={
        
        sizes : ["Regular","Medium","Large"],
        crusts : ["New Hand Tossed","Wheat Thin Crust","Cheese Burst","Fresh Pan Pizza","Classic HandTossed"],
        Dataonitems : [
        {"id":"MIR101","image":"https://i.ibb.co/SR1Jzpv/mirinda.png","type":"Beverage","name":"Mirinda","desc":"Mirinda","veg":"Yes"},
        {"id":"PEP001","image":"https://i.ibb.co/3vkKqsF/pepsiblack.png","type":"Beverage","name":"Pepsi Black Can","desc":"Pepsi Black Can","veg":"Yes"},
        {"id":"LIT281","image":"https://i.ibb.co/27PvTng/lit.png","type":"Beverage","name":"Lipton IcedTea","desc":"Lipton Iced Tea","veg":"Yes"},
        {"id":"PEP022","image":"https://i.ibb.co/1M9xDZB/pepsi-new20190312.png","type":"Beverage","name":"Pepsi New","desc":"Pepsi New","veg":"Yes"},
        {"id":"BPCNV1","image":"https://i.ibb.co/R0VSJjq/Burger-Pizza-Non-Veg-nvg.png","type":"Burger Pizza","name":"Classic Non Veg","desc":"Oven-baked buns with cheese, peri-peri chicken, tomato & capsicum in creamy mayo","veg":"No"},
        {"id":"BPCV03","image":"https://i.ibb.co/Xtx43fT/Burger-Pizza-Veg-423-X420-Pixel1.png","type":"Burger Pizza","name":"Classic Veg","desc":"Oven-baked buns with cheese, tomato &  capsicum in creamy mayo","veg":"Yes"},
        {"id":"BPPV04","image":"https://i.ibb.co/Xtx43fT/Burger-Pizza-Veg-423-X420-Pixel1.png","type":"Burger Pizza","name":"Premium Veg","desc":"Oven-baked buns with cheese, paneer,tomato, capsicum & red paprika in creamy mayo","veg":"Yes"},
        {"id":"DIP033","image":"https://i.ibb.co/0mbBzsw/new-cheesy.png","type":"Side Dish","name":"Cheesy Dip","desc":"An all-time favorite with your Garlic Breadsticks & Stuffed Garlic  Bread for a Cheesy indulgence","veg":"Yes"},
        {"id":"DIP072","image":"https://i.ibb.co/fY52zBw/new-jalapeno.png","type":"Side Dish","name":"Cheesy Jalapeno Dip","desc":"A spicy, tangy flavored cheese dip is a an absolute  delight with your favourite Garlic Breadsticks","veg":"Yes"},
        {"id":"GAR952","image":"https://i.ibb.co/BNVmfY9/Garlic-bread.png","type":"Side  Dish","name":"Garlic Breadsticks","desc":"Baked to perfection. Your perfect pizza partner! Tastes  best with dip","veg":"Yes"},
        {"id":"PARCH1","image":"https://i.ibb.co/prBs3NJ/Parcel-Nonveg.png","type":"Side Dish","name":"Chicken Parcel","desc":"Snacky bites! Pizza rolls with chicken sausage & creamy harissa sauce","veg":"No"},
        {"id":"PARVG7","image":"https://i.ibb.co/JHhrM7d/Parcel-Veg.png","type":"Side Dish","name":"Veg Parcel","desc":"Snacky bites! Pizza rolls with paneer & creamy harissa sauce","veg":"Yes"},
        {"id":"PATNV7","image":"https://i.ibb.co/0m89Jw9/White-Pasta-Nvg.png","type":"Side Dish","name":"White Pasta Italiano Non-Veg","desc":"Creamy white pasta with pepper barbecue chicken","veg":"No"},
        {"id":"PATVG4","image":"https://i.ibb.co/mv8RFbk/White-Pasta-Veg.png","type":"Side Dish","name":"White Pasta Italiano Veg","desc":"Creamy white pasta with herb grilled mushrooms","veg":"Yes"},
        {"id":"DES044","image":"https://i.ibb.co/gvpDKPv/Butterscotch.png","type":"Dessert","name":"Butt erscotch Mousse Cake","desc":"Sweet temptation! Butterscotch flavored mousse","veg":"Yes"},
        {"id":"DES028","image":"https://i.ibb.co/nm96NZW/ChocoLava.png","type":"Dessert","name":"Choco Lava Cake","desc":"Chocolate lovers delight! Indulgent, gooey molten lava inside chocolate cake","veg":"Yes"},
        {"id":"PIZVDV","image":"https://i.ibb.co/F0H0SWG/deluxeveg.png","type":"Pizza","name":"Deluxe  Veggie","desc":"Veg delight - onion, capsicum, grilled mushroom, corn & paneer","veg":"Yes"},
        {"id":"PIZVFH","image":"https://i.ibb.co/4mHxB5x/farmhouse.png","type":"Pizza","name":"Farmhou se","desc":"Delightful combination of onion, capsicum, tomato & grilled mushroom","veg":"Yes"},
        {"id":"PIZVIT","image":"https://i.ibb.co/sRH7Qzf/Indian-TandooriPaneer.png","type":"Pizza","name":"Indi Tandoori Paneer","desc":"It is hot. It is spicy. It is oh-soIndian. Tandoori paneer with capsicum, red paprika & mint mayo","veg":"Yes"},
        {"id":"PIZVMG","image":"https://i.ibb.co/MGcHnDZ/mexgreen.png","type":"Pizza","name":"Mexica n Green Wave","desc":"Mexican herbs sprinkled on onion, capsicum, tomato &jalapeno","veg":"Yes"},
        {"id":"PIZVPP","image":"https://i.ibb.co/cb5vLX9/peppypaneer.png","type":"Pizza","name":"Peppy Paneer","desc":"Flavorful trio of juicy paneer, crisp capsicum with spicy red paprika","veg":"Yes"},
        {"id":"PIZVVE","image":"https://i.ibb.co/gTy5DTK/vegextra.png","type":"Pizza","name":"Veg Extravaganza","desc":"Black olives, capsicum, onion, grilled mushroom, corn, tomato, jalapeno & extra cheese","veg":"Yes"},
        {"id":"PIZNCP","image":"https://i.ibb.co/b5qBJ9d/cheesepepperoni.png","type":"Pizza","name":"Chi  cken Pepperoni","desc":"A classic American taste! Relish the delectable flavor of Chicken Pepperoni,  topped with extra cheese","veg":"No"},
        {"id":"PIZNCD","image":"https://i.ibb.co/GFtkbB1/ChickenDominator10.png","type":"Pizza","name":"Chicken Dominator","desc":"Loaded with double pepper barbecue chicken, peri-peri chicken, chicken tikka & grilled chicken rashers","veg":"No"},
        {"id":"PIZNPB","image":"https://i.ibb.co/GxbtcLK/Pepper-Barbeque-OnionC.png","type":"Pizza","name":"Pepper Barbecue & Onion","desc":"A classic favourite with pepper barbeque chicken & onion","veg":"No"},
        {"id":"PIZNIC","image":"https://i.ibb.co/6Z5wBqr/Indian-Tandoori-ChickenTikka.png","type":"Pizza","name":"Indi Chicken Tikka","desc":"The wholesome flavour of tandoorimasala with Chicken tikka, onion, red paprika & mint mayo","veg":"No"}]  ,
       show:'',
       card:[]
        
    }
    handleShow=(type)=>{
     this.setState({show:type})
    }
   
    addtocard = (id, image, desc, name, veg, type, size = '', crust = '') => {
        if (type.includes('Pizza') && (!size || !crust)) {
            alert("Please select both size and crust for the pizza.");
            return;
        }
    
        const newItem = {
            id: id,
            count: 1,
            image: image,
            desc: desc,
            name: name,
            veg: veg,
            type: type,
            size: size,
            crust: crust
        };
    
        const updatedState = { ...this.state };
        updatedState.card.push(newItem);
        this.setState(updatedState);
    }
    
    addcount=(id)=>{
     let s1={...this.state};
     s1.card[s1.card.findIndex((a)=>a.id==id)].count++
     this.setState(s1)
    }
   
    mincount = (id) => {
        let s1 = { ...this.state };
        const itemIndex = s1.card.findIndex((a) => a.id === id);
      
        if (itemIndex >= 0) {
          s1.card[itemIndex].count--;
      
          if (s1.card[itemIndex].count === 0) {
            // If count reaches 0, remove the item from the cart
            s1.card.splice(itemIndex, 1);
      
            // Set size and crust to empty strings in Dataonitems
            const dataIndex = s1.Dataonitems.findIndex((item) => item.id === id);
            if (dataIndex >= 0) {
              s1.Dataonitems[dataIndex].size = '';
              s1.Dataonitems[dataIndex].crust = '';
            }
          }
      
          this.setState(s1);
        }
      }
      
    //    addsize=(event,id)=>{
    //     let {currentTarget:input}=event;
    //     let s1={...this.state}
    //    let index=  s1.Dataonitems.findIndex((f)=>(f.id==id))
    //    s1.Dataonitems[index].size=event.value;
    //    this.setState(s1)
    //    }
    //    addcrust=(event,id)=>{
    //     let {currentTarget:input}=event;
    //     let s1={...this.state}
    //    let index=  s1.Dataonitems.findIndex((f)=>(f.id==id))
    //    s1.Dataonitems[index].crust=event.value;
    //    this.setState(s1)
    //    }
    addcrust = (id, selectedCrust) => {
        const updatedDataonitems = this.state.Dataonitems.map((item) => {
          if (item.id === id) {
            item.crust = selectedCrust;
          }
          return item;
        });
      
        this.setState({ Dataonitems: updatedDataonitems });
      }
      
       addsize = (id, selectedSize) => {
        const updatedDataonitems = this.state.Dataonitems.map((item) => {
          if (item.id === id) {
            item.size = selectedSize;
          }
          return item;
        });
    
        this.setState({ Dataonitems: updatedDataonitems });
      }
    
    render(){
        let {Dataonitems,show,card,sizes,crusts}=this.state;
        console.log(show)
        let showdata=[];
        if(show=='vegpizza'){
            showdata=Dataonitems.filter((a)=>a.type.includes('Pizza')&& a.veg=='Yes')
        }
        else if(show=='nonvegpizza'){
            showdata=Dataonitems.filter((a)=>a.type.includes('Pizza')&& a.veg=='No')
        }
        else if(show=='sidedish'){
          showdata=Dataonitems.filter((a)=>a.type=='Side Dish')
        }
        else if(show=='other'){
showdata=Dataonitems.filter((a)=>!a.type.includes('Pizza')&& !a.type.includes('Side Dish'))
        }
      
        return(
            <div className="container ">
                <div className="row">
                    <div className="col-12 ">
                        <Navbar handleShow={this.handleShow}></Navbar>
                    </div>
                    <div className="col-12 ">
                        <div className="row">
                            <div className="col-8 border ">
                              <div className="row">
                              {
                                showdata.map((a)=>{
                                    return(
                                        <div className="col-6 ">
                                        <div className="card mb-3">
  <img src={`${a.image}`} className="card-img-top" alt="..." />
  <div className="card-body text-center ">
    <h5 className="card-title">{a.name}</h5>
    <p className="card-text">{a.desc}</p>
    <span>
        {
            a.type.includes('Pizza')?
            <div className="row">

            <div className="col-6 ">
            <div className="form-group">
           <select className="form-select " value={a.size?a.size:''} name={`${a.id}`} onChange={(e) => this.addsize(a.id, e.target.value)} disabled = {card.findIndex((x)=>x.id==a.id)>=0? true:false}>
            <option value=''>select sizes</option>
          {
            sizes.map((a)=><option value={a}>{a}</option>)
          }
           </select>
          

            </div>
            </div>
            <div className="col-6 ">
            <div className="form-group">
           <select className="form-select " value={a.crust?a.crust:''} name={`${a.id}`} onChange={(e) => this.addcrust(a.id, e.target.value)} disabled = {card.findIndex((x)=>x.id==a.id)>=0? true:false}>
            <option value=''>select crusts</option>
          {
            crusts.map((a)=><option value={a}>{a}</option>)
          }
           </select>
            </div>
            </div>
            </div>
            
            :''
        }
    </span>
    {
  card.findIndex((b)=>b.id==a.id)>=0?
    <span>
        <button onClick={()=>this.mincount(a.id)} className="btn btn-danger ">-</button>
        <button className="btn btn-secondary ">{card[card.findIndex((b)=>b.id==a.id)].count}</button>
        <button onClick={()=>this.addcount(a.id)} className="btn btn-success ">+</button>
    </span>
    :
    <div>

    {
        a.type.includes('Pizza')?
    <button className="btn btn-primary " onClick={()=>this.addtocard(a.id,a.image,a.desc,a.name,a.veg,a.type,a.size,a.crust,)}>add to card </button>
        
        :
    <button className="btn btn-primary " onClick={()=>this.addtocard(a.id,a.image,a.desc,a.name,a.veg,a.type)}>add to card </button>
    }
    </div>
    }
   
  </div>
</div>
                                        </div>
                                    )
                                })
                              }
                              
                              </div>
                            </div>
                            <div className="col-4 border ">
                                {
                                   card.length==0?<h3> empty card</h3>:

                                  <div className="row">
                                    {
                                        card.map((a)=>{
                                            return(
                                                <div className="col-12 ">
                                                <div class="card mb-3">
  <img src={`${a.image}`} class="card-img-top" alt="..."/>
  <div class="card-body text-center ">
  <h5 className="card-title">{a.name}</h5>
    <p className="card-text">{a.desc}</p>
    <span>
        {a.type.includes('Pizza')?<h5>{a.size} {a.crust}</h5>:""}
    </span>
    <span>
    <button onClick={()=>this.mincount(a.id)} className="btn btn-danger ">-</button>
        <button className="btn btn-secondary ">{card[card.findIndex((b)=>b.id==a.id)].count}</button>
        <button onClick={()=>this.addcount(a.id)} className="btn btn-success  ">+</button>
    </span>
  </div>
</div>
                                                </div>
                                            )
                                        })
                                    }
                                  </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }

}
export default  Maincomponent