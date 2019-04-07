const addCounter = (state, action) => {
    console.log(state, action)
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                count: action.count
            }
        default:
            return state
    }
};

export default addCounter