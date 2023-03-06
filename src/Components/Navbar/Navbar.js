import React, { useEffect, useState } from 'react'
import classes from './Navbar.module.css';
import youtubeLogo from '../../Assets/youtubeLogo.png';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import MainPage from '../MainPage/MainPage';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
// import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
const Navbar = () => {
  const [searchInput,setSearchInput]= useState('');
  const [prop,setProp]=useState(false);
  const navigate = useNavigate();
  const clickHandler =(event) =>{
    event.preventDefault();
    setProp(true);
    navigate(`searchPage/${searchInput}`)
    setSearchInput('');
  };
  return (
    <div className={classes.navbar__container}>
        <div><Link to='/'><img src={youtubeLogo} alt="youtube-logo" /></Link></div>
        <div className={classes.navbar__search}>
            <input type="text" placeholder='Enter your search query' value={searchInput} onChange={(event)=>{setSearchInput(event.target.value)}} />
            <div className={classes.navbar__icon} onClick={clickHandler} ><SearchRoundedIcon /></div>
        </div>
        {prop && <MainPage params={searchInput}/> && setProp(false)}
    </div>
  )
}

export default Navbar
