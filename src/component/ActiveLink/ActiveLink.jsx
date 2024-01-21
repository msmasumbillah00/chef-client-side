import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => isActive ? "aclink" : ""}
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;