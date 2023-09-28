import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";


const AppContext = React.createContext();

let API="https://hn.algolia.com/api/v1/search?";
 
const initialState = {
    isLoading: true,
    query: "",
    nbPages: 50,
    page: 0,
    hits: [],
};
 

const AppProvider = ({children}) => {
   
    const [state, dispatch] = useReducer(reducer,initialState);

    async function Getnews (url) {

        dispatch({type:"LOADING"})
        try{
            let responce = await fetch(url);
            let data = await responce.json();
            console.log(data);

        dispatch({
            type:"GET_POST",
            payload:{
                hits:data.hits,
                nbPages:data.nbPages,
            },
        }); 

        } catch(error)
        {
            console.log(error);
        }
    };


    function removePost(Post_ID) {
        dispatch({ type: "REMOVE_POST" , payload: Post_ID });
    };

//search
    function searchPost (searchQuery) {
        dispatch({ type: "SEARCH_QUERY" , payload: searchQuery });
    };

// Pagination
    function Next(){
        dispatch({type:"NEXT PAGE",});
    };

    function Prev(){
        dispatch({type:"PREV PAGE",});
    };

    //Fetch API
    useEffect ( () => {
      Getnews(`${API}query=${state.query}&page=${state.page}`);
    }, [state.query,state.page] );

    return (
        <AppContext.Provider value={{ ...state ,  removePost , searchPost ,Next ,Prev}}>
            {children}
        </AppContext.Provider> 
    );
};

const useGlobalContext = () => {

    return useContext(AppContext);

}

export {AppContext,AppProvider,useGlobalContext};