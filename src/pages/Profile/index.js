import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { HiArrowLeft } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import ProfileContainer from '../../components/ProfileContainer';
import Navbar from '../../components/Nav';
import MainHeader from '../../components/MainHeader';
import axios from '../../service/axios';
import * as actions from '../../store/user/actions';

export default function Profile({ match }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const login = match.params.profile;
    const [profile, setProfile] = useState({});

    // profile é o perfil que esta sendo exibido, adquirido pela url
    // user é o usuário que esta acessando os perfis, adquirido pelo state

    useEffect(() => {
        async function getUser() {
            const { data } = await axios.get(login);

            setProfile(data);
        }

        getUser();
    }, [login]);

    return (
        <>
            <MainHeader user={profile}>
                <HiArrowLeft size={22} onClick={() => history.goBack()} />

                <h3
                    style={{
                        marginLeft: '50px'
                    }}
                >
                    #{profile.login}
                </h3>

                <Link
                    to="/home"
                    onClick={() => dispatch(actions.setUser(profile))}
                >
                    Salvar <FiLogIn size={22} color="#5CBC29" />
                </Link>
            </MainHeader>
            <ProfileContainer user={profile} />
            <Navbar selected={'followers'} />
        </>
    );
}
