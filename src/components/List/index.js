import React from 'react';
import { useHistory } from 'react-router';
import { HiArrowRight } from 'react-icons/hi';

import { ListContainer, Card } from './styled';
import Border from '../Border';

export default function List({ data, path }) {
    const history = useHistory();

    const handleNewUser = async (e, user) => {
        e.preventDefault();

        history.push(`/${path}/profile/${user}`);
    };

    console.log(data);
    if (!data) return <></>;
    return (
        <ListContainer>
            {data.map((users, i) => (
                <Card key={i}>
                    <Border />
                    <div
                        className="card"
                        onClick={(e) => handleNewUser(e, users.login)}
                    >
                        <img src={users.avatar_url} />
                        <h3>{users.login}</h3>
                        <HiArrowRight size={20} className="arrow" />
                    </div>
                </Card>
            ))}
        </ListContainer>
    );
}
