

// truncate paragraph
// If the content is over 100 characters, then output the first 100 characters; 
// otherwise, output all the content
function truncateOverview (input) {
    return input.length > 60 ? `${input.substring(0, 55)}...` : input;
}

function truncateTitle (input) {
    return input.length > 20 ? `${input.substring(0, 20)}...` : input;
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

export { formatReleaseDate, filterVideos,truncateOverview,truncateTitle, getYear };
