import React, {Fragment, useState} from 'react';
import {HiSearch} from "react-icons/hi";
import '../styles/NavBarStyle.css';
import {NavLink, Route, Routes} from "react-router-dom";
import Movies from "./Movies";
import TvShows from "./TvShows";
import Pricing from "./Pricing";
import Trends from "./Trends";

function Navbar() {
    const [toggle, setToggle] = useState(true);
    return (
        <Fragment>
            <nav className={toggle ? "" : "navBarColor"}>
                <div className="nav-options">
                    <NavLink to={""} style={({isActive})=>{return{color: isActive ? "#fff" : "#EE9B00"}}}>
                        <h1 id={toggle ? '' : 'heading'}>REACT FLIX</h1>
                    </NavLink>
                    <NavLink to={""}style={({isActive})=>{return{color: isActive ? "#fff" : "#EE9B00"}}}>
                        <span id={toggle ? 'Movies' : 'MoviesLight'}>Movies</span>
                    </NavLink>
                    <NavLink to={"TvShows"} style={({isActive})=>{return{color: isActive ? "#fff" : "#EE9B00"}}}>
                        <span id={toggle ? 'Movies' : 'MoviesLight'}>Tv Shows</span>
                    </NavLink>
                    <NavLink to={"Trending"} style={({isActive})=>{return{color: isActive ? "#fff" : "#EE9B00"}}}>
                        <span id={toggle ? 'Movies' : 'MoviesLight'}>Trending</span>
                    </NavLink>
                    <NavLink to={"Pricing"} style={({isActive})=>{return{color: isActive ? "#fff" : "#EE9B00"}}}>
                        <span id={toggle ? 'Movies' : 'MoviesLight'}>Pricing</span>
                    </NavLink>
                </div>
                <div className={"input-group"}>
                    <input type="text" placeholder="Search your favorite ..."/>
                    <HiSearch fontSize={21} color={"green"} id={"search"}/>
                    <div id="Color-switcher" onClick={() => setToggle(!toggle)}>
                        <div id={toggle ? "Color-switcher-mover" : "Color-switcher-moved"}></div>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path={""} element={<Movies/>}/>
                <Route path={"TvShows"} element={<TvShows/>}/>
                <Route path={"Pricing"} element={<Pricing/>}/>
                <Route path={"Trending"} element={<Trends/>}/>
            </Routes>
        </Fragment>
    );
}

export default Navbar;