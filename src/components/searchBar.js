import React,{ Component } from 'react'; 

//functional Component 
// const SearchBar= () => {
//   return <input/> ;
//  }

//Class based component 
class SearchBar  extends  Component {
    render () { //ES6 Func
     return <input onChange={event=>console.log(event.target.value)}/>;// gets the value of the event  }/> ;
    }
}

 export default SearchBar;