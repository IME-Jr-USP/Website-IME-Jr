export function Header() {
    return (
        <header
            className="w-full bg-[#101010] px-4 py-4 text-white sm:px-6 md:px-8"
        >
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="text-lg font-semibold leading-tight sm:text-xl">IME Jr</div>
                
                <nav>
                    <ul className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-end sm:gap-5 md:gap-7">
                        <li>
                            <a
                                href="#"
                                className="inline-flex rounded-sm px-1 py-1 text-base font-medium transition-colors duration-200 hover:text-neutral-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
                            >
                                Quem Somos
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="inline-flex rounded-sm px-1 py-1 text-base font-medium transition-colors duration-200 hover:text-neutral-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
                            >
                                Serviços
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="inline-flex rounded-sm px-1 py-1 text-base font-medium transition-colors duration-200 hover:text-neutral-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
                            >
                                Equipe
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://www.instagram.com/imejr.usp/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-md border border-white px-3 py-1.5 text-base font-semibold transition-colors duration-200 hover:bg-white hover:text-[#101010] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
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
