import { useEffect, useState } from "react";
import Galllery from "../Galllery";
import { fetchMemeApi } from "../../services/service";

import "./MemeApp.css";
import FullImage from "../FullImage";

const DEFAULT_MEME_QUANTITY = 6;

function MemeApp() {
    const [curMeme, setCurMeme] = useState("");
    const [memeList, setMemeList] = useState([]);
    const [toggleReloadMemes, setToggleReloadMemes] = useState(false);

    useEffect(() => {
        console.log("Reload Memes");
        async function loadMemes() {
            let memes = await fetchMemeApi(DEFAULT_MEME_QUANTITY);
            console.log("memes: ", memes);
            setMemeList(memes);
            if (memes && memes.length > 0) {
                setCurMeme(memes[0]);
            }
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

    const handleClickMeme = (meme) => {
        console.log("Meme click");
        console.log("Click meme: ", meme);
        setCurMeme(meme);
    };

    return (
        <div className="meme-app-wrapper">
            <div className="header">
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
                <div>
                    <div>Click on each meme to view full</div>
                </div>
            </div>

            <div className="container">
                <div className="content">
                    <Galllery
                        memes={memeList}
                        onClick={(meme) => handleClickMeme(meme)}
                    ></Galllery>
                </div>

                <FullImage src={curMeme.url} title={curMeme.name} />
            </div>
        </div>
    );
}

export default MemeApp;
