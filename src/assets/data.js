import padroes from "./svgs";

let sonho = [
    {   
        id: 'son',
        nome: "Filho",
        url_imagem: '/images/beds/son.png',
        quadrinho: ['/images/younger_daughter/01.jpg', '/images/younger_daughter/02.jpg'],
        color_bg: 'bg-[#faccb3]',
        color_btn: 'bg-[#ea8b58]',
        color_btn_hover: 'hover:bg-[#E6733E]',
        svg: padroes.basketball,

    },

    {
        id: 'younger_daughter',
        nome: "Caçulinha",
        url_imagem: '/images/beds/younger_daughter.png',
        quadrinho: ['/images/younger_daughter/01.jpg', '/images/younger_daughter/02.jpg'],
        color_bg: 'bg-[#f8cde1]',
        color_btn: 'bg-[#f19bc2]',
        color_btn_hover: 'hover:bg-[#E78BBA]',
        svg: padroes.tulip,
    },

    {
        id: 'daughter',
        nome: "Filha",
        url_imagem: '/images/beds/daughter.png',
        quadrinho: ['/images/younger_daughter/01.jpg', '/images/younger_daughter/02.jpg'],
        color_bg: 'bg-[#c6bcf8]',
        color_btn: 'bg-[#8772f3]',
        color_btn_hover: 'hover:bg-[#6E57E8]',
        svg: padroes.headphones,
    }
];

export default sonho;