import React,{ Component } from 'react'; 

//functional Component 
// const SearchBar= () => {
//   return <input/> ;
//  }

//Class based component 
class SearchBar  extends  Component {
    constructor (props){ //called all the time when creating an instant of this class
        super(props);
        this.state = {term: ''}; // eveywhere else to manipulate state use this.setstate
    }
    render () { //ES6 Func
     return (
     <div>
     <input onChange={event=>this.setState({term: event.target.value})}/>
     value of input : {this.state.term}
    </div>)
    }
}

 export default SearchBar;