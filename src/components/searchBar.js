import React,{ Component } from 'react'; 

//functional Component 
// const SearchBar= () => {
//   return <input/> ;
//  }

//Class based component 
class SearchBar  extends  Component {
    render () { //ES6 Func
     return <input onChange={this.onInputChange}/> ;
    }

    //event Handler always called with an event obj
    onInputChange(e) {
        console.log(e.target.value);
    }
}

 export default SearchBar;