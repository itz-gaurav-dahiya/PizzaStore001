import React,{Component} from "react";

function generateYearsArray() {
    const currentYear = new Date().getFullYear();
    const startYear = 1900;
    const years = [];
  
    for (let year = startYear; year <= currentYear; year++) {
      years.push(year);
    }
  
    return years;
  }
  
  // Function to generate an array of month names
  function generateMonthNamesArray() {
    return [
      "January", "February", "March", "April",
      "May", "June", "July", "August",
      "September", "October", "November", "December"
    ];
  }
  
  function generateDaysArray(selectedYear, selectedMonth) {
    const daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();
    return Array.from({ length: daysInMonth }, (_, index) => index + 1);
  }
  
class Addstock extends Component{
    state={
        data:{
            code:'',stock:'',
            year: '',
            month: '',
            day:'',
        }
    }
    handleChange = (e) => {
        const { currentTarget: input } = e;
        const { name, type, value, checked } = input;
    
        this.setState((prevState) => ({
          data: {
            ...prevState.data,
            [name]: type === "checkbox" ? checked : value
          }
        }));
      };
      handleSubmit = () => {
          let {code,stock,year,month,day}=this.state.data;
          if(code==''){
            alert('select code')
          }else if(stock==''){
            alert('select stock')
          }
          else if(year==''){
            alert('select year')
          }
          else if(month==''){
            alert('select month')
          }
          else if(day==''){
            alert('select day')
          }
          else{
              this.props.addQuantity(this.state.data);
          }
       
      }
      
      
    //   validAll = () => {
    //     let { code, stock, year, month, day } = this.state;
    //     const errors = [];
      
    //     if (code === '') {
    //       errors.push('Select code');
    //     }
    //     if (stock === '') {
    //       errors.push('Enter stock');
    //     }
    //     if (year === '') {
    //       errors.push('Select year');
    //     }
    //     if (month === '') {
    //       errors.push('Select month');
    //     }
    //     if (day === '') {
    //       errors.push('Select day');
    //     }
      
    //     if (errors.length > 0) {
    //       alert(errors.join('\n'));
    //       return false; // Validation failed
    //     }
      
    //     return true; // Validation passed
    //   }
      
      
    render(){
        let {code,stock, year, month, day}=this.state.data
        let {Products}=this.props
        let dropdown=[...new Set(Products.map((product) => product.code))];
        // console.log(dropdown);
        let monthNames = generateMonthNamesArray();
        return(
            <div className="col-12 ">
                
                <div className="form-group">
                <label className="form-label fs-3 ">Select the product whose stocks have been received</label>
                <select className="form-select " onChange={this.handleChange} value={code} name='code'>
                <option value=''>select code</option>
                {
                 dropdown.map((a,index)=>{
                    return(
                        <option value={a} key={index}>{a}</option>
                    )
                 })
                }
                </select>
                </div>
                <div className="form-group">
                    <label className="form-label fs-5 ">Stocks Received</label>
                    <input
                        type="number"
                        name="stock"
                        className="form-control "
                        value={stock}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="row">
                <div className="col-4 ">
                <div className="form-group">
          <label className="form-label fs-5">Select Year</label>
          <select
            className="form-select"
            onChange={this.handleChange}
            value={year}
            name="year"
          >
          <option value=''>select year</option>
            {generateYearsArray().map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
</div>
<div className="col-4">
        <div className="form-group">
          <label className="form-label fs-5">Select Month</label>
          <select
            className="form-select"
            onChange={this.handleChange}
            value={month}
            name="month"
          >
          <option value=''>select month</option>
            {monthNames.map((monthName, index) => (
              <option key={index} value={index + 1}>
                {monthName}
              </option>
            ))}
          </select>
        </div>
</div>
<div className="col-4 ">
        <div className="form-group">
          <label className="form-label fs-5">Select Day</label>
          <select
            className="form-select"
            onChange={this.handleChange}
            value={day}
            name="day"
          >
          <option value=''>select Date</option>
            {generateDaysArray(year, month).map((day, index) => (
              <option key={index} value={day}>
                {day}
              </option>
            ))}
          </select>
        </div>
        </div>
</div>
                <div>
                    <button className="btn btn-primary mx-2 " onClick={()=>this.handleSubmit()}>submit</button>
                    <button className="btn btn-primary mx-2 " onClick={()=>this.props.showHomePage()}>go to back</button>
                </div>
            </div>
        )
    }
}
export default Addstock 