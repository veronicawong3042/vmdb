function dateConvert (str) {
    const dateString = new Date (Date(str));
    const options = {
        year: "numeric", month: "long", day: "numeric"
    }
    return (dateString).toLocaleDateString("en-US", options);
;}


function truncate (input) {
    return input.length > 100 ? `${input.substring(0, 100)}...` : input;
}

export {dateConvert,truncate};