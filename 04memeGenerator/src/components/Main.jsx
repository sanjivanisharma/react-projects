import { useState } from "react"

export default function Main() {
    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })

    function handleChange(event) {
        const {value, name} = event.currentTarget
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
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
            <button>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} alt="Meme Image" />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}