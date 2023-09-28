import React from 'react'

const reducer = (state , action) => {

switch(action.type){
 
  case "LOADING":
    return {
      ...state,
      isLoading:true,
    };
   
    case  "GET_POST": 
    return{
        ...state,
        isLoading:false,
        hits:action.payload.hits,
        nbpages:action.payload.nbPages,
    };

    case "REMOVE_POST":
      return {
        ...state,
        hits:state.hits.filter(
          (curElem) => curElem.objectID != action.payload
        ),
      };

      case "SEARCH_QUERY":
        return {
          ...state,
          query:action.payload,
        };

        case 'NEXT PAGE':
          let page1=state.page + 1;

          if(page1==50){
            page1=0;
          }
          
          return {
             ...state,
             page:page1,
          }

          case 'PREV PAGE':
            let page=state.page-1;
            if (page<0) {
              page=0;
            }
    
          return {
             ...state,
             page:page,
          }

}

return state;
  
return (
    
    <>
    
    
    </>
  )
}

export default reducer
