import { GiShoppingCart } from "react-icons/gi";
import { FaUserAstronaut } from "react-icons/fa";
import { FunctionComponent } from "react";

interface iconProp {
    value: boolean
}

const IconHeader: FunctionComponent<iconProp> = ({ value }) => {
    return (
        <>
            {value ? (
                <div className="containerPerfilCart flex justify-around w-12 text-4xl">

                    <div className="cart hover:text-slate-300 hover:cursor-pointer hover:scale-90">
                        <GiShoppingCart />
                    </div>

                </div>
            ) : (
                <div className="containerPerfilCart flex justify-around w-20 text-4xl">

                    <div className="cart hover:text-slate-300 hover:cursor-pointer hover:scale-90">
                        <GiShoppingCart />
                    </div>

                    <div className="perfil hover:text-slate-300 hover:cursor-pointer hover:scale-90">
                        <FaUserAstronaut />
                    </div>

                </div>
            )}
        </>
    )
}

export default IconHeader