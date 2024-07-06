import { useEffect, useState } from "react"
import AllGames from "../components/AllGames/AllGames"
import SideSearch from "../components/AllGames/Side/SideSearch.tsx"
import SideSearchPc from '../components/AllGames/SidePC/SideSearchPC.tsx'
import TrendingGames from "../components/Home/TrendingGames"

const Games = () => {
    const [screenSize, setScreenSize] = useState(window.innerWidth)

    useEffect(()=>{
        const handleResize = () => {
            setScreenSize(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    },[])
    

    return (
        <div className="all-games">
            <TrendingGames />
            <div className="w-full h-14 font-semibold text-2xl flex justify-center items-center bg-DarkBlueG text-white">
                <h1>Search Your Game</h1>
            </div>
            <div className=" w-full h-full flex flex-col justify-between items-start lg:flex-row">
                {screenSize >= 1024 ? <SideSearchPc /> : <SideSearch />}
                <AllGames/>
            </div>
        </div>

    )
}

export default Games