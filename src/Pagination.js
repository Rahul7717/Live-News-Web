import React from 'react'
import { useGlobalContext } from './Context'
import './News.css'

const Pagination = () => {

  const {page,nbPages,Prev,Next} = useGlobalContext();
  
  return (
  
  <>
    <div className='pagination'>
  
    <button className='next_btn' onClick={()=>Prev()}>Prev</button>
      
      <p className='num_page'>
        {page + 1} of {nbPages}

      </p>
  
    <button className='next_btn' onClick={()=>Next()}>Next</button>
    </div>
  
  </>
  
  )
}

export default Pagination