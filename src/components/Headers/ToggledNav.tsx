/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from 'react';
import { IoMdMenu } from "react-icons/io";
import { UnLoggedDropDown } from '../../data/NavItems';
import { Link } from 'react-router-dom';

const ToggledNav = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };



    useEffect(() => {

        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };

    }, []);

    return (
        <div className='containerNav relative h-full' ref={dropdownRef}>

            <button onClick={toggleDropdown} className=" ml-2 flex items-center justify-center h-full rounded-lg border-2 hover:text-slate-300 hover:border-slate-300 hover:scale-90 ">
                <IoMdMenu size={30} />
            </button>

            {isDropdownOpen && (
                <nav className=' absolute mt-5 left-0 w-40 h-48 p-3 bg-AltLightBlue text-white border rounded shadow-lg z-50'>
                    <ul className="w-full h-full flex flex-col items-center justify-around">
                        {UnLoggedDropDown.map((item, index) => (
                            <li key={index} className='bg-DarkBlueG w-full h-9 flex items-center justify-around rounded-md hover:scale-95 hover:bg-DarkBlueG'>
                                <Link to={item.link} className='w-full h-full flex items-center justify-center'>{item.value}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </div>
    );
};

export default ToggledNav;