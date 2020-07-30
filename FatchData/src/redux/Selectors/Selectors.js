export const getUsersData = (state) => {
    return state.reducers.users ? state.reducers.users : {};
};