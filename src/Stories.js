import React, {useEffect, useState } from 'react'
import { useGlobalContext } from './Context';
import './News.css';

const Stories = () => {

    const {hits,isLoading,removePost} = useGlobalContext();

    if (isLoading){
        return(
            <>
            <br /><br />
            <div id='lo'>
            <h2 className='Loading'>Loading...</h2>
            </div>
            </>
        )
    }

return(

<>

<div className='master'>

<br />
<br />

{ hits.map((curPos)=>{

    const {title,author,num_comments,url,objectID}=curPos;

    return (

<div className='cards0'>

   <div className='cards' key={objectID}>

    <h2>{title}</h2>

    <p>Author Name : <b>{author}</b> | <span> Comments : <b>{num_comments}</b> </span></p>
   

  <div className="card-button">

    <a href={url} className='read' target='_blank'>Read More</a>

    <a href="#" className='read1' onClick={ () => removePost(objectID)}> 

    Remove 

    </a>

    </div> 
    </div>
    </div>

)

}) 
}

</div>
</>

);
    
}

export default Stories;