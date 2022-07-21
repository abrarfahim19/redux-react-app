import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div >
            <nav >
                <Link className='nav' to='/'>Home</Link>
                <Link className='nav' to='/counter'>Counter</Link>
                <Link className='nav' to='/posts'>Posts</Link>
                <Link className='nav' to='/crud'>CRUD</Link>
            </nav>
        </div>
    );
};

export default NavBar;