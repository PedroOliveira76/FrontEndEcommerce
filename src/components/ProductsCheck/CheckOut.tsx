import { useParams } from "react-router-dom"
import { TrendingGamesList } from "../../data/DataTrendingG";

const CheckOut = () => {
  const { id } = useParams();
  const game = TrendingGamesList.find(games => games.id === id)

  if (!game) {
    return <div>Jogo não encontrado</div>;
  }
  
  return (
    <div className="Detalhes-Jogo">
      <img src={game.src} alt="Imagem do game" />
    </div>
  )
}

export default CheckOut