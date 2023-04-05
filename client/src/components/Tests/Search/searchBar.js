const getFilteredItems = (query, items) => {
    let upperQuery = query.toUpperCase();

    if (!query) {
        return items;
    };
    return items.filter((test) => (test.subject.toUpperCase()).includes(upperQuery));
};

export const search = (query, allTest) => {
    const filteredItems = getFilteredItems(query, allTest);

    return filteredItems;
};