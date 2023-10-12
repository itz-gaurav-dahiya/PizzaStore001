import React,{Component} from "react";
import Navbar from "./navbar";
class Maincomponent extends Component{
    state={
        data:[
        {"code":"PEP221","prod":"Pepsi","price":12,"instock":"Yes","category":"Beverages"},
        {"code":"COK113","prod":"Coca Cola","price":18,"instock":"Yes","category":"Beverages"},
        {"code":"MIR646","prod":"Mirinda","price":15,"instock":"No","category":"Beverages"},
        {"code":"SLI874","prod":"Slice","price":22,"instock":"Yes","category":"Beverages"},
        {"code":"MIN654","prod":"Minute Maid","price":25,"instock":"Yes","category":"Beverages"},
        {"code":"APP652","prod":"Appy","price":10,"instock":"No","category":"Beverages"},
        {"code":"FRO085","prod":"Frooti","price":30,"instock":"Yes","category":"Beverages"},
        {"code":"REA546","prod":"Real","price":24,"instock":"No","category":"Beverages"},
        {"code":"DM5461","prod":"Dairy Milk","price":40,"instock":"Yes","category":"Chocolates"},
        {"code":"KK6546","prod":"Kitkat","price":15,"instock":"Yes","category":"Chocolates"},
        {"code":"PER5436","prod":"Perk","price":8,"instock":"No","category":"Chocolates"},
        {"code":"FST241","prod":"5 Star","price":25,"instock":"Yes","category":"Chocolates"},
        {"code":"NUT553","prod":"Nutties","price":18,"instock":"Yes","category":"Chocolates"},
        {"code":"GEM006","prod":"Gems","price":8,"instock":"No","category":"Chocolates"},
        {"code":"GD2991","prod":"Good Day","price":25,"instock":"Yes","category":"Biscuits"},
        {"code":"PAG542","prod":"Parle G","price":5,"instock":"Yes","category":"Biscuits"},
        {"code":"MON119","prod":"Monaco","price":7,"instock":"No","category":"Biscuits"},
        {"code":"BOU291","prod":"Bourbon","price":22,"instock":"Yes","category":"Biscuits"},
        {"code":"MAR951","prod":"MarieGold","price":15,"instock":"Yes","category":"Biscuits"},
        {"code":"ORE188","prod":"Oreo","price":30,"instock":"No","category":"Biscuits"}
        ],
        show:false
        ,category:'',stock:'',price:'',
        add:[]
    }
    shownewbil=(value)=>{
this.setState({show:value})
    }
    handleChange=(e)=>{
        let {currentTarget:input}=e;
        let s1={...this.setState};
        s1[input.name]=input.value;
        this.setState(s1)
    }
    filterdata = (category, stock, price) => {
        let filteredData = this.state.data;
    
        if (category) {
          filteredData = filteredData.filter(item => item.category === category);
        }
    
        if (stock) {
          filteredData = filteredData.filter(item => item.instock === stock);
        }
    
        if (price) {
          switch (price) {
            case '>10':
              filteredData = filteredData.filter(item => item.price > 10);
              break;
            case '10-20':
              filteredData = filteredData.filter(item => item.price >= 10 && item.price <= 20);
              break;
            case '>20':
              filteredData = filteredData.filter(item => item.price > 20);
              break;
            default:
              break;
          }
        }
    
        return filteredData;
      };
      addtocard=(code,prod,category,price,instock,index)=>{
        let s1={...this.state};
        let indexx=s1.add.findIndex((a)=>a.code==code)
        if(indexx>=0){
            s1.add[indexx].qty++
        }
        else{
            let str={
                code:code,prod:prod,category:category,price:price,instock:instock,qty:1
            }
            s1.add.push(str);
        }
        this.setState(s1)
      }
      addqty=(ind)=>{
     let s1={...this.state};
     s1.add[ind].qty++
     this.setState(s1)
      }
      minqty=(ind)=>{
        let s1={...this.state};
    s1.add[ind].qty--
    this.setState(s1)
      }
      crosqty=(ind)=>{
        let s1={...this.state};
         s1.add.splice(ind,1)
         this.setState(s1)
      }
      cross =()=>{
        let s1={...this.state};
        alert('remove all bill')
        s1.add=[];
        this.setState(s1)
      }
    render(){
        let {data,show,category,stock,price,add}=this.state;
        let q=add.reduce((a,c)=>{
            a+=c.qty;
            return a
        },0)
        let v=add.reduce((a,c)=>{
            a+=c.qty*c.price;
            return a
        },0)
        let categorys =data.reduce((acc,curr)=>{
            if(!acc.includes(curr.category)){
                acc.push(curr.category)
            }
            return acc;
        },[])
        
        let data1=show?data:[];
        data1=this.filterdata(category,stock,price,data1)
        return(
            <div className="container ">
                <div className="col-12 ">
                 <Navbar shownewbil={this.shownewbil}></Navbar>
                </div>
                {show==true?
                <div className="col-12 ">
                <div className="row">
                    <div className="col-12 "><h4>details of current bill </h4><br/> 
                    <div className="row">
                    {add.length==0?
                    <div>
                    <span>Item 0  </span>
                    <span> quantity 0  </span>
                    <span>  amount 0 </span>
                    </div>
                    :
                    <div className="row">
                    <div className="col-12 ">
                        item {add.length} quantity {q} value {v}
                    </div>
                        {add.map((a,index)=>{
                            return(
                                <div className="col-12 ">
                                <div className="row">
                                
                                <div className="col-6 ">

                                <span>
                                     {a.code} {a.prod} quantity {a.qty} price {a.price} value {a.qty*a.price}
                                </span>
                                </div>
                                <div className="col-6 ">
                                <span>
                                    <button className="btn btn-success " onClick={()=>this.addqty(index)}>+</button>
                                    <button className="btn btn-warning " onClick={()=>this.minqty(index)}>-</button>
                                    <button className="btn btn-danger " onClick={()=>this.crosqty(index)}>*</button>
                                </span>
                                </div>
                                </div>
                                </div>
                            )
                        })}
                        <div>
                            <button className="btn btn-primary " onClick={()=>this.cross()}>crose bill</button>
                        </div>
                    </div>
                    }
                    </div>
                    </div>
                    

                </div>
                <div className="col-12 ">
                  <div className="row">
                    <div className="col-3 fs-4  ">filter product by</div>
                    <div className="col-3 ">
                        <div className="form-group">
                            <select className="form-select " name='category' value={category} onChange={this.handleChange}>
                                <option value=''>select category</option>
                                {
                                    categorys.map((a)=>(<option value={a}>{a}</option>))
                                }
                            </select>
                        </div>
                    </div>
                    <div className="col-3 ">
                    <div className="form-group">
                        <select className="form-select " name='stock' value={stock}  onChange={this.handleChange}>
                           <option value=''>select stock</option>
                            <option value='Yes'>Yes</option>
                            <option value='No'>No</option>
                        </select>
                    </div>
                    </div>
                    <div className="col-3 ">
                    <div className="form-group">
                        <select className="form-select " name="price" value={price}  onChange={this.handleChange}>
                           <option value=''>select price</option>
                            <option value='>10'>{`>10`}</option>
                            <option value='10-20'>10-20</option>
                            <option value='>20'>{`>20`}</option>
                        </select>
                    </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 ">
                  <div className="row bg-dark text-light ">
                     <div className="col-2 ">code</div>
                     <div className="col-2 ">product</div>
                     <div className="col-2 ">category</div>
                     <div className="col-2 ">price</div>
                     <div className="col-2 ">instock</div>
                     <div className="col-2 "></div>
                  </div>
                </div>
                {
                    data1.map((a,index)=>{
                        return(
                            <div className="row my-1 " key={index}>
                     <div className="col-2 ">{a.code}</div>
                     <div className="col-2 ">{a.prod}</div>
                     <div className="col-2 ">{a.category}</div>
                     <div className="col-2 ">{a.price}</div>
                     <div className="col-2 ">{a.instock}</div>
                     <div className="col-2 ">
                        <button className="btn btn-secondary btn-sm " onClick={()=>this.addtocard(a.code,a.prod,a.category,a.price,a.instock,index)}>add to bill</button>
                     </div>
                  </div> 
                        )
                    })
                }
                </div>:''}
            </div>
        )
    }
}
export default  Maincomponent