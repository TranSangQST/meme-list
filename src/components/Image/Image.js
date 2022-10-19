import "./Image.css";

function Image({ meme, onClick }) {
    return (
        <div className="meme-img-wrapper">
            <img
                className="meme-img"
                src={meme.url}
                alt={meme.name}
                title={meme.name}
                onClick={onClick}
            ></img>
        </div>
    );
}

export default Image;
