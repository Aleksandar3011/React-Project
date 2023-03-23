const baseUrl = 'http://localhost:3030/jsonstore/teachers';

export const getAll = async () => {
    const response = await fetch(baseUrl);
    const result = await response.json();

    const teachers = Object.values(result);

    return teachers;
};

export const create = async (data) => {
    const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
            "content-type": 'application/json'
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();
    console.log(result);
};