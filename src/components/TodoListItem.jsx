import React, { useState } from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import { useCallback } from "react";
import { useRef } from "react";
import styled, { css } from "styled-components";

const StyledItem = styled.div`
    display: flex;
    padding: 15px;
    background: ${({ isEven }) => isEven && "#f7ffd8"};
`;

const StyledContentContainer = styled.div`
    display: flex;
    flex: 1;
    ${({ checked }) =>
        checked &&
        css`
            text-decoration: line-through;
            color: #878787;
        `};
`;

const StyledButtonContainer = styled.div``;

const StyledCheck = styled.input``;

const StyledDeleteButton = styled.button`
    border: 1px solid #898989;
    background: #fff;
    color: red;
    cursor: pointer;

    &:hover {
        border: 1px solid #111;
    }
`;

const StyledUpdateButton = styled.button`
    border: 1px solid #898989;
    background: #fff;
    color: red;
    cursor: pointer;

    &:hover {
        border: 1px solid #111;
    }
`;

const StyledContent = styled.div``;

const StyledEditInput = styled.input`
    border: 1px solid #898989;
`;

const StyleEditButton = styled.button`
    border: 1px solid #898989;
    background: #fff;
    color: red;
    cursor: pointer;

    &:hover {
        border: 1px solid #111;
    }
`;

const TodoListItem = ({
    data,
    isEven,
    handleDelete,
    handleToggle,
    handleUpdate,
}) => {
    const [editing, setEditing] = useState(false);
    const [editInput, setEditInput] = useState("");

    const onDelete = useCallback((e) => {
        handleDelete(data.id);
    });

    const onToggle = useCallback((e) => {
        handleToggle(data.id);
    });

    const onEditUpdate = (e) => {
        setEditing(!editing);
    };

    const onUpdate = (e) => {
        handleUpdate(editInput, data.id);
        setEditing(!editing);
    };

    const onChange = (e) => {
        setEditInput(e.target.value);
    };

    return (
        <StyledItem isEven={isEven}>
            <StyledContentContainer checked={data.checked}>
                {data.checked ? (
                    <StyledCheck
                        type="checkbox"
                        defaultChecked
                        onClick={onToggle}
                    ></StyledCheck>
                ) : (
                    <StyledCheck
                        type="checkbox"
                        onClick={onToggle}
                    ></StyledCheck>
                )}
                {editing ? (
                    <>
                        <StyledEditInput
                            type="text"
                            defaultValue={data.text}
                            onChange={onChange}
                        ></StyledEditInput>
                        <StyleEditButton onClick={onUpdate}>
                            저장
                        </StyleEditButton>
                    </>
                ) : (
                    <StyledContent>{data.text}</StyledContent>
                )}
            </StyledContentContainer>
            <StyledButtonContainer>
                {data.checked ? (
                    <StyledDeleteButton onClick={onDelete}>
                        -
                    </StyledDeleteButton>
                ) : (
                    <>
                        <StyledUpdateButton onClick={onEditUpdate}>
                            v
                        </StyledUpdateButton>
                        <StyledDeleteButton onClick={onDelete}>
                            -
                        </StyledDeleteButton>
                    </>
                )}
            </StyledButtonContainer>
        </StyledItem>
    );
};

export default TodoListItem;
