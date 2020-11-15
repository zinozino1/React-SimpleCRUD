import React from "react";

import { useState } from "react";
import PhoneForm from "./components/PhoneForm";
import PhoneInfoList from "./components/PhoneInfoList";

const App = () => {
    const [state, setState] = useState({ information: [] });
    const [id, setId] = useState(0);

    const handleCreate = ({ name, phone }) => {
        setState({
            ...state,
            information: state.information.concat({
                id,
                name,
                phone,
            }),
        });
        setId(id + 1);
    };

    const handleUpdate = ({ _id, name, phone }) => {
        setState({
            ...state,
            information: state.information.map((v) => {
                if (v.id === _id) {
                    return { id: _id, name, phone };
                }
                return v;
            }),
        });
    };
    const handleDelete = ({ _id }) => {
        setState({
            ...state,
            information: state.information.filter((v) => {
                return v.id !== _id;
            }),
        });
    };

    return (
        <div className="App">
            <PhoneForm handleCreate={handleCreate}></PhoneForm>
            <PhoneInfoList
                data={state.information}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
            ></PhoneInfoList>
        </div>
    );
};

export default App;
