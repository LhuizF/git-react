import styled from 'styled-components';

export const RepoContainer = styled.div`
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid #7070705a;
    padding: 10px 14px 22px 0;
    margin-top: 10px;

    .card {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        width: 100%;
        margin-top: 8px;

        .repo-desc {
            flex-grow: 1;
        }

        .repo-stats {
            display: flex;
            justify-content: space-between;
            margin-top: 6px;

            .repo-star,
            .repo-lock {
                display: flex;

                svg {
                    padding: 0px 6px;
                }
            }
        }
    }
`;
