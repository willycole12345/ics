import { bell, drop, logo, vector } from '../images';

function Header() {
    return (
        <header className="main-header visible-lg"> 
        <div className="container">
        <div className="main-header__inner flex flex--fill flex--middle">
            <a className="main-header__logo" ></a>
            
            <nav className="nav nav--header m-r-auto">
                <ul className="nav__menu">
                    <li className="nav__item headlink">
                        <a><span>Courses</span>
                        <i className="nav_left_icon">
                            <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.25 1.625L4.5 5.375L0.75 1.625" stroke="black" stroke-width="2"/>
                            </svg>
                        </i></a>
                    </li>
                    <li className="nav__item headlink">
                        <a><span>Programs</span>
                        <i className="nav_left_icon">
                            <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.25 1.625L4.5 5.375L0.75 1.625" stroke="black" stroke-width="2"/>
                            </svg>
                        </i></a>
                    </li>
                    <li className="nav__item headlink">
                        <a><span>Learning Pathway</span>
                                <i className="nav_left_icon">
                                    <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.25 1.625L4.5 5.375L0.75 1.625" stroke="black" stroke-width="2"/>
                                </svg>
                            </i></a>
                    </li>
                    <li className="nav__item headlink">
                        <a>
                            <span>Partnerships</span>
                            <i className="nav_left_icon"><svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.25 1.625L4.5 5.375L0.75 1.625" stroke="black" stroke-width="2"/>
                            </svg>
                            </i>
                        </a>
                    </li>
                </ul>
            </nav>
            <nav className="nav nav--header m-l-lg">
                <ul className="nav__menu">
                    <li className="nav__item nav__button"><a><i className="icon nav__icon"><svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 17L13.8917 13.1333M16.1111 8.11111C16.1111 12.0385 12.7284 15.2222 8.55557 15.2222C4.38274 15.2222 1 12.0385 1 8.11111C1 4.18375 4.38274 1 8.55557 1C12.7284 1 16.1111 4.18375 16.1111 8.11111Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                   </svg>
                    </i></a></li>
                    <li className="nav__item_btt nav__button_white nav__button_white--brand"><a><span>Log In <i className="icon icon-arrow-right nav__icon"></i></span></a></li>
                    <li className="nav__item_btt nav__button nav__button--brand"><a  className=""><span>Sign Up</span></a></li>
                </ul>
            </nav>
        </div>
    </div>
   
   <div className='header-mobile hidden-lg'>
          <div className="container">
                      <div className="wrap">
                          <div className="row">
                              <div className="header-mobile__col col-xs-6">
                                  <h1 className="m-t-0 m-b-0">
                                      <a className="header-mobile__logo" href="">
                                          <img  alt="InfoMetriQ"/>
                                      </a>
                                  </h1>
                              </div>
                              <div className="header-mobile__col col-xs-6 text-right">
                                  <ul className="nav__menu">
                                      
                                                  <li className="nav__item">
                                                      <a  className="header-mobile__menu-button text-bold">Login</a>
                                                  </li>
                                                  <li className="nav__item">
                                                      <a role="button" className="header-mobile__menu-button menu-btn"><i className="icon icon-menu"></i></a>
                                                  </li>
                                                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
   </div>
   </header>
    );
}

export default Header;
