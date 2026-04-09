
import './Navbar.css';
import Fire from '../../assets/fire emo.png';
import Star from '../../assets/star emo.png';
import Party from '../../assets/party emo.png';

const Navbar = () => {
    return <nav className='navbar'>
        <h1>MovieMania</h1>


        <div classname="navbar_links">
            
            <a href="#popular">popular{""} <img src={Fire} alt="fire emo" 
            className="navbar_emoji" /></a>
            <a href="#top_rated">Top Rated{""} <img src={Star} alt="star emo" 
            className="navbar_emoji" /></a>
            <a href="#upcoming">Upcoming{""} <img src={Party} alt="party emo" 
            className="navbar_emoji" /></a>
            
        </div>
    </nav>
};

export default Navbar;
        
    


    




    
    