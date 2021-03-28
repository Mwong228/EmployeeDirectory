import { useEffect, useState } from 'react'
import './Content.css'
import API from '../../utils/API'
import Search from '../Search'

function Content() {
    const [user, setUser] = useState([])
    const [search, setSearch] = useState([])

    useEffect(function (){
        init()
    }, [])
    
    async function init(){
        const result = await API.getRandomEmployee()
        setUser(result.data.results)
        console.log(`[init] url fetch`, result.data.results)
    }

    function searchEmployee(){
        console.log('Searching for:', search)
    }

    function handleFormSubmit(event){
        event.preventDefault()
        searchEmployee()
    }

    function handleInputChange(event){
        setSearch(event.target.value)
    }



    return (
        <>
            <Search handleFormSubmit={handleFormSubmit} handleInputChange={handleInputChange}/>
        </>
    )

}


export default Content