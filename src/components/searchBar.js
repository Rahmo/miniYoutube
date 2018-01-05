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
     onChange={event => this.onInputChange(event.target.value)}
     />
    </div>)
    }

    onInputChange(term){ //function to handle change 
    this.setState({term});
    this.props.onSearchTermChange(term);//callback to parent 
    
}
}
 export default SearchBar;