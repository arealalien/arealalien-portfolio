import React from "react";
import { NavLink } from "react-router-dom";

const ScrollToTopNavLink = ({ to, children, ...props }) => {
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <NavLink to={to} {...props} onClick={handleClick}>
            {children}
        </NavLink>
    );
};

export default ScrollToTopNavLink;