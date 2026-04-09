import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './index.css'
import "./App.css";
import Fire from "./assets/fire emo.png";
import Star from "./assets/star emo.png";
import Party from "./assets/party emo.png";
import Navbar from "./components/Navbar/Navbar";
import MovieList from "./components/MovieList/MovieList";
import FilterGroup from './components/MovieList/FilterGroup';


const App = () => {
    return (
        <div className='app'>
            <Navbar />

            <MovieList type='popular' title='Popular' emoji={Fire} />
            <MovieList type='top_rated' title='Top Rated' emoji={Star} />
            <MovieList type='upcoming' title='Upcoming' emoji={Party} />
        </div>
    );
};

export default App;
    
    

