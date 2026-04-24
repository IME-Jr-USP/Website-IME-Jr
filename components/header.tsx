export function Header() {
    return (
        <header
            /* Trocado bg-[#101010] por bg-fundo-default e text-white por text-text-default */
            className="w-full bg-fundo-default px-4 py-4 text-text-default sm:px-6 md:px-8 border-b border-border-default/20"
        >
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
                {/* Aplicada font-titulo para a marca */}
                <div className="text-lg font-titulo font-semibold leading-tight sm:text-xl">IME Jr</div>
                
                <nav>
                    {/* Aplicada font-header para os links de navegação */}
                    <ul className="flex flex-col gap-2 font-header sm:flex-row sm:flex-wrap sm:items-center sm:justify-end sm:gap-5 md:gap-7">
                        <li>
                            <a
                                href="#"
                                className="inline-flex rounded-sm px-1 py-1 text-base transition-colors duration-200 hover:text-placeholder-default focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-default/80"
                            >
                                Quem Somos
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="inline-flex rounded-sm px-1 py-1 text-base transition-colors duration-200 hover:text-placeholder-default focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-default/80"
                            >
                                Serviços
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="inline-flex rounded-sm px-1 py-1 text-base transition-colors duration-200 hover:text-placeholder-default focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-default/80"
                            >
                                Equipe
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://www.instagram.com/imejr.usp/"
                                target="_blank"
                                rel="noopener noreferrer"
                                /* Botão padronizado com as bordas e fundos do tema */
                                className="inline-flex items-center justify-center rounded-md border border-text-default px-3 py-1.5 text-base font-semibold transition-colors duration-200 hover:bg-text-default hover:text-fundo-default focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-default/80"
                            >
                                Instagram
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}