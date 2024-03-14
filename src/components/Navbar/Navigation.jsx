import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import "./Navigation.css";
import { Link, useNavigate } from 'react-router-dom'

export const Navigation = () => {
    const navigate = useNavigate()
    return <div className="navbar-area">
        <nav className="nav-container">
            <div className="div-nav-left">
                <Link to="/"><img src={'../../../public/images/DoctorPe1.jpeg'} alt="DoctorPe" className='nav-logo' /></Link>
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
            <div className="div-nav-right flex">
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
                <div className="flex">
                    <button onClick={() => navigate("/signin")} className="btn-login mr-4 hover:underline hover:border hover:border-blue-600">
                        Login
                    </button>
                    <button onClick={() => navigate("/signup")} className="btn-login hover:underline hover:border hover:border-blue-600">
                        Signup
                    </button>
                </div>
            </div>
        </nav>
    </div>
}