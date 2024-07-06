import WelcomeVD from '/assets/Welcome.mp4'
const Welcome = () => {
    return (
        <div className="jogos-em-alta w-full h-72">
            <video src={WelcomeVD} autoPlay={true}  muted playsInline loop className='w-full h-full'/> 
        </div>
    )
}

export default Welcome