import "./Image.css";

function Image({ meme }) {
    return (
        <div className="meme-img-wrapper">
            <img
                className="meme-img"
                src={meme.url}
                alt={meme.name}
                title={meme.name}
            ></img>
        </div>
    );
}

export default Image;
