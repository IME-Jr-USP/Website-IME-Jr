import { CoreService } from "@/components/core-service";

export function ServiceSection() {
    return (
        <section className="flex flex-col gap-7 items-center justify-center bg-[#0b0b0b] px-15 pb-10 sm:px-20">
            <div className="w-full max-w-5xl">
                <h2 className="text-3xl leading-tight tracking-tight">
                    Serviços
                </h2>
            </div>
            <div className="flex flex-col gap-20">
                <CoreService title="Computação" color="#D62839" text={`Nosso time de Computação possui experiência no desenvolvimento de Sites, Sistemas de Informação e Softwares. \n\n Nossa equipe trabalha principalmente com aplicação de metodologias de User eXperience e User Interface, bem como discussões e aperfeiçoamento em JavaScript, PHP, HTML, CSS e Wordpress. \n\n Ideal para pessoas físicas e jurídicas estabelecerem e consolidares visibilidade no meio digital ou para personalização de Sistemas e para organização e documentação de dados.`} />
                <CoreService title="Análise de Dados" color="#357DED" text={`Nosso time de Dados atua dando visibilidade, gerando insights e resolvendo problemas, sejam eles de caráter Empresarial ou Acadêmico. \n\n Trabalhamos com Python, R, SQL, Dashboards, Machine Learning, Inteligência Artificial, e Estatística. \n\n Geração de insights, análises estatísticas, geração de métricas, visualizações em cima de bases de dados, melhoramento da visualização de dados para todos os setores da empresa, construção de modelos de Machine Learning para previsão de números com base em dados estruturados.`} />
                <CoreService title="Educação" color="#FFDA33" text={`Nosso time de Educação é o responsável por desenvolver projetos que atendam a demanda das instituições educacionais, de estudantes do ensino básico e pré-vestibulares, no que diz respeito ao ensino de matemática e ao uso de recursos tecnológicos na sala de aula. \n\n Nossa equipe trabalha com editoração de Questões, materiais didáticos, divulgação matemática e com  o cursinho Pré vestibular IMEnsina.`} />
            </div>
        </section>
    );
}