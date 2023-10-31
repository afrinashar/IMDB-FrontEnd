import { useState,useEffect } from "react";
import axios from "axios";

export default function MoviesList(){
const [movies,setMovies]=useState([]);
useEffect(()=>{
    axios.get("http://localhost:3000/api/movies")
    .then((response)=> setMovies(response.data))
    .catch((error)=>console.log(error))
},[]);
return(
    <>
 
        movies.map(movie)=>({
<div key={movie._id}></div>

        })
    
    </>
)
};