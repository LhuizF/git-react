const initialState = {
    login: '',
    avatar_url: '',
    name: '',
    email: '',
    location: '',
    followers: 0,
    following: 0,
    public_repos: 0,
    bio: ''
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_USER': {
            const newState = { ...state };
            newState.login = action.payload.login;
            newState.avatar_url = action.payload.avatar_url;
            newState.name = action.payload.name;
            newState.email = action.payload.email;
            newState.location = action.payload.location;
            newState.followers = action.payload.followers;
            newState.following = action.payload.following;
            newState.public_repos = action.payload.public_repos;
            newState.bio = action.payload.bio;
            return newState;
        }

        case 'RESET_USER': {
            const newState = { ...state };
            return newState;
        }

        default:
            return state;
    }
}
