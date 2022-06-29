import girdImages from "./grid.png"


export default function Heros(){
    return(
        <div className="hero-container">
            <img src= {girdImages} className = "grid-img" alt="Our Heros"/>
            <h1>
                Online Experiences
            </h1>
            <p>
                Join uinque interctive activities led by one-of-a-kind hosts-all without leaving home
            </p>
        </div>
    )
}
