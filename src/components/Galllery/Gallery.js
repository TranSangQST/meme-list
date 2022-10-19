import Image from "../Image";

import "./Gallery.css";

function Gallery({ memes }) {
    return (
        <div className="gallary-wrapper">
            {memes.map((meme, index) => (
                <Image key={index} meme={meme}></Image>
            ))}
        </div>
    );
}

export default Gallery;
