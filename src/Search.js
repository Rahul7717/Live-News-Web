import React from 'react'
import { useGlobalContext } from './Context';
import './News.css'

const Search = () => {

  const {query , searchPost} = useGlobalContext();
    return ( 
    <>

<form>

    <h1 className='news_title'>News ~ ... <br />... Web ~ </h1><br />
    <p id='line'></p><p id='line'></p><br />
    <div className='box'>

        <input type="text" placeholder='Search Here'  
         value={query}
         className='Searchbar'
         onChange={(e)=>searchPost(e.target.value)}

/>

    </div>

</form>

    </>
    
    )

}

export default Search;