// Seção de equipe

import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import avatar from "@/assets/avatar1.jpg";
import avatarPlaceholder from "@/assets/placeholder.png";

type TeamGroup = {
    title: string;
    members: Member[];
};

const teamData: TeamGroup[] = [
    {
        title: "RECURSOS HUMANOS",
        members: [
            { nome: "Ana Carolina Souza", nucleo: "People & Culture", cargo: "Gerente de RH", description: "Responsável pela gestão de talentos, cultura organizacional e desenvolvimento de pessoas.", foto: avatar, linkedin: "https://linkedin.com/in/username", link: "https://link.com/username" },
            { nome: "Lucas Fernandes", nucleo: "People & Culture", cargo: "Analista de RH", description: "Atua no recrutamento e seleção, garantindo a atração dos melhores talentos.", foto: avatar, linkedin: "https://linkedin.com/in/username", link: "https://link.com/username" },
            { nome: "Mariana Alves", nucleo: "People & Culture", cargo: "Business Partner", description: "Apoia líderes na tomada de decisão estratégica relacionada a pessoas.", foto: avatar, linkedin: "https://linkedin.com/in/username", link: "https://link.com/username" },
            { nome: "Rafael Costa", nucleo: "People & Culture", cargo: "Analista de Treinamento", description: "Desenvolve programas de capacitação e treinamento interno.", foto: avatar, linkedin: "https://linkedin.com/in/username", link: "https://link.com/username" },
        ],
    },
    {
        title: "JURÍDICO/FINANCEIRO",
        members: [
            { nome: "Juliana Martins", nucleo: "Jurídico", cargo: "Advogada Sênior", description: "Responsável por contratos, compliance e suporte jurídico estratégico.", foto: avatar, linkedin: "https://linkedin.com/in/username", link: "https://link.com/username" },
            { nome: "Bruno Ribeiro", nucleo: "Financeiro", cargo: "Analista Financeiro", description: "Atua no controle financeiro, fluxo de caixa e análise de indicadores.", foto: avatar, linkedin: "https://linkedin.com/in/username", link: "https://link.com/username" },
            { nome: "Camila Duarte", nucleo: "Financeiro", cargo: "Controller", description: "Responsável pelo planejamento financeiro e gestão orçamentária.", foto: avatar, linkedin: "https://linkedin.com/in/username", link: "https://twitter.com/username" },
        ],
    },
];

interface Member {
    nome: string;
    nucleo: string;
    cargo: string;
    description: string;
    foto?: StaticImageData;
    linkedin?: string;
    link?: string;
}

function TeamCard({ nome, nucleo, cargo, description, foto, linkedin, link }: Member) {
    return (
        <div className="bg-black border border-gray-700 p-4 sm:p-6 transition-all duration-300 hover:border-gray-500 hover:shadow-xl hover:shadow-black/50 hover:-translate-y-1 flex flex-col h-full">
            {/* Header com nome e foto */}
            <div className="flex items-start justify-between mb-4 gap-3 sm:gap-4">
                <div className="flex-1 min-w-0">
                    <h4 className="text-white font-semibold text-sm sm:text-base leading-tight mb-1 break-words">
                        {nome}
                    </h4>
                </div>

                {/* Foto */}
                <div className="flex-shrink-0">
                    <Image
                        src={foto || avatarPlaceholder}
                        alt={nome}
                        width={64}
                        height={64}
                        className="w-14 h-14 sm:w-16 sm:h-16 object-cover bg-gray-800 transition-transform duration-300 hover:scale-105"
                    />
                </div>
            </div>

            {/* Núcleo e Cargo */}
            <div className="mb-3">
                <p className="text-gray-300 text-xs sm:text-sm break-words">Núcleo: {nucleo}</p>
                <p className="text-gray-300 text-xs sm:text-sm break-words">Cargo: {cargo}</p>
            </div>

            {/* Descrição */}
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 break-words">
                {description}
            </p>

            {/* Links sociais */}
            <div className="flex gap-2 flex-wrap mt-auto">
                <Link
                    href={linkedin || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 sm:px-4 py-2 border border-gray-600 text-white text-xs sm:text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                    Link
                </Link>
                <Link
                    href={link || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 sm:px-4 py-2 bg-blue-600 text-white text-xs sm:text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                    Linkedin
                </Link>
            </div>
        </div >
    );
}

export default function TeamSection() {
    return (
        <section className="px-4 sm:px-8 lg:px-26 py-12 sm:py-16 text-white select-none overflow-x-hidden">
            <h2 className="text-2xl sm:text-4xl font-semibold mb-8 sm:mb-16 break-words">Equipe</h2>

            <div className="space-y-12 sm:space-y-16">
                {teamData.map((group) => (
                    <div key={group.title}>
                        {/* Título da subseção */}
                        <h3 className="text-xl sm:text-3xl tracking-wide sm:tracking-widest text-white mb-4 sm:mb-6 break-words">
                            {group.title}
                        </h3>

                        {/* Grid */}
                        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {group.members.map((member, index) => (
                                <TeamCard
                                    key={index}
                                    nome={member.nome}
                                    nucleo={member.nucleo}
                                    cargo={member.cargo}
                                    foto={member.foto}
                                    description={member.description}
                                    linkedin={member.linkedin}
                                    link={member.link}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}