import React from "react";
import PhoneInfo from "./PhoneInfo";

const PhoneInfoList = ({ data, onUpdate, onDelete }) => {
    const list = data.map((item, index) => {
        return (
            <PhoneInfo
                index={index}
                item={item}
                key={item.id}
                onUpdate={onUpdate}
                onDelete={onDelete}
            ></PhoneInfo>
        );
    });
    return <div>{list}</div>;
};

export default PhoneInfoList;
