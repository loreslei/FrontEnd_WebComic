import padroes from "./svgs";

let sonho = [
    {   
        id: 'father',
        nome: "Pai",
        url_imagem: '/images/beds/father.png',
        quadrinho: ['/images/younger_daughter/01.jpg', '/images/younger_daughter/02.jpg'],
        color_bg: 'bg-[#cfeec4]',
        color_btn: 'bg-[#9ace79]',
        color_btn_hover: 'hover:bg-[#7FC254]',
        svg: padroes.glasses,

    },
    {   
        id: 'mother',
        nome: "Mãe",
        url_imagem: '/images/beds/mother.png',
        quadrinho: ['/images/younger_daughter/01.jpg', '/images/younger_daughter/02.jpg'],
        color_bg: 'bg-[#ffd2db]',
        color_btn: 'bg-[#f33b55]',
        color_btn_hover: 'hover:bg-[#E61E3C]',
        svg: padroes.highHeel,

    },
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
        id: 'daughter',
        nome: "Filha",
        url_imagem: '/images/beds/daughter.png',
        quadrinho: ['/images/daughter/01.jpeg', '/images/daughter/02.jpg'],
        color_bg: 'bg-[#c6bcf810]',
        color_btn: 'bg-[#8772f3]',
        color_btn_hover: 'hover:bg-[#6E57E8]',
        svg: padroes.headphones,
    },
    
    {
        id: 'younger_daughter',
        nome: "Caçulinha",
        url_imagem: '/images/beds/younger_daughter.png',
        quadrinho: ['/images/younger_daughter/01.jpg', '/images/younger_daughter/02.jpg'],
        color_bg: 'bg-[#f8cde1]',
        color_btn: 'bg-[#f19bc2]',
        color_btn_hover: 'hover:bg-[#E78BBA]',
        svg: padroes.teddy,
    }

];

export default sonho;