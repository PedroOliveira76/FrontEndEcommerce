import { SiPlaystation4 } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { fetchGames } from "../../../api/GamesAPI";
import { useEffect, useState } from "react";
import { GameProps } from "../../../Types/GamesTypes";
const GameCard = () => {
    const navigate = useNavigate()
    const [gamesData, setGamesData] = useState<GameProps[]>([])

    useEffect(() => {
        const fetchData = () => {
            fetchGames().then(data => {
                setGamesData(data);
            }).catch(error => {
                console.error('Error fetching games:', error);
            });
        }
        fetchData();
    }, [])

    const handlerGameClick = (gameId: number) => {
        navigate(`/games/checkIn/${gameId}`)
    }



    return (
        <>
            {gamesData.map((games, index) => (
                <div className="card mb-5 w-60 h-80 flex flex-col items-center justify-evenly rounded-2xl bg-black text-white shadow-sm" key={index}>
                    <div className="card-title">
                        <h1>{games.title}</h1>
                    </div>
                    <div className="card-img">
                        <div className="img w-36 ">
                            <img src={games.image} alt={games.description} className="w-full h-20 rounded-lg" />
                        </div>
                        <div className="iconImg w-full flex justify-center items-center">
                            <SiPlaystation4 className="ml-2 text-5xl" />
                        </div>
                    </div>

                    <div className="card-price w-full flex text-lg items-center justify-around">
                        <div className="pix">
                            Pix:<span className="text-GreenG">{games.price}</span>
                        </div>
                        <div className="cartao">
                            Cartão: <span className="text-BrightRed">{games.price}</span>
                        </div>
                    </div>

                    <div className="btn w-full h-10 flex justify-center items-center">
                        <button className="w-32 h-full bg-RedG rounded-lg font-semibold hover:bg-BrightRed" onClick={()=>(handlerGameClick(games.id))}>Comprar</button>
                    </div>
                </div>
            ))}
        </>

    )
}

export default GameCard