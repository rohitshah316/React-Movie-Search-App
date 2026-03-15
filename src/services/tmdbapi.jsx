import React from 'react'

const BASE_URL=import.meta.env.VITE_BASE_URL;
const API_KEY=import.meta.env.VITE_API_KEY;



export const getMovies=async()=>{
    try{
        const response =await fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);

        const json=await response.json();
        return json.results;
    }catch(err){
        console.log("Error fetching movies:",err);
        return [];
    }
}

export const getPopularMovies=async()=>{
    try{
        const res=await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
        const json=await res.json();
        return json.results;
    }catch(err){
        console.log(err.message);
        return [];
    }
}

export const searchMovies=async(query)=>{
    try{
        const res=await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
        const json=await res.json();
        return json.results;
    }catch(err){
        console.log(err.message);
        return [];
    }
}

export const getMovieById=async(id)=>{
    const res=await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);

    const data=await res.json();
    return data;
}

