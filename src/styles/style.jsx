import React, { useState } from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import { useCallback } from "react";
import { useRef } from "react";

import styled, { css } from "styled-components";

export const Box = styled.div`
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Button = styled.button`
    /* 크기 */
    width: 200px;
    height: 40px;

    /* 마진 및 패딩 */
    margin: 20px;
    padding: 30px;

    /* 색상 - props로 받은 값을 ||로 작업*/
    background: ${({ background }) => background || "white"};

    /* 마우스 오버 효과 */
    &:hover {
        background-color: pink;
    }
    /* 중요도 - props로 받은 값을 boolean으로 판단해서 작업 */
    ${({ primary }) =>
        primary &&
        css`
            color: gold;
            &:hover {
                background: transparent;
            }
        `}
`;
