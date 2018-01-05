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
     <div className="search-bar">
     <input 
     value={this.state.term}
     onChange={event=>this.setState({term: event.target.value})}
     />
    </div>)
    }
}

 export default SearchBar;