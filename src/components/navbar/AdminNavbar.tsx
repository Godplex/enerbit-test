import { CSSProperties, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context';

let activeStyle: CSSProperties = {
    borderBottom: "4px solid black"
};

export const AdminNavbar = () => {

    const { logoutUser } = useContext(AuthContext)

    return (
        <nav className="navbar navbar-expand-lg bg-white">
            <div className="container">
                <NavLink
                    to="/"
                    className="navbar-brand"
                >
                    <img src="https://enerbit.co/img/mainLogo.bea5a270.svg" alt='logo' style={{ width: 150 }} />
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
                        <li className="nav-item me-lg-3">
                            <NavLink
                                to="/"
                                className="nav-link"
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item d-grid">
                            <button
                                className="nav-link btn text-danger fw-bold text-center"
                                onClick={logoutUser}
                            >
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
