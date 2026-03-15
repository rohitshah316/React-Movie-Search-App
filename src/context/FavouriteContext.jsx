import { createContext,useState,useContext,useEffect } from "react";
import { FaV } from "react-icons/fa6";


const FavouriteContext= createContext();

export const useFavouriteContext=()=>useContext(FavouriteContext);

export const FavouriteProvider=({children})=>{

    const [favourites,setFavourites]=useState([]);


    useEffect(()=>{
        const storedFavs=localStorage.getItem("favourites");

        if(storedFavs) setFavourites(JSON.parse(storedFavs))

    },[]);

    useEffect(()=>{
        localStorage.setItem('favourites',JSON.stringify(favourites));
    },[favourites])


    const addToFavourite=(movie)=>{
        setFavourites(prev=>[...prev,movie])
    }

    const removeFavourites=(movieId)=>{
        setFavourites(prev=>prev.filter(movie=>movie.id!==movieId))
    }


    const isFavourite=(movieId)=>{
        return favourites.some(movie=>movie.id===movieId);
    }

    const value={
        favourites,addToFavourite,removeFavourites,isFavourite
    }
    return <FavouriteContext.Provider value={value}>
        {children}
    </FavouriteContext.Provider>
}