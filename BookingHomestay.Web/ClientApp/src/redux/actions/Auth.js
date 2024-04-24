export const onOpen = (isOpen) => {
    return{
        type: "OPEN",
        payload: isOpen
    };
};

export const onClose = (isOpen) => {
    return{
        type: "CLOSE",
        payload: isOpen
    };
};