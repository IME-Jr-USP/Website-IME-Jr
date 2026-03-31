export function Header() {
    return (
        //Navigation Bar
        <nav className="flex justify-between w-full px-8 py-8 gap-4 bg-[#101010]">
            {/*IME Jr*/}
            <div className="flex font-['Gill_Sans_MT'] font-normal text-xl leading-[150%] flex items-center text-[#FFFFFF]">
                IME Jr
            </div>
            {/*Items*/}
            <div className="flex flex-row justify-end items-center p-0 gap-8">
                {/*Quem Somos*/}
                <a href="#"
                target="_blank"
                className="font-['Hind_Madurai'] font-normal text-xl font-medium leading-[150%] flex items-center text-white flex-none order-0 grow-0 hover:scale-[110%] transition-all duration-300"
                >
                    Quem Somos
                </a>
                {/*Serviços*/}
                <a href="#"
                target ="_blank"
                className="font-['Hind_Madurai'] font-normal text-xl font-medium leading-[150%] flex items-center text-white flex-none order-1 grow-0 hover:scale-[110%] transition-all duration-300"
                >
                    Serviços
                </a>
                {/*Equipe*/}
                <a href="#"
                target ="_blank"
                className="font-['Hind_Madurai'] font-normal text-xl font-medium leading-[150%] flex items-center text-white flex-none order-2 grow-0 hover:scale-[110%] transition-all duration-300"
                >
                    Equipe
                </a>
                {/*Instagram*/}
                <a href="https://www.instagram.com/imejr.usp/"
                target="_blank"
                className="box-border flex flex-row justify-center items-center gap-8 px-2 py-2 bg-[#101010] border border-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] flex-none order-3 grow-0 hover:bg-white hover:text-black hover:scale-[110%] transition-all duration-300"
                >
                    <span className="font-['Hind_Madurai'] font-medium text-xl leading-[150%] text-inherit">
                        Instagram
                    </span>
                </a>
            </div>
        </nav>
    );
}
