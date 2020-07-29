export const getUsersData = (state) => {
    return state.reducers.user ? state.reducers.user : {};
};