import React from "react";

export default function Meme(){
    //form data state
    const[meme, setMeme]  = React.useState({
        topText:"",bottomText:"",randomImage:"http://i.imgflip.com/1bij.jpg"
    })
    function handleChange(event){
        
        setMeme(prevMeme => {
            return{
                ...prevMeme,
                [event.target.name]:event.target.value
            }
        })
    }

    //api state
    const[memeData,setMemeData] = React.useState([]);
   
    //api calling using useEffect
    React.useEffect(() =>{
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(apiData => setMemeData(apiData.data.memes)) //it returns array of objects console log the api data for more details
    },[])

    function getMemeImage(){
        const randomNumber = Math.floor(Math.random()*memeData.length);
        const memeImageUrl = memeData[randomNumber].url;
        setMeme(prevMeme=>({
            ...prevMeme,randomImage:memeImageUrl
        }))
    }

    return(
        <main>
        <form className="meme-input">
            <div className="input-feild">
                <input type="text" name="topText" placeholder="Upper Text" value = {meme.topText} onChange={handleChange}/>
                <input type="text" name="bottomText" placeholder="Lower Text" value = {meme.bottomText} onChange={handleChange}/>
            </div>
        </form>
        
        <button name = "randomImage" className="form-button" onClick={getMemeImage}>Get new meme image!</button>
                <div className="meme-view">
                    <h3 className="top-text">{meme.topText}</h3>
                    <img className="meme-image" src={meme.randomImage} alt="Meme Image" />
                    <h3 className="bottom-text">{meme.bottomText}</h3>
                </div>
        </main>
    )
}