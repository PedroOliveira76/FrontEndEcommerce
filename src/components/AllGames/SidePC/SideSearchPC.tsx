import CategorySidePc from "./CategorySidePc"

const SideSearch = () => {
  return (
    <div className="w-80 h-full text-black flex flex-col items-center justify-center  bg-VeryDarkGray ">
      <div className="w-full h-20 flex justify-center items-center font-semibold text-white bg-black text-2xl">
        <h1>Category</h1>
      </div>
      <div className="shadow-2xl p-4 text-start w-full h-32 flex justify-center items-center bg-DarkGray">
          <input type="text" placeholder="pesquise aqui!" className="rounded-xl w-96"/>
      </div>
      <div className="text-center w-[500px] h-[892px] flex flex-col justify-around items-center font-semibold">
        <CategorySidePc categoryId="ps4" nameCategory="Jogos PS4" />
        <CategorySidePc categoryId="ps5" nameCategory="Jogos PS5" />
        <CategorySidePc categoryId="pc" nameCategory="Jogos PC" />
        <CategorySidePc categoryId="steam" nameCategory="Steam" />
      </div>
    </div>
  )
}

export default SideSearch