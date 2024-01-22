// convert date format
// e.g. "2004-04-01" to "April 1, 2004"
function dateConvert (str) {
    const dateString = new Date (Date(str));
    const options = {
        year: "numeric", month: "long", day: "numeric"
    }
    return (dateString).toLocaleDateString("en-US", options);
;}

// truncate paragraph
// If the content is over 100 characters, then output the first 100 characters; 
// otherwise, output all the content
function truncate (input) {
    return input.length > 100 ? `${input.substring(0, 100)}...` : input;
}

export {dateConvert,truncate};