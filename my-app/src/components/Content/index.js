import { useEffect, useState } from 'react'
import './Content.css'
import API from '../../utils/API'
import Search from '../Search'

function Content() {
    const [user, setUser] = useState([])
    const [search, setSearch] = useState([])

    useEffect(function () {
        init()
    }, [])

    async function init() {
        const result = await API.getRandomEmployee()
        setUser(result.data.results)
        console.log(`[init] url fetch`, result.data.results)
    }

    function searchEmployee() {
        console.log('Searching for:', search)
        // const searchedUser = user.filter(filtered => search.toLowerCase().indexOf(filtered.name.first.toLowerCase())> -1 || search.toLowerCase().indexOf(filtered.name.last.toLowerCase())> -1)
        // console.log(searchedUser)
    }

    function handleFormSubmit(event) {
        event.preventDefault()
        searchEmployee()
    }

    function handleInputChange(event) {
        setSearch(event.target.value)
    }

    function sortByFirstName(){
        const sort = user.sort((a,b) => {
            if(a.name.first < b.name.first){
                return -1
            }
            else if(a.name.first > b.name.first){
                return 1
            }
            return 0
        })
        setUser([...sort])
    }

    function sortByLastName(){
        const sort = user.sort((a,b) => {
            if(a.name.last < b.name.last){
                return -1
            }
            else if(a.name.last > b.name.last){
                return 1
            }
            return 0
        })
        setUser([...sort])
    }

    function sortByEmail(){
        const sort = user.sort((a,b) => {
            if(a.email < b.email){
                return -1
            }
            else if(a.email > b.name.email){
                return 1
            }
            return 0
        })
        setUser([...sort])
    }





    return (
        <>
            <Search value={search} handleFormSubmit={handleFormSubmit} handleInputChange={handleInputChange} />
            <div class="table-responsive">
                <table class="table table-striped table-hover">
                    <thread>
                        <tr>
                            <th>Image</th>
                            <th onClick={sortByFirstName}>First Name</th>
                            <th onClick={sortByLastName}>Last Name</th>
                            <th>Phone</th>
                            <th onClick={sortByEmail}>Email</th>
                        </tr>
                    </thread>
                    <tbody>
                        {user.map(user =>
                        <tr>
                            <td><img src={user.picture.thumbnail} alt="pic"/></td>
                            <td>{user.name.first}</td>
                            <td>{user.name.last}</td>
                            <td>{user.phone}</td>
                            <td>{user.email}</td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    )

}


export default Content