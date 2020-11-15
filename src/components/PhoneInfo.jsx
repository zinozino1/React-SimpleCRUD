import React, { useState } from "react";

const PhoneInfo = ({ item, onUpdate, onDelete }) => {
    const [writing, setWriting] = useState(false);
    const [state, setState] = useState({
        _id: item.id,
        name: item.name,
        phone: item.phone,
    });

    const handleUpdate = (e) => {
        setWriting(!writing);
    };
    const handleDelete = (e) => {
        onDelete(state);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setWriting(!writing);

        onUpdate(state);
    };
    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    return (
        <div
            style={{ border: "1px solid blue", padding: "10px", margin: "5px" }}
        >
            <div>ID : {item.id}</div>
            <div>이름 - {item.name}</div>
            <div>전화번호 - {item.phone}</div>
            {writing ? (
                <>
                    <form action="" onSubmit={handleSubmit}>
                        <div>
                            <input
                                name="name"
                                type="text"
                                placeholder="이름"
                                onChange={handleChange}
                                value={state.name}
                            />
                        </div>
                        <div>
                            <input
                                name="phone"
                                type="text"
                                placeholder="전화번호"
                                onChange={handleChange}
                                value={state.phone}
                            />
                        </div>
                        <div>
                            <input type="submit" />
                        </div>
                    </form>
                </>
            ) : (
                <>
                    <button onClick={handleUpdate}>수정</button>
                    <button onClick={handleDelete}>삭제</button>
                </>
            )}
        </div>
    );
};

export default PhoneInfo;
