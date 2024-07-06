import { navItems } from "../../../data/NavItems"
const ListCategory = () => {
    
    return (
        <>
            <nav className='flex items-center justify-center w-full bg-DarkBlueG'>
                <ul className="flex flex-row justify-evenly items-center w-full h-full">
                    {navItems.map((item, index) => (
                        <li key={index} className='w-22 h-16 flex items-center justify-center text-sm md:text-xl hover:scale-90 hover:text-AlmostBlack font-semibold hover:underline '>
                            <a href={`${item.id === '/games' ? '/games' : `#${item.id}`} `} className='w-full h-full flex items-center justify-center   '>{item.value}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )

}

export default ListCategory