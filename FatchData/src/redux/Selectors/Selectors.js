export const getUsersData = (state) => {
    return state.reducers.userData ? state.reducers.userData : {};
};