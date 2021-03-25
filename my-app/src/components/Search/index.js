import React from 'react'
import './Search.css'

function Search(){
    return(
        <div class="input-group">
            <input type="text" class="form-control" placeholder="Search Employee Directory"></input>
            <button class="btn btn-primary">Search</button>
        </div>
    )
}


export default Search
