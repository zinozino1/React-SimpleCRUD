import React from "react";
import { useState } from "react";

const PhoneForm = ({ handleCreate }) => {
    const [state, setState] = useState({ name: "", phone: "" });

    const onSubmit = (e) => {
        e.preventDefault();

        handleCreate(state);
    };

    const onChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    return (
        <div className="phone-form">
            <form onSubmit={onSubmit}>
                <input
                    name="name"
                    type="text"
                    placeholder="이름을 입력하세요"
                    onChange={onChange}
                />
                <input
                    name="phone"
                    type="text"
                    placeholder="전화번호를 입력하세요"
                    onChange={onChange}
                />
                <button type="submit">제출</button>
            </form>
        </div>
    );
};

export default PhoneForm;
