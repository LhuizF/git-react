import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';

import Navbar from '../../components/Nav';
import ProfileContainer from '../../components/ProfileContainer';
import MainHeader from '../../components/MainHeader';

export default function Home() {
    const user = useSelector((state) => state.user);

    return (
        <>
            <MainHeader user={user}>
                <h3>#{user.login}</h3>
                <Link to="/">
                    Sair <FiLogOut size={22} color="#d03434" />
                </Link>
            </MainHeader>
            <ProfileContainer user={user} />
            <Navbar selected={'home'} />
        </>
    );
}
