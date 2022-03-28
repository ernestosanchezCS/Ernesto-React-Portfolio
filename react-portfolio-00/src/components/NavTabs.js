import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
    return (
        <ul className="nav nav-tabs  bg-dark bg-gradient'">
            <li className='nav-item'>
                <a
                    href='#home'
                    onClick={() => handlePageChange('Home')}
                    className={
                        currentPage === 'Home' ? 'nav-link active' : 'nav-link'
                    }
                >
                    About Me
                </a>
            </li>
            <li className='nav-item'>
                <a
                    href='#about'
                    onClick={() => handlePageChange('About')}
                    className={
                        currentPage === 'About' ? 'nav-link active' : 'nav-link'
                    }
                >
                    Portfolio
                </a>
            </li>
            <li className='nav-item'>
                <a
                    href='#blog'
                    onClick={() => handlePageChange('Blog')}
                    className={
                        currentPage === 'Blog' ? 'nav-link active' : 'nav-link'
                    }
                >
                    Resumè
                </a>
            </li>
            <li className='nav-item'>
                <a
                    href='#contact'
                    onClick={() => handlePageChange('Contact')}
                    className={
                        currentPage === 'Contact'
                            ? 'nav-link active'
                            : 'nav-link'
                    }
                >
                    Contact Me!
                </a>
            </li>
        </ul>
    );
}

export default NavTabs;
