/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/*/.{js,ts,jsx,tsx,mdx}",
    "./components/*/.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     colors: {
        // Cores com nome oficial no Figma
        'fundo-default': '#101010', /*Cinza do fundo*/
        'text-default': '#FFFFFF', /*Branco padrao*/
        'border-default': '#5E5E5E', /*Cinza dos elemtos*/
        'placeholder-default': '#D9D9D9', /*Cinza do fundo de placeholder*/

        // Cores "soltas" que tem no figma (mapeadas por utilidade)
        'azul-dados': '#357DED',
        'vermelho-comp': '#D62839',
        'amarelo-edu': '#FFDA33',
        
        // A cor 101010 com 0% de opacidade
        'transparente-dark': 'rgba(16, 16, 16, 0)',
      },
      fontFamily: {
        'header': ['imejr', 'sans-serif'], 
        'titulo': ['"Gil Sans MT"', 'sans-serif'],
        'corpo-pequeno': ['"Hind Madurai"', 'sans-serif'],
        'newsletter': ['Inter', 'sans-serif'],
        'card-funcionario': ['"M3 Label Large"', 'sans-serif'],
        'fale-conosco': ['"Alegreya Sans SC"', 'sans-serif'],
        'tabela': ['"Body Base"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}