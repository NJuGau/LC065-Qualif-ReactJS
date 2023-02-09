import { useEffect, useState } from "react"
import logo from './logo.svg';
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Favourite from './pages/Favourite';
import {
    createBrowserRouter,
    Route,
    RouterProvider,
    Routes,
  } from "react-router-dom";
import { THEME, ThemeContext } from './lib/Theme.js';
import Navbar from "./components/navbar/Navbar";


export default function App(){

    const [theme, setTheme] = useState(THEME.day)
    const handleTheme = () =>{
        if(theme === THEME.day) setTheme(THEME.night)
        else setTheme(THEME.day)
    }

    const client = new ApolloClient({
        uri: 'https://tmdb.apps.quintero.io/' ,
        cache: new InMemoryCache()
    })

    return (
        <ApolloProvider client={client}>
        
           <ThemeContext.Provider value = {theme}>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/film/:id" element={<Detail />}/>
                <Route path="/favourite" element={<Favourite />}/>
            </Routes>

           </ThemeContext.Provider>
    </ApolloProvider>
    )
}