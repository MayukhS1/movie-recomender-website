import React, { useState } from 'react';
import './SearchBar.css';


const SearchBar = ({movies, showResult}) => {
  
    const [ddState, setDdState] = useState(3);
    const [searchState, setSearchState] = useState("");
    const [disaplay, setDisplay] = useState(null);
    const [options, setOptions] = useState([]);
    
    
    const handleChannge = (event) =>{
        let searchVal = event.target.value;
        let suggestion = []

        if(searchVal.length > 1){
            suggestion = movies.sort().filter((e) => e.toLowerCase().includes(searchVal.toLowerCase()));
            setDisplay(suggestion.length>0 ?true:false);
        }
        setOptions(suggestion);
        setSearchState(searchVal);
    }

    const suggestedText = (value) => {
        console.log(value);
        setSearchState(value);
        setOptions([]);
        document.getElementById("search-input-box").value = value;

      };

    const GetOptions = () =>{
        if(options.length===0 && searchState!=="" && !disaplay){
            return(
                <div>
                    <p>No Such Movie Exist in the Database</p>
                </div>
            )
        }

        return (
            <ul>
              {options.map((item, index) => {
                return (
                  <div key={index} >
                    <li onClick={() => suggestedText(item)}>{item}</li>
                    {index !== options.length - 1 && <hr/>}
                  </div>
                );
              })}
            </ul>
          );
    }

    return (
        <>
            <div className="search-box-container">
                <div className="search-box">
                    <input type="text" placeholder="Movie" id="search-input-box" className="search-input" onChange={handleChannge}></input>
                    
                    <select className="dd-menu"  onChange={(event)=>{
                        const selectedNumber = event.target.value;
                        setDdState(selectedNumber);
                    }}>
                        <option value={3} className="dd-element">3</option>
                        <option value={5} className="dd-element">5</option>
                        <option value={10} className="dd-element">10</option>
                    </select>
                    
                    <button className="search-btn" onClick={()=>{showResult(searchState, ddState)}} >
                        Search
                    </button>
                </div>
            </div>
            <div className="search-options">
                <GetOptions/>
            </div>
        </>
        
    );
}

export default SearchBar;