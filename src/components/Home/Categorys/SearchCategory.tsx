import ListCategory from '../Categorys/ListCategory.tsx'
const SearchCategory = () => {
    return (
        <div className="SearchWrapper flex flex-col">
            <div className='bg-DarkBlueG h-14 text-white lg:h-24 flex items-center justify-center'>
                <h1 className='text-lg font-bold'>Search your game</h1>
            </div>
            <div className="search w-full flex max-md:flex-col items-center h-32 p-2 bg-gray-900 justify-around font-semibold">

                <div className='w-[300px] h-full flex items-center justify-center  md:w-[500px]'>
                    <input type="search" placeholder="pesquise seus jogos aqui" className='w-full text-black rounded-2xl' />
                </div>

                <div className='w-44 h-20 flex items-center justify-center bg-emerald-500 rounded-2xl md:h-14 hover:bg-emerald-700 '>
                    <button className='w-full h-full text-white'>Pesquisar</button>
                </div>
            </div>

            <div className="category flex items-center justify-center w-full bg-black text-white">
                <ListCategory />
            </div>

        </div>
    )
}

export default SearchCategory