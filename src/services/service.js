async function fetchMemeApi(memeQuantity) {
    try {
        // get memes data from API
        const apiUrl = "https://api.imgflip.com/get_memes";
        const res = await fetch(apiUrl);
        const resJson = await res.json();
        const data = resJson.data;
        const dataMemeLength = data.memes.length;

        // Random memes from data
        const memes = [];
        for (let i = 0; i < memeQuantity; i++) {
            let index = Math.floor(Math.random() * dataMemeLength);
            memes.push(data.memes[index]);
        }
        return memes;
    } catch (error) {
        console.log("error: ", error);
        return [];
    }
}

export { fetchMemeApi };
