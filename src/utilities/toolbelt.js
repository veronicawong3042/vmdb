

// truncate paragraph
// If the content is over 100 characters, then output the first 100 characters; 
// otherwise, output all the content
function truncate (input) {
    return input.length > 100 ? `${input.substring(0, 70)}...` : input;
}

// get current year
function getYear(){
    const d = new Date();
    return d.getFullYear();
}


function formatReleaseDate (date) {
    // convert a string that looks like 2023-11-22 and make it look like November 22, 2023
    const dateObject = new Date (date);
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    return dateObject.toLocaleDateString("en-US", options);
}

function filterVideos (videoDataArray) {
    // site: "Youtube"
    // type: "Trailer" 
    return videoDataArray.filter((videoData) => {
        return videoData.site === "Youtube" && videoData.type === "Trailer";
    });
}

export { formatReleaseDate, filterVideos,truncate, getYear };
