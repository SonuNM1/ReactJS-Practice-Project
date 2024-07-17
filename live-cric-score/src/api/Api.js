
const API_KEY = "010b8825-3c92-4184-b9c6-4bb43195cc7c&offset=0" ; 

// get all the matches [upcoming matches]

export const getMatches=()=>{
    const url = `https://api.cricapi.com/v1/matches?apikey=${API_KEY}` ; 

    return fetch(url)
        .then((response)=> response.json())
        .catch((error)=>{
            console.log("ERROR: ", error);
        })
}

