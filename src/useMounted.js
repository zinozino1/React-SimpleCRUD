import React, { useState, useEffect } from "react";

const useMounted = () => {
    // 마운트 되었다 => 첫번째 렌더링이 끝났다.
    const [mounted, setMounted] = useState(0);

    useEffect(() => {
        setMounted(true);
    }, []);

    return mounted;
};
