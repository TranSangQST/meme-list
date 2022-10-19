import Image from "../Image";

import "./Gallery.css";

function Gallery({ memes, onClick }) {
    const handleClick = (meme) => {
        return () => onClick(meme);
    };

    return (
        <div className="gallary-wrapper">
            {memes.map((meme, index) => (
                <Image
                    key={index}
                    meme={meme}
                    onClick={handleClick(meme)}
                ></Image>
            ))}
        </div>
    );
}

export default Gallery;
