import { CgGames } from "react-icons/cg";

const Logo = () => {
    return (
        <>
            <div className="containerLogo flex justify-center items-center text-xl">
                <CgGames className="text-5xl mr-2" />
                <span>Fold<strong>Games</strong></span>
            </div>
        </>
    )
}

export default Logo