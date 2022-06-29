import airbnb from "./airbnb.png"

 
export default function NavBar(){
    return (
        <nav className="nav-container">
            <img src= {airbnb} alt="airbnb logo" className="airbnb-logo" />
            <h2>airbnb</h2>
        </nav>
    )
}