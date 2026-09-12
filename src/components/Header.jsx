import React from "react";
import GsapMagnetic from "./animations/GsapMagnetic";

const Header = ({ setIsHidden }) => {
  return (
    <header className='header js-header' role='banner'>
      <div className='header_logo js-header_logo'>
        <GsapMagnetic>
          <a
            className='link-logo'
            aria-label='Navigate to home page'
            href='/'
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                window.location.href = '/';
              }
            }}
          >
            <svg
              width='64'
              height='64'
              viewBox='0 0 64 64'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='svg'
              aria-hidden='true'
              focusable='false'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M53.4123 56.0001C59.9131 50.12 64 41.602 64 32.1258C64 14.3832 49.6731 0 32 0C14.3269 0 0 14.3832 0 32.1258C0 41.2108 3.75642 49.4151 9.79504 55.2585L21.5957 13.0511L27.5053 25.8028H31.5H35.4947L41.4043 13.0511L53.4123 56.0001Z'
                fill='#B7AB98'
              ></path>
              <ellipse
                cx='26.1333'
                cy='37.4132'
                rx='2.13333'
                ry='2.14172'
                fill='#B7AB98'
              ></ellipse>
              <ellipse
                cx='37.1333'
                cy='37.4132'
                rx='2.13333'
                ry='2.14172'
                fill='#B7AB98'
              ></ellipse>
            </svg>
          </a>
        </GsapMagnetic>
      </div>
      <nav className='header_menu' aria-label='Main navigation'>
        <ul
          className='header_menu_list ul__reset'
          role='menubar'
          onMouseEnter={() => {
            setIsHidden(true);
          }}
          onMouseLeave={() => {
            setIsHidden(false);
          }}
        >
          <li className='header_menu_item js-cursor-contract is-active' role='none'>
            <a
              href='#about'
              className='desc text-uppercase has-tag-handle'
              role='menuitem'
              aria-label='Navigate to about section'
            >
              <span className='header_menu_item_inner'>
                <span className='header_menu_item_link header_menu_item_link__deep'>
                  Pengantar
                </span>
                <span className='header_menu_item_link header_menu_item_link__active'>
                  Pengantar
                </span>
              </span>
            </a>
          </li>
          <li className='header_menu_item js-cursor-contract' role='none'>
            <a
              href='#work'
              className='desc text-uppercase has-tag-handle'
              role='menuitem'
              aria-label='Navigate to work section'
            >
              <span className='header_menu_item_inner'>
                <span className='header_menu_item_link header_menu_item_link__deep'>
                  Materi
                </span>
                <span className='header_menu_item_link header_menu_item_link__active'>
                  Materi
                </span>
              </span>
            </a>
          </li>
          <li className='header_menu_item js-cursor-contract' role='none'>
            <a
              href='#contact'
              className='desc text-uppercase has-tag-handle'
              role='menuitem'
              aria-label='Navigate to contact section'
            >
              <span className='header_menu_item_inner'>
                <span className='header_menu_item_link header_menu_item_link__deep'>
                  Kontak
                </span>
                <span className='header_menu_item_link header_menu_item_link__active'>
                  Kontak
                </span>
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
