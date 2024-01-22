function dateConvert (str) {
    const dateString = new Date (Date(str));
    const options = {
        year: "numeric", month: "long", day: "numeric"
    }
    return (dateString).toLocaleDateString("en-US", options);
;}

export {dateConvert};