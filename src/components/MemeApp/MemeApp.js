import { useEffect, useState } from "react";
import Galllery from "../Galllery";
import { fetchMemeApi } from "../../services/service";

import "./MemeApp.css";

function MemeApp() {
    const [memeList, setMemeList] = useState([]);
    const [toggleReloadMemes, setToggleReloadMemes] = useState(false);

    useEffect(() => {
        console.log("Reload Memes");
        async function loadMemes() {
            let memes = await fetchMemeApi(5);
            console.log("memes: ", memes);
            setMemeList(memes);
        }

        loadMemes();
    }, [toggleReloadMemes]);

    const handleAddMeme = () => {
        console.log("Add new Meme");
        async function loadMemes() {
            let memes = await fetchMemeApi(1);
            console.log("memes: ", memes);
            // Add new meme
            setMemeList((prev) => [...prev, ...memes]);
        }
        loadMemes();
    };

    return (
        <>
            <div className="btnGroup">
                <button
                    className="readloadBtn"
                    onClick={() => setToggleReloadMemes(!toggleReloadMemes)}
                >
                    Reload Memes
                </button>
                <button className="addBtn" onClick={() => handleAddMeme()}>
                    Add new Meme
                </button>
            </div>

            <Galllery memes={memeList}></Galllery>
        </>
    );
}

export default MemeApp;
