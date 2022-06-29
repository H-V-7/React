import profileimage from './profileimage.jpg'
import email from './email.png'
import linkedin from './linkedin.png'


export default function Info(){
    return (
    <div className="info">
        <img src= {profileimage} className = "profile-pic" alt = "profilepic"/>
        <h2>Harsh Vardhan</h2>
        <h4>Frontend Developer</h4>
        <div className='info-buttons'>
            <button><img src={email} alt=" email" />Email</button>
            <button className='linkedin-button' ><img src ={linkedin} alt = "linkedin" />Linked In</button>
        </div>
    </div>
    )

}