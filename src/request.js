// Async/Await and Fetch API
const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    if (response.status === 200) {
        const data = await response.json();
        return data.puzzle;
    } else {
        throw new Error("Failed to get puzzle");
    }
};

// Async/Await with Fetch API
const getCountry = async (code) => {
    const response = await fetch("http://restcountries.eu/rest/v2/all");
    if (response.status === 200) {
        const countries = await response.json();
        return countries.find((country) => country.alpha2Code === code);
    } else {
        throw new Error("Failed to get country info");
    }
};

// Synchronous
const getPuzzleSync = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "http://puzzle.mead.io/slow-puzzle?wordCount=3", false);
    request.send();
    if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        return data.puzzle;
    } else if (request.readyState === 4) {
        throw new Error("Something went wrong");
    }
};

// Async/Await with Fetch API
const getLocation = async () => {
    const response = await fetch("http://ipinfo.io/json?token=f748d946136d6e");
    if (response.status === 200) {
        return response.json();
    } else {
        throw new Error("Failed to get location");
    }
};

const getCurrentCountry = async () => {
    const location = await getLocation();
    return getCountry(location.country);
};

export { getPuzzle as default };