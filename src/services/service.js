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

        const len =
            memeQuantity <= dataMemeLength ? memeQuantity : dataMemeLength;

        console.log("len", len);
        for (let i = 0; i < len; i++) {
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
