const initState = {
    temp: 1
};

const tempReducer = (state = initState, action) => {
    switch (action.type) {
        case "TEST_CASE":
            return { ...state, };
        default:
            return { ...state };
    }

};

export default tempReducer;