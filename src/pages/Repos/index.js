import React, { useEffect, useState } from 'react';
import { FiStar, FiUnlock, FiLock } from 'react-icons/fi';

import Navbar from '../../components/Nav';
import { RepoContainer } from './styled';
import Border from '../../components/Border';
import Header from '../../components/Header';
import axios from '../../service/axios';

export default function Repos({ match }) {
    const login = match.params.profile;
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        async function getRepos() {
            const { data } = await axios.get(login + '/repos');
            setRepos(data);
        }
        // se na tiver login não faz a requisição
        if (!login) return;
        getRepos();
    }, [login]);
    console.log(repos);
    return (
        <>
            <Header data={repos} title={'repositórios'} />
            {repos.length !== 0
                ? repos.map((repo, i) => (
                      <RepoContainer key={i}>
                          <Border />
                          <div className="card">
                              <h3>{repo.full_name}</h3>
                              <div className="repo-desc">
                                  <p>{repo.description}</p>
                              </div>
                              <div className="repo-stats">
                                  <div className="repo-star">
                                      <FiStar size={18} color="#FFCE00" />
                                      <p>{repo.stargazers_count}</p>
                                  </div>

                                  <div className="repo-lock">
                                      <FiUnlock size={18} color="#63BF1F" />
                                      <FiLock size={18} color="#CC042A" />
                                  </div>
                              </div>
                          </div>
                      </RepoContainer>
                  ))
                : null}
            <Navbar selected={'repos'} />
        </>
    );
}
