import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="bg-AlmostBlack text-white h-36 w-full flex items-center p-4">
            <div className="flex items-center w-full">
                <div className="w-full h-full flex flex-col justify-center items-start">
                    <h1>&copy;PedroOlveira</h1>
                    <p>FoldGames</p>
                </div>
                <div className="w-full h-full flex items-center justify-around ">
                    <a href="https://github.com/PedroOliveira76" target="_blank">
                        <FaGithubSquare className="text-5xl text-white hover:text-gray-300 hover:cursor-pointer" />
                    </a>
                
                    <a href="https://www.linkedin.com/in/pedro-henrique-080baa247/" target="_blank">
                        <FaLinkedin className="text-5xl text-DarkBlueG hover:text-blue-400 hover:cursor-pointer"/>
                    </a>
                    
                    <a href="https://wa.me/5575991625295" target="_blank">
                        <FaWhatsappSquare className="text-5xl text-green-500 hover:text-green-700 hover:cursor-pointer"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer