import Image from "next/image";
import logo from "@/assets/logo-nobg.png";

export function Hero_Section() {
    return (
        <section className="select-none bg-[#0b0b0b] min-h-screen flex items-center justify-center px-6 py-20 md:py-0">
            <div className="flex flex-col-reverse md:flex-row w-full max-w-6xl">

                {/* Lado esquerdo */}
                <div className="flex-1">
                    <div className="p-10 sm:p-14 md:p-20 h-full flex flex-col justify-center gap-8">

                        <h1 className="text-white text-5xl sm:text-6xl md:text-7xl font-semibold leading-tight tracking-tight">
                            #VemSer<br className="md:hidden" />Gigante
                        </h1>

                        <p className="text-neutral-400 text-sm sm:text-base leading-relaxed w-full">
                            A <span className="text-yellow-400 font-medium">IME Jr</span> é a empresa júnior do Instituto de Matemática,
                            Estatística e Ciência da Computação da Universidade de São Paulo (USP).
                            Formada por estudantes comprometidos com inovação e impacto, oferecemos
                            soluções nas áreas de{" "}
                            <span className="text-yellow-400 font-medium">Computação, Educação e Análise de Dados</span>,
                            sempre entregando a excelência da USP nos projetos desenvolvidos.
                        </p>

                        <button className="cursor-pointer w-fit bg-yellow-400 text-black text-sm font-semibold px-7 py-3 hover:bg-yellow-300 active:scale-95 transition-all duration-150">
                            Contato
                        </button>

                    </div>
                </div>

                {/* Lado direito */}
                <div className="flex-1 flex items-center justify-center p-10 md:p-16">
                    <Image
                        src={logo}
                        alt="Logo IME Jr"
                        className="w-full max-w-sm md:max-w-md opacity-90"
                    />
                </div>

            </div>
        </section>
    );
}