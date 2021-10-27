import React, { useEffect, useState } from 'react';

import Navbar from '../../components/Nav';
import List from '../../components/List';
import Header from '../../components/Header';
import axios from '../../service/axios';

export default function Following({ match }) {
    const login = match.params.profile;
    const [following, setFollowing] = useState([]);

    useEffect(() => {
        async function getFollowing() {
            const { data } = await axios.get(login + '/following?per_page=100');
            setFollowing(data);
        }
        // se na tiver login não faz a requisição
        if (!login) return;
        getFollowing();
    }, [login]);

    return (
        <>
            <Header data={following} title={'Seguindo'} />
            <List data={following} path="following" />
            <Navbar selected={'following'} />
        </>
    );
}
