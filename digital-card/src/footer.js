import facebook from "./facebook.png"
import twitter from "./twitter.png"
import github from "./github.png"
import instagram from "./instagram.png"




export default function Footer(){
    return(
        <div className="social-icons">
            <img src ={facebook} alt="fb"/>
            <img src ={twitter} alt="twitter"/>
            <img src ={github} alt="github"/>
            <img src ={instagram} alt="insta"/>
        </div>
    )
}