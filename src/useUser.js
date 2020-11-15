import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Component, Fragment, useState } from "react";
import { useEffect } from "react";
// import Counter from "./components/Counter";

import Counter from "./components/Counter";

const useUser = (userId) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // 렌더링이 끝나고 호출
        getUserApi(userId).then((data) => setUser(data));
    }, [userId]);

    return user;
};

export default useUser;

const USER1 = { name: "min", age: 30 };
const USER2 = { name: "IU", age: 89 };

const getUserApi = (userId) => {
    return new Promise((res) => {
        setTimeout(() => {
            res(userId % 2 ? USER1 : USER2);
        }, 500);
    });
};
