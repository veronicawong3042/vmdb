import {useState} from 'react';


// export default function useFetch(baseUrl) {
// 	const [loading, setLoading] = useState(true);

// 	function get(url) {
// 		return new Promise((resolve, reject) => {
// 			fetch(baseUrl + url)
// 				.then(response => response.json())
// 				.then(data => {
// 					if (!data) {
// 						setLoading(false);
// 						return reject(data);
// 					}
// 					setLoading(false);
// 					resolve(data);
// 				})
// 				.catch(error => {
// 					setLoading(false);
// 					reject(error);
// 				});
// 		});
// 	}

// 	return { get, loading };
// }

// truncate paragraph
// If the content is over 100 characters, then output the first 100 characters; 
// otherwise, output all the content
function truncateOverview(input) {
    return input.length > 60 ? `${input.substring(0, 55)}...` : input;
}

function truncateTitle(input) {
    return input.length > 20 ? `${input.substring(0, 20)}...` : input;
}

// get current year
function getYear() {
    const d = new Date();
    return d.getFullYear();
}


function formatReleaseDate(date) {
    // convert a string that looks like 2023-11-22 and make it look like November 22, 2023
    const dateObject = new Date(date);
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    return dateObject.toLocaleDateString("en-US", options);
}

function filterVideos(videoDataArray) {
    // site: "Youtube"
    // type: "Trailer" 
    return videoDataArray.filter((videoData) => {
        return videoData.site === "YouTube" && videoData.type === "Trailer";
    });
}

function formatTime(minutes) {
    if (isNaN(minutes) || minutes < 0) {
        return 'Invalid input';
    }

    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    return hours + 'h' + remainingMinutes + 'm';
}

export { formatReleaseDate, filterVideos, truncateOverview, truncateTitle, getYear ,formatTime};
