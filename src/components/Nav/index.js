import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BiHomeAlt } from 'react-icons/bi';
import { FiGithub } from 'react-icons/fi';
import { HiOutlineUsers } from 'react-icons/hi';

import { Nav, BottomNav } from './styled';

export default function Navbar({ selected }) {
    const user = useSelector((state) => state.user);

    return (
        <Nav>
            <Link to="/home">
                <BottomNav className="home" selected={selected}>
                    <BiHomeAlt size={30} />
                    Home
                </BottomNav>
            </Link>
            <Link to={`/${user.login}/repos`}>
                <BottomNav className="repos" selected={selected}>
                    <FiGithub size={30} />
                    Repos
                </BottomNav>
            </Link>
            <Link to={`/${user.login}/followers`}>
                <BottomNav className="followers" selected={selected}>
                    <HiOutlineUsers size={30} />
                    Seguidores
                </BottomNav>
            </Link>
            <Link to={`/${user.login}/following`}>
                <BottomNav className="following" selected={selected}>
                    <HiOutlineUsers size={30} />
                    Seguindo
                </BottomNav>
            </Link>
        </Nav>
    );
}
