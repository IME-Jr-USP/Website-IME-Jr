interface IServicesSectionProps {
    title: string;
    color: string;
    text: string;
}

export function CoreService({ title, color, text }: IServicesSectionProps) {
    return (
        <div className="flex flex-col w-full max-w-5xl">
            <h2 className="text-3xl leading-tight tracking-tight">{title.toUpperCase()}</h2>
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-5 md:gap-5 mt-5 mb-5">
                {/* DIV Temporária enquanto não há o SVG */}
                <div className="border-1 h-50 w-50"
                    style={{ borderColor: color }} />
                
                <div>
                    <p className="whitespace-pre-line text-white text-sm sm:text-base leading-relaxed">
                        {text}
                    </p>
                </div>

                <div />

                <div className="flex gap-4">
                    <button className="py-2 px-4 cursor-pointer w-fit text-sm active:scale-95 transition-all duration-150 hover:brightness-125"
                        style={{ backgroundColor: color }} >
                        Contato
                    </button>
                    <button className="border-1 px-4 cursor-pointer w-fit text-sm active:scale-95 transition-all duration-150 hover:border-gray-400">
                        Confira nossos trabalhos
                    </button>
                </div>
            </div>
        </div>
    );
}

