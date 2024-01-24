// convert date format
// e.g. "2004-04-01" to "April 1, 2004"
function dateConvert (str,timeZone = "UTC") {
    const dateString = str;
    const options = {
        year: "numeric", month: "long", day: "numeric",
        timeZone: timeZone
    }
    return new Date(dateString).toLocaleDateString(undefined, options);

}

// truncate paragraph
// If the content is over 100 characters, then output the first 100 characters; 
// otherwise, output all the content
function truncate (input) {
    return input.length > 100 ? `${input.substring(0, 100)}...` : input;
}

// get current year
function getYear(){
    const d = new Date();
    return d.getFullYear();
}

export {dateConvert,truncate,getYear};