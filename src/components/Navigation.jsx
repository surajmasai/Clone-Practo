import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Flex, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import "./Navigation.css";
import { Link } from 'react-router-dom'

export const Navigation = () => {
    return <div className="navbar-area">
        <nav className="nav-container">
            <div className="div-nav-left">
                <Link to="/"><img src={process.env.PUBLIC_URL + '/images/logo.svg'} alt="practo-logo" className='nav-logo' /></Link>
            </div>
            <div className="div-nav-middle">
                <div className="div-nav-middle-item">
                    <div>Find Doctors</div>
                    <div>Book an appointment</div>
                </div>

                <div className="div-nav-middle-item">
                    <div>Video Consult</div>
                    <div>Consult top doctors</div>
                </div>
                <Link to="/medicines">
                    <div className="div-nav-middle-item">
                        <div>Medicines</div>
                        <div>Practo Pharmacy</div>
                    </div>
                </Link>
                <Link to="/doctors">
                    <div className="div-nav-middle-item">
                        <div>Lab Tests</div>
                        <div>Book tests & checkup</div>
                    </div>
                </Link>
                <div className="div-nav-middle-item">
                    <div>Surgeries</div>
                    <div>Expert surgical care</div>
                </div>
            </div>
            <div className="div-nav-right">
                <Menu>
                    <MenuButton className="nav-dropdown">
                        For Providers {<ChevronDownIcon />}
                    </MenuButton>
                    <MenuList>
                        <MenuItem className="nav-dropdown-item">
                            Practo Prime
                        </MenuItem>
                        <MenuItem className="nav-dropdown-item">
                            Software for providers
                        </MenuItem>
                        <MenuItem className="nav-dropdown-item">
                            List your practice for Free
                        </MenuItem>
                        <MenuItem className="nav-dropdown-item">
                            Corporate wellness
                        </MenuItem>
                    </MenuList>
                </Menu>
                <Menu>
                    <MenuButton className="nav-dropdown">
                        Security & help {<ChevronDownIcon />}
                    </MenuButton>
                    <MenuList>
                        <MenuItem className="nav-dropdown-item">
                            Data security
                        </MenuItem>
                        <MenuItem className="nav-dropdown-item">
                            Help
                        </MenuItem>
                    </MenuList>
                </Menu>
                <Link to="/Auth">
                    <button className="btn-login">
                        Login / Signup
                    </button>
                </Link>
            </div>
        </nav>
    </div>
}