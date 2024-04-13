import Whatsapp from "/src/assets/images/IconWhatsapp.png"

const Main = () => {
    return (
        <main className="pt-8 bg-black text-white min-h-screen">
            <div className="p-8">
                <h1 className="text-xl">CONTACTAR CON NOSOTROS</h1>
                <hr className="bg-yellow-300 border-none h-0.5 mt-2" />
            </div>
            <div className="pl-8">
                <p className="font-semibold">LLAMANOS</p>
                <p>311 8387979</p>
                <div className="flex">
                    <img src={Whatsapp} alt="error" className="xl:w-12 xl:h-12 w-6 h-6" />
                    <div>
                        <p className="font-semibold">WHATSAPP</p>
                        <p>311 8387979</p>
                    </div>
                </div>
                <p className="font-semibold">HORARIO DE ATENCION</p>
                <p className="font-semibold">LUNES A VIERNES</p>
                <p>7:00 AM A 7:00 PM</p>
                <p className="font-semibold">DIRECCION</p>
                <p className="xl:text-base text-sm">Calle 59 con Avenida Guabinal esquina, 73001</p>
            </div>
        </main>
    )
}

export default Main