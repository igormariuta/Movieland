import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { routes } from '../../routes';
import cn from 'classnames';
import s from './Header.module.scss';

import logo from '../../assets/icons/logo.svg';
// import { PersonFill } from 'react-bootstrap-icons';
import Search from './Search';

const Header = () => {

  useEffect(() => {
    return () => {
      // console.log('init header');
    }
  }, [])

  return (
    
    <header className={cn("navbar navbar-expand-sm navbar-dark bg-dark sticky-top", s.navbar)}>
      <div className="container">

        <nav className={cn('navbar-nav', s.navbarNav)}>
          <Link className={cn(s.logoContainer, 'mr-4')} to="/">
            <img className={s.logo} src={logo} alt="Logo"/>
          </Link>
          {
            routes.map(({title, path, exact, showInNav}) => 
              showInNav ? (
                <li key={title} className="nav-item mr-1">
                  <NavLink to={path} exact={exact} className="nav-link">{title}</NavLink>
                </li>
              ) : null
            )
          }
        </nav>
       
        <div className="userMenu navbar-nav align-items-center justify-content-end col-12 col-sm-7 p-0">
          
          <Search />

          {/* <NavLink to='/my-list' exact={true} className="nav-link d-flex align-items-center">
            <PersonFill className='mr-2' size={19}/>
            <span>My List</span>
          </NavLink> */}
       
        </div>

      </div>
    </header>

  );

};

export default Header;