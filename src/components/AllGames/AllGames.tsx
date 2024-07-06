import GameCard from "./Card/GameCard"


const AllGames = () => {
  return (
    <div className="w-full h-full bg-DarkGray">
        
        <div className="w-full h-20 bg-black text-white flex justify-center items-center text-2xl font-semibold">
          <h1>Games</h1>
        </div>

        <div className=" w-full h-full flex justify-center items-center mt-5">
          <div className="w-full h-full flex flex-wrap flex-row justify-around items-center overflow-x-auto p-4 max-w-[810px] max-h-[1000px]">
            <GameCard />
          </div>
        </div>
    </div>
  )
}

export default AllGames