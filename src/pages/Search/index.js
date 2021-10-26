import React, { useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

import githubLogo from '../../githubLogo.svg';
import { MainDiv } from './styled';
import axios from '../../service/axios';
import * as actions from '../../store/user/actions';

export default function Home() {
    const history = useHistory();
    const dispatch = useDispatch();

    const [user, setUser] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const handleUserSearch = async (e) => {
        e.preventDefault();
        setErrorMsg('');
        if (!user) {
            setErrorMsg('Campo obrigatório');
            return;
        }
        try {
            const { data } = await axios.get(user);
            dispatch(actions.setUser(data));

            history.push('/home');
        } catch (err) {
            setErrorMsg('Usuário inválido');
        }
    };

    return (
        <MainDiv>
            <div className="search-container">
                <img src={githubLogo} />
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Usuário"
                        onChange={(e) => {
                            setUser(e.target.value);
                            setErrorMsg('');
                        }}
                    />
                    <span>{errorMsg}</span>
                    <button
                        type="submit"
                        onClick={(e) => {
                            handleUserSearch(e);
                        }}
                    >
                        ENTRAR
                        <AiOutlineArrowRight />
                    </button>
                </div>
            </div>
        </MainDiv>
    );
}
