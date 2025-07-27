import trollFaceImg from "/src/assets/trollFace.png"

export default function Header() {
    return (
        <header className="header">
            <img src={trollFaceImg} alt="Troll face logo" />
            <h1>Meme Generator</h1>
        </header>
    )
}