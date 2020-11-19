import React, { useState } from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import { useCallback } from "react";
import { useRef } from "react";
import styled, { css } from "styled-components";

const StyledInsert = styled.div`
    display: flex;
`;

const StyledInput = styled.input`
    flex: 1;
    padding: 10px;
    background-color: #111;
    color: #fff;
    font-size: 18px;
    font-weight: 400;
    box-sizing: border-box;
`;

const StyledButton = styled.button`
    background-color: #777;
    color: #fff;
    font-size: 30px;
    padding: 15px;
    border: none;
    cursor: pointer;
    box-sizing: border-box;
`;

const TodoInsert = ({ handleCreate }) => {
    const [input, setInput] = useState("");

    const onChange = useCallback((e) => {
        setInput(e.target.value);
    }, []);

    const onSubmit = useCallback(
        (e) => {
            if (input === "") {
                alert("빈칸을 채워주세요.");

                return;
            } else {
                handleCreate(input);
                setInput("");
            }
        },
        [input],
    );

    const enterKeyDown = (e) => {
        if (e.keyCode === 13) {
            onSubmit();
        }
    };

    return (
        <StyledInsert>
            <StyledInput
                placeholder="할 일을 입력하세요.."
                onChange={onChange}
                value={input}
                onKeyDown={enterKeyDown}
            ></StyledInput>
            <StyledButton onClick={onSubmit}>+</StyledButton>
        </StyledInsert>
    );
};

export default TodoInsert;
