import React,{Component} from "react";
import Leftpanal from "./leftpanal";
import queryString from 'query-string'
class Emps extends Component{
    handleOptionChange=(option)=>{
        let {location}  = this.props.match.params;
        option.page = '';
        if(location){
            this.callURL(`/emps/${location}`,option)
        }
        else{
            this.callURL(`/emps`,option)
        }
    }
    callURL =(url,option)=>{
        
        let searchString=this.makeSearchString(option);
        this.props.history.push({
            pathname:url,
            search:searchString
        })
    }
    makeSearchString = (option) => {
        // console.log(option)
        let {department,designation} = option;
        let searchStr = '';
        searchStr = this.addToQueryString(searchStr, 'designation', designation);
        searchStr = this.addToQueryString(searchStr, 'department', department);
        return searchStr; // Add this return statement
    }
    addToQueryString = (str, paramName, paramValue) => {
        return paramValue
            ? str
                ? `${str}&${paramName}=${paramValue}`
                : `${paramName}=${paramValue}`
            : str;
    }
    filterParams=(arr,quaryParams)=>{
        let {department,designation}=quaryParams;
       
        arr=this.fillterItem(arr,'department',department);
        arr=this.fillterItem(arr,'designation',designation);
        return arr;
    }
    fillterItem = (arr, name, values) => {
        if (!values) return arr;
        let valuesArr = values.split(',');
        let arr1 = arr;
    
        if (name === 'price') {
            if (valuesArr.includes('moreThen1000')) {
                arr1 = arr1.filter((a) => a.price > 10000);
            }
            if (valuesArr.includes('lessThen1000')) {
                arr1 = arr1.filter((a) => a.price < 10000);
            }
        } else {
            // Handle other filters like RAM and ROM here
            arr1 = arr1.filter((a1) => valuesArr.find((val) => val === a1[name]));
        }
    
    
        return arr1;
    };
    handlePage = (page) => {
        const { location } = this.props.match.params;
        const queryParams = queryString.parse(this.props.location.search);
      
        // Update the 'page' parameter in the query parameters
        queryParams.page = page;
      
        // Build the URL with the updated query parameters
        const url = location ? `/emps/${location}` : '/emps';
        const searchString = queryString.stringify(queryParams);
        const newUrl = `${url}?${searchString}`;
      
        // Navigate to the new URL
        this.props.history.push(newUrl);
      }
      
    render(){
        let {employes}=this.props
        let queryParams=queryString.parse(this.props.location.search);
        let {location}  = this.props.match.params;
        let allemployes1=location?employes.filter((a)=>a.location==location):employes;
        allemployes1=this.filterParams(allemployes1,queryParams)
       let pageNumber =queryParams.page?queryParams.page:1;
       let  size=2;
       console.log(pageNumber)
       let  startIndex=(pageNumber-1)*size;
       let endIndex=allemployes1.length>(startIndex+size-1)?startIndex+size-1:allemployes1.length-1;
     let   allemployes11=allemployes1.filter((a,index)=>{
       return index>=startIndex&&index<=endIndex
       })
        return(
            <div className="row">
                <div className="col-3 ">
                    <Leftpanal allemployes={employes} options={queryParams} handleOptionChange={this.handleOptionChange}/>
                </div>
                <div className="col-9 ">
                    <div className="row">
                        <h4>your have chosen</h4>
                        <p>location  {location?location:': All'}</p>
                        <p>department {queryParams.department?queryParams.department:': All'}</p>
                        <p>designation{queryParams.designation?queryParams.designation:': All'}</p>
                    </div>
                    <div className="row">the number of employe matches {allemployes1.length}</div>
                    <div className="row">
                        {
                            allemployes11.map((a,indedex)=>{
                                return(
                                <div className="col-6 border">
                                    <h4>{a.name}</h4>
                                    <span>{a.email}</span><br/>
                                    <span>{a.mobile}</span><br/>
                                    <span>{a.location}</span><br/>
                                    <span>{a.department}</span><br/>
                                    <span>{a.designation}</span><br/>
                                    <span>{a.salary}</span><br/>
                                </div>
                                )
                            })
                        }

                    </div>
                    <div className="row">
  <div className="col-1">
    {pageNumber > 1 ? (
      <button onClick={() => this.handlePage(pageNumber - 1)} className="btn btn-primary ">Previous</button>
    ) : null}
  </div>
  <div className="col-10"></div>
  <div className="col-1">
    {pageNumber < Math.ceil(allemployes1.length / size) ? (
      <button onClick={() => this.handlePage(Number(pageNumber) + 1)} className="btn btn-primary ">Next</button>
    ) : null}
  </div>
</div>


                </div>
            </div>
        )
    }
}
export default  Emps