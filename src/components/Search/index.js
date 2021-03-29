import React from 'react'
import './Search.css'

function Search(props){
    return(
        <div class="input-group">
            <input onChange={props.handleInputChange} value={props.search} id="search" name="search" type="text" class="form-control" placeholder="Search Employee Directory"></input>
            <button type="submit" onClick={props.handleFormSubmit} class="btn btn-primary">Search</button>
        </div>
    )
}


export default Search
