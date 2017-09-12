
export default function ({ dispatch }) {
    return next => action => {
        if (!action.payload || !action.payload.then) {
            return next(action);
        }

        action.payload.then( response => {
            const newAction = { ...action, payload: response};
            // dispatch making the action go through all the other middleware again
            // instead of going to next middleware but this time with new payload
            // which is not a promise anymore but a resolved promise
            dispatch(newAction);
        })
    };
}