import React from 'react';
import { useState, useEffect } from 'react';
import './navigation.css';
import TitleImage from './title-image.png';
function Navigation() {
    
    const toggle = ()=>{
        var element = document.body;
  element.classList.toggle("dark-mode");
  let y =  document.getElementsByClassName("nav-link");
  for(let x=0;x<y.length;x++)
  document.getElementsByClassName("nav-link")[x].classList.toggle("dark-mode");
    }
    
 

    return (

        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <div className="title-image col-2 p-2">
                    <a className="navbar-brand" href="#"><img src={TitleImage} alt="Title Image" /></a>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className='col-6 title-search'>
                    <form id='form'  className="d-flex border p-1 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16" style={{marginTop:"10px"}}>
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
                        <input className="form-control me-2" type="search" id='search' placeholder="Search Images here" aria-label="Search" style={{border:"none",outline:"none"}}/>                     
                       
                    </form>
                </div>

                <div className="collapse navbar-collapse col-4" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <div className='d-flex justify-content-around'>
                            <li className="nav-item">
                                <a className="nav-link"  href="#">explore</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">collection</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">community</a>
                            </li>
                        </div>
                        <div className='nav-item-right d-flex'>
                            <li className="nav-item">
                                <a className="nav-link">dark mode</a>
                            </li>
                            <label class="switch">
                            <input type="checkbox" onChange={toggle}/>
                            <span class="slider round"></span>
                            </label>
                        </div>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Navigation;
