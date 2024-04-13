import IconCarrito from "./icons/IconCarrito"
import Icon from "./icons/Icon"

const Header = () => {
    return (
        <header className="bg-black sm:px-1 xl:px-12 2xl:px-24">
            <div className="text-white gap-1 flex sm:gap-4 md:justify-center md:text-sm md:gap-6 lg:gap-10 lg:justify-center lg:text-base xl:gap-16 xl:justify-center xl:text-base 2xl:justify-center 2xl:text-xl 2xl:gap-28 2xl:pt-16 justify-center text-xs font-light pt-8">
                {/* <IconCampana /> */}
                <div className="sm:flex sm:mt-0.5 sm:gap-4 md:flex md:gap-9 md:mt-1 xl:mt-0 xl:flex 2xl:flex -mt-5">
                    <Icon />
                    <h1 className="font-bold sm:text-base text-xs lg:text-lg lg:-mt-1.5 xl:text-2xl 2xl:-mt-2 2xl:text-3xl text-white 2xl:pr-11 -mt-1 tracking-[0.3em]">VOAR</h1>
                </div>
                <a className="transition ease-in-out delay-75 cursor-pointer hover:text-yellow-300 no-underline hover:underline">INICIO</a>
                <a className="transition ease-in-out delay-75 cursor-pointer hover:text-yellow-300 no-underline hover:underline">CATEGORIAS</a>
                <a href="https://voarlogin.netlify.app" className="transition ease-in-out delay-75 cursor-pointer hover:text-yellow-300 no-underline hover:underline">CUENTA / INGRESAR</a>
                <a className="transition ease-in-out delay-75 cursor-pointer hover:text-yellow-300 text-yellow-300 underline">AYUDA</a>
                <div>
                    <button className="-mt-1">
                        <IconCarrito />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header