 import { useState, useEffect } from "react"

import { GameProps } from '../../../Types/GamesTypes'
import { fetchGames } from "../../../api/GamesAPI"
import { useNavigate } from "react-router-dom";


interface gameNameProps {
    nameCategory: string;
    secao: string;
}

const GameList = ({ nameCategory, secao }: gameNameProps) => {
    const [gamesData, setGamesData] = useState<GameProps[]>([])
    const navigate = useNavigate()

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

    const handlerCheckIn = (gameId: number) => {
        navigate(`/games/checkin/${gameId}`);
    }


    return (
        <>
            <div className="bg-AlmostBlack text-LightCyan h-20 flex justify-center items-center text-2xl">
                <h1 className="h-full flex justify-center items-center">JOGOS DE {nameCategory}</h1>
            </div>
            <div className="section overflow-x-auto overflow-y-hidden flex bg-DarkGray text-LightGrayG h-full " id={secao}>
                {gamesData.map((item, index) => (
                    <div key={index} className="w-full h-full flex justify-center items-center border-l-2 border-r-2 border-t-2">
                        <div className="card flex p-2 flex-col w-72 h-72 items-center justify-between">
                            <h1 className="w-full">{item.title}</h1>
                            <img src={item.image} alt={item.description} className="w-20 h-20" />
                            <p>Pix: {item.price}</p>
                            <p>Cartão: {item.price}</p>
                            <div className="w-full h-10">
                                <button onClick={()=>handlerCheckIn(item.id)} className="w-20 h-10 bg-black rounded-lg hover:bg-gray-950">Comprar</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default GameList