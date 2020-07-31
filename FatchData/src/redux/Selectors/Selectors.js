export const getUsersData = (state) => {
    return state.reducers.userD ? state.reducers.userD : {};
};