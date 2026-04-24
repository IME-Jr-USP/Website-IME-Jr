import { IconType } from "react-icons";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

interface ISocialMediaButton {
    icon: IconType;
    url: string;
    label: string;
}

function SocialMediaLi({ icon, url, label } : ISocialMediaButton) {
    return <li>
        {/* Adicionei um hover suave com a cor de placeholder para os ícones */}
        <a aria-label={label} href={url} target="_blank" rel="noopener noreferrer" className="hover:text-placeholder-default transition-colors">
            {icon({ size: 24 })}
        </a>
    </li>
}

export function Footer() {
    return (
        /* Trocada a borda para a variável do Figma */
        <footer className="flex flex-col mx-4 md:mx-8 border-t border-border-default pt-4 px-2 md:px-8 text-text-default">
            <div className="flex justify-between flex-wrap gap-8">
                <div className="flex flex-col gap-8 md:gap-16">
                    {/* Aplicada a fonte de título do Figma */}
                    <h2 className="font-titulo font-bold text-2xl">IME Jr</h2>
                    <ul className="flex gap-4">
                        <SocialMediaLi icon={FaFacebook} url="https://www.facebook.com/IMEJuniorUSP" label="Facebook" />
                        <SocialMediaLi icon={FaInstagram} url="https://www.instagram.com/imejr.usp" label="Instagram" />
                        <SocialMediaLi icon={FaLinkedin} url="https://www.linkedin.com/company/imejr" label="Linkedin" />
                        <SocialMediaLi icon={FaYoutube} url="https://www.youtube.com/@imejr7112" label="Youtube" />
                    </ul>
                </div>
                
                <div className="flex flex-col gap-2">
                    <h2 className="text-xl font-bold font-titulo">Contatos</h2>
                    {/* Aplicada a fonte de corpo e garantindo que o texto seja legível */}
                    <div className="font-corpo-pequeno text-sm md:text-base flex flex-col gap-1">
                        <p>contato@imejr.com | +55 11 3091-6241</p>
                        <p>R. do Matão, 1010 - Cidade Universitária, São Paulo</p>
                        <p className="opacity-70">CNPJ: 26.531.013/0001-80</p>
                    </div>
                </div>
            </div>

            <div className="text-center text-xs md:text-sm mt-8 pb-4 font-corpo-pequeno opacity-50">
                <p>Todos os direitos reservados &reg; Empresa Júnior de Informática, Matemática e Estatística, 2026</p>
            </div>
        </footer>
    );
}