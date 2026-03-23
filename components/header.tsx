export function Header() {
    return (
        //Navigation Bar
        <nav className="absolute h-[164px]  left-[0px] right-[0px] top-[0px] bg-[#101010]">
            {/*IME Jr*/}
            <div className="absolute w-[50px] h-[30px] left-[80px] top-[67px] font-['Gill_Sans_MT'] font-normal text-[20px] leading-[150%] flex items-center text-[#FFFFFF]">
                IME Jr
            </div>
            {/*Items*/}
            <div className="flex flex-row justify-end items-center p-[0px] gap-[48px] absolute w-[527px] h-[58px] right-[80px] top-[56px]">
                {/*Quem Somos*/}
                <a href="#"
                target="_blank"
                className="w-[116px] h-[30px] font-['Hind_Madurai'] font-normal text-[20px] font-medium leading-[150%] flex items-center text-white flex-none order-0 grow-0 hover:scale-[110%] transition-all duration-300"
                >
                    Quem Somos
                </a>
                {/*Serviços*/}
                <a href="#"
                target ="_blank"
                className="w-[72px] h-[30px] font-['Hind_Madurai'] font-normal text-[20px] font-medium leading-[150%] flex items-center text-white flex-none order-1 grow-0 hover:scale-[110%] transition-all duration-300"
                >
                    Serviços
                </a>
                {/*Equipe*/}
                <a href="#"
                target ="_blank"
                className="w-[60px] h-[30px] font-['Hind_Madurai'] font-normal text-[20px] font-medium leading-[150%] flex items-center text-white flex-none order-2 grow-0 hover:scale-[110%] transition-all duration-300"
                >
                    Equipe
                </a>
                {/*Instagram*/}
                <a href="https://www.instagram.com/imejr.usp/"
                target="_blank"
                className="box-border flex flex-row justify-center items-center gap-[8px] w-[135px] h-[58px] bg-[#101010] border border-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] flex-none order-3 grow-0 hover:bg-white hover:text-black hover:scale-[110%] transition-all duration-300"
                >
                    <span className="font-['Hind_Madurai'] font-medium text-[20px] leading-[150%] text-inherit">
                        Instagram
                    </span>
                </a>
            </div>
        </nav>
    );
}
