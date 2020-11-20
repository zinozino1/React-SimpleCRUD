import React, { useState } from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import { useCallback } from "react";
import { useRef } from "react";
import styled, { css } from "styled-components";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";

const StyledTemplate = styled.div`
    margin: auto;
    width: 600px;
    margin-top: 6rem;
    overflow: auto;
    border-radius: 5px;
    height: 700px;
`;

const StyledTitle = styled.div`
    background: #22b8cf;
    padding: 30px;
    text-align: center;
    color: white;
    font-size: 24px;
    font-weight: 500;
`;

const TodoTemplate = ({
    todos,
    handleCreate,
    handleDelete,
    handleToggle,
    handleUpdate,
}) => {
    return (
        <StyledTemplate>
            <StyledTitle>일정관리</StyledTitle>
            <TodoInsert handleCreate={handleCreate}></TodoInsert>
            <TodoList
                todos={todos}
                handleDelete={handleDelete}
                handleToggle={handleToggle}
                handleUpdate={handleUpdate}
            ></TodoList>
        </StyledTemplate>
    );
};

export default TodoTemplate;
