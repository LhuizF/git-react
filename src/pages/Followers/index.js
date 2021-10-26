import React, { useEffect, useState } from 'react';

import Navbar from '../../components/Nav';
import List from '../../components/List';
import Header from '../../components/Header';
import axios from '../../service/axios';

export default function Followers({ match }) {
    const login = match.params.profile;
    const [followers, setFollowers] = useState([]);

    useEffect(() => {
        async function getFollowers() {
            const { data } = await axios.get(login + '/followers');
            setFollowers(data);
        }
        // se na tiver login não faz a requisição
        if (!login) return;
        getFollowers();
    }, [login]);

    return (
        <>
            <Header data={followers} title={'Seguidores'} />
            <List data={followers} />
            <Navbar selected={'followers'} />
        </>
    );
}
