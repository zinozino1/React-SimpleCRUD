import React, { useState, useReducer } from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import { useCallback } from "react";
import { useRef } from "react";
import styled, { css } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import TodosData from "./constant";
import TodoList from "./components/TodoList";
import TodoInsert from "./components/TodoInsert";

const reducer = (state, action) => {
    switch (action.type) {
        case "CREATE":
            return state.concat({
                id: action.nextId,
                text: action.input,
                checked: false,
            });
        case "DELETE":
            return state.filter((v, i) => {
                return v.id !== action.id;
            });
        case "TOGGLE":
            return state.map((v, i) => {
                if (v.id === action.id) {
                    return { id: v.id, text: v.text, checked: !v.checked };
                }
                return v;
            });
        case "UPDATE":
            return state.map((v, i) => {
                if (v.id === action.id) {
                    return { id: v.id, text: action.input };
                }
                return v;
            });

        default:
            return state;
    }
};

const App = () => {
    const nextId = useRef(4); // 렌더링될 필요가 없기 때문에 useState가 아닌 useRef로 관리

    const [state, dispatch] = useReducer(reducer, TodosData);

    const handleCreate = (input) => {
        // nextId가 계속 바뀌므로 usecallback x
        dispatch({ type: "CREATE", input, nextId: nextId.current });
        nextId.current += 1;
    };

    const handleDelete = useCallback((id) => {
        //
        dispatch({ type: "DELETE", id });
    }, []);

    const handleToggle = useCallback((id) => {
        dispatch({ type: "TOGGLE", id });
    });

    const handleUpdate = (input, id) => {
        dispatch({ type: "UPDATE", input, id });
    };

    return (
        <div className="App">
            <TodoTemplate
                todos={state}
                handleCreate={handleCreate}
                handleDelete={handleDelete}
                handleToggle={handleToggle}
                handleUpdate={handleUpdate}
            ></TodoTemplate>
        </div>
    );
};

export default App;
