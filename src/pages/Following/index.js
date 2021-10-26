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
            const { data } = await axios.get(login + '/following');
            setFollowing(data);
        }
        // se na tiver login não faz a requisição
        if (!login) return;
        getFollowing();
    }, [login]);

    return (
        <>
            <Header data={following} title={'Seguindo'} />
            <List data={following} />
            <Navbar selected={'following'} />
        </>
    );
}
