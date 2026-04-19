interface ICoreServicesProps {
    serviceNumber: number;
    title: string;
    color: string;
    text: string;
}

export function CoreService({ serviceNumber, title, color, text }: ICoreServicesProps) {
    return (
        <div className="flex flex-col items-center sm:items-start w-full max-w-5xl">
            {/* Adicionada a fonte de título */}
            <h2 className="text-3xl leading-tight tracking-tight text-center font-titulo">{title.toUpperCase()}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-[212px_1fr] gap-5 mt-5 mb-5">
                <div className="flex justify-center md:block">
                    <svg className="w-[212px] h-[362px]" viewBox="0 0 265 452" xmlns="http://www.w3.org/2000/svg">
                        <polygon 
                            points="40,30 225,130 225,380 40,280" 
                            fill="none" 
                            stroke={color} 
                            strokeWidth="4" 
                            strokeLinejoin="miter"
                        />
                    </svg>
                </div>
                
                <div>
                    {/* Trocado text-white pelo padrão text-text-default */}
                    <p className="whitespace-pre-line text-text-default text-sm sm:text-base leading-relaxed font-corpo-pequeno">
                        {text}
                    </p>
                </div>

                <div />

                <div className="flex flex-col sm:justify-between sm:flex-row gap-5">
                    <div className="flex gap-4">
                        <button className="py-2 px-4 cursor-pointer w-fit text-sm active:scale-95 transition-all duration-150 hover:brightness-125"
                            style={{ backgroundColor: color }} >
                            Contato
                        </button>
                        {/* Adicionada a cor de borda padrão */}
                        <button className="border-1 border-border-default px-4 cursor-pointer w-fit text-sm active:scale-95 transition-all duration-150 hover:border-gray-400">
                            Confira nossos trabalhos
                        </button>
                    </div>
                    
                    {/* Substituído o cinza #5E5E5E por border-default */}
                    <div className="flex items-center gap-2 text-[0.4em]">
                        <div className={`bg-border-default p-1 rounded-4xl h-3 w-3 flex items-center justify-center ${serviceNumber === 1 ? 'opacity-100' : 'opacity-50'}`}>1</div>
                        <div className={`bg-border-default p-1 rounded-4xl h-3 w-3 flex items-center justify-center ${serviceNumber === 2 ? 'opacity-100' : 'opacity-50'}`}>2</div>
                        <div className={`bg-border-default p-1 rounded-4xl h-3 w-3 flex items-center justify-center ${serviceNumber === 3 ? 'opacity-100' : 'opacity-50'}`}>3</div>
                    </div>
                </div>
            </div>
        </div>
    );
}






