import { useState, useEffect } from "react"

export default function Main() {
    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    }, [])

    function handleChange(event) {
        const {value, name} = event.currentTarget
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    function getMeme() {
        const randomMeme = Math.floor(Math.random() * allMemes.length);
        const memeImgUrl = allMemes[randomMeme].url
        setMeme(prevMeme => ({
            ...prevMeme,
            imageUrl: memeImgUrl
        }))
    }

    return (
        <main>
            <div className="form">
                <label>Top text
                    <input 
                    type="text" 
                    placeholder="One does not simply"
                    name="topText" 
                    value={meme.topText}
                    onChange={handleChange}
                    />
                </label>

                <label>Bottom text
                    <input 
                    type="text" 
                    placeholder="Walk into Mordor"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange} 
                    />
                </label>
            <button onClick={getMeme}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} alt="Meme Image" />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}