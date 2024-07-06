import CategorySide from "./CategorySide"

const SideSearch = () => {
  return (
    <div className="w-full h-full text-black flex items-center  overflow-x-auto bg-VeryDarkGray">
      <div className="shadow-lg p-4 text-start w-96 h-20 rounded-xl flex justify-between">
          <input type="text" placeholder="pesquise aqui!" className="rounded-xl" />
      </div>
      <div className="shadow-lg p-4 text-center w-[500px] h-20 rounded-xl flex justify-around font-semibold">
        <CategorySide categoryId="ps4" nameCategory="Jogos PS4" />
        <CategorySide categoryId="ps5" nameCategory="Jogos PS5" />
        <CategorySide categoryId="pc" nameCategory="Jogos PC" />
        <CategorySide categoryId="steam" nameCategory="Steam" />
      </div>
    </div>
  )
}

export default SideSearch