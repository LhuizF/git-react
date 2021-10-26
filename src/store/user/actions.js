export function setUser(payload) {
    return {
        type: 'SET_USER',
        payload
    };
}

export function ResetUser() {
    return {
        type: 'RESET_USER',
        payload
    };
}
