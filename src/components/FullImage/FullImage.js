import "./FullImage.css";

function FullImage({ src, title }) {
    return (
        <div className="meme-img-full-wrapper">
            <h3>{title}</h3>
            <img className="meme-img-full" src={src} title={title} alt={title}></img>
        </div>
    );
}

export default FullImage;
