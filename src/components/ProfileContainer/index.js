import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styled';
import Border from '../Border';

export default function ProfileContainer({ user }) {
    return (
        <Container>
            <Border>
                <div>
                    <h3>{user.name ? user.name.toUpperCase() : ''}</h3>
                    <p>{user.email}</p>
                    <p>{user.location}</p>
                </div>
            </Border>

            <ul className="user-info">
                <li>
                    <Link to={`/followers/${user.login}`}>
                        <p className="user-info-number">{user.followers}</p>
                        <p> Seguidores</p>
                    </Link>
                </li>
                <li>
                    <Link to={`/following/${user.login}`}>
                        <p className="user-info-number">{user.following}</p>
                        <p> Seguindo</p>
                    </Link>
                </li>
                <li>
                    <Link to={`/repos/${user.login}`}>
                        <p className="user-info-number"> {user.public_repos}</p>
                        <p> Repos</p>
                    </Link>
                </li>
            </ul>

            <div
                style={{
                    marginTop: '50px'
                }}
            >
                <Border>
                    <div>
                        <h3>BIO</h3>
                        <p className="user-bio-text">{user.bio}</p>
                    </div>
                </Border>
            </div>
        </Container>
    );
}
