
export default store => next => action => {
    // store have 'dispatch' in it
    console.log('action: ', action);
    next(action);
}
