import { navItems } from '../../data/NavItems';

const ToggledNav = () => {

    return (

        <nav className=' absolute mt-5 w-40 h-72 p-3 bg-AltLightBlue text-white
                 border rounded shadow-lg  ' >
            <ul className="w-full flex flex-col items-center justify-around ">

                {navItems.map((item, index) => (
                    <li key={index} className='bg-DarkBlueG w-full h-9 mb-5 flex items-center justify-center rounded-md hover:scale-95 hover:bg-DarkBlueG'>
                        <a href={item.id} className='w-full h-full flex  items-center justify-center'>{item.value}</a>
                    </li>
                ))}


            </ul>


        </nav>


    )
}

export default ToggledNav