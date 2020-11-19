import React, { useReducer, useCallback } from "react";

const reducer = (state, action) => {
    return {
        ...state,
        [action.name]: action.value,
    };
};

export const useInput = (initialForm) => {
    const [state, dispatch] = useReducer(reducer, initialForm);

    const onChange = useCallback((e) => {
        dispatch(e.target);
    }, []);
    return [state, onChange];
};

export default useInput;
