import React,{Component} from "react";
class Leftpanal extends Component{
     state={
        department:'',designation:''
    }
    makeCheckboxes = (arr, values, name, label) => {
        return (
          <React.Fragment>
            <label className="form-check-label font-weight-bold">{label}</label>
            {arr.map((opt) => (
              <div className="form-group" key={opt}>
                <input
                  className="form-check-input"
                  value={opt}
                  type="checkbox"
                  name={name}
                  checked={values.includes(opt)} // Use Array.includes method
                  onChange={this.handleChange}
                />
                <label>{opt}</label>
              </div>
            ))}
          </React.Fragment>
        );
      };
      makeRadios = (arr, value, name, label) => {
        return (
          <React.Fragment>
            <label className='form-check-label font-weight-bold'>{label}</label>
            {arr.map((opt) => (
              <div className="form-check" key={opt}>
                <input
                  className="form-check-input"
                  value={opt}
                  type="radio"
                  name={name}
                  checked={opt === value}
                  onChange={this.handleChange}
                />
                <label className="form-check-label">{opt}</label>
              </div>
            ))}
          </React.Fragment>
        );
      };
      handleChange = (e) => {
        const { name, type, value, checked } = e.target;
        const options = { ...this.props.options };
    
        if (type === 'checkbox') {
          options[name] = this.updateCBs(options[name], checked, value);
        } else {
          options[name] = value;
        }
    // console.log(options)
        this.props.handleOptionChange(options);
      };
      updateCBs = (inpValue, checked, value) => {
        let inputArr = inpValue ? inpValue.split(',') : [];
        if (checked) inputArr.push(value);
        else {
          let index = inputArr.findIndex((ele) => ele === value);
          if (index >= 0) inputArr.splice(index, 1);
        }
        return inputArr.join(',');
      };
    render(){
        let {allemployes}=this.props;
        let {designation='',department=''}=this.props.options;
        
        let dep=allemployes.reduce((acc,cuur)=>{
            if(!acc.includes(cuur.department)){
            acc.push(cuur.department)
            }
            return acc
        },[]);
        let des=allemployes.reduce((acc,cuur)=>{
            if(!acc.includes(cuur.designation)){
            acc.push(cuur.designation)
            }
            return acc
        },[]);
        
         return(
            <div className="row"> 
        <div className="col-12">
          {this.makeCheckboxes(des, designation, 'designation', 'SELECT Designation')}
        </div>
        <div className="col-12">
          {this.makeRadios(dep, department, 'department', 'SELECT Department')}
        </div>
            </div>
         )
    }
}
export default Leftpanal