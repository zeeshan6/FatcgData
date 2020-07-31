export const getUsersData = (state) => {
    return Object.keys(state.reducers.userD ? state.reducers.userD : {});
};