import React, { useState } from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import { useCallback } from "react";
import { useRef } from "react";
import styled, { css } from "styled-components";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, handleDelete, handleToggle, handleUpdate }) => {
    return (
        <div>
            {todos.map((v, i) => (
                <TodoListItem
                    key={v.id}
                    data={v}
                    isEven={i % 2 === 0}
                    handleDelete={handleDelete}
                    handleToggle={handleToggle}
                    handleUpdate={handleUpdate}
                ></TodoListItem>
            ))}
        </div>
    );
};

export default TodoList;
