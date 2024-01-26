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

export { formatReleaseDate, filterVideos };