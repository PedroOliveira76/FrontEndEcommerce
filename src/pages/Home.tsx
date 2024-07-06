import Games from "../components/Home/Games/GamesHome"
import SearchCategory from "../components/Home/Categorys/SearchCategory"
import TrendingGames from "../components/Home/TrendingGames"
import Welcome from "../components/Home/Welcome"

const Home = () => {
    return (
        <div className="hero">
            <Welcome />
            <TrendingGames />
            <SearchCategory />
            <Games />
        </div >
    )
}

export default Home