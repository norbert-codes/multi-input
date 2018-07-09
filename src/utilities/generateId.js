let lastId = 0;

const generateId = (prefix = 'id') => {
    lastId += 1;
    return `${prefix}${lastId}`;
};

export default generateId;
