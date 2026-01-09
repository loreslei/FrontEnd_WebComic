const tulipPattern = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24'%3E%3Cpath fill='%23ec4899' d='M12 2c-4 0-7 3-7 7 0 2 1 4 3 5v6c0 1 1 2 2 2s2-1 2-2v-6c2-1 3-3 3-5 0-4-3-7-7-7z'/%3E%3Cpath fill='none' stroke='%2322c55e' stroke-width='2' d='M12 14v8'/%3E%3Cpath fill='%2322c55e' d='M12 18c-2 0-4-1-4-3s2-3 4-3 4 1 4 3-2 3-4 3z'/%3E%3C/svg%3E`;

const basketballPattern = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24' fill='none' stroke='%23c2410c' stroke-width='1' stroke-linecap='round' stroke-linejoin='round' opacity='0.4'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M5.6 5.6c.9-1.2 2-2.2 3.4-3'/%3E%3Cpath d='M18.4 5.6c-.9-1.2-2-2.2-3.4-3'/%3E%3Cpath d='M5.6 18.4c.9 1.2 2 2.2 3.4 3'/%3E%3Cpath d='M18.4 18.4c-.9 1.2-2 2.2-3.4 3'/%3E%3Cpath d='M12 2v20'/%3E%3Cpath d='M2 12h20'/%3E%3Cpath d='M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2'/%3E%3Cpath d='M12 2a10 10 0 0 1 10 10'/%3E%3Cpath d='M12 22a10 10 0 0 1-10-10'/%3E%3C/svg%3E`;

const headphonesPattern = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24' fill='none' stroke='%236366f1' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' opacity='0.4'%3E%3Cpath d='M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2Z'/%3E%3Cpath d='M18 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2Z'/%3E%3Cpath d='M4 14v-3a8 8 0 0 1 16 0v3'/%3E%3C/svg%3E`;

const padroes = {
  tulip: `url("${tulipPattern}")`,
  basketball: `url("${basketballPattern}")`,
  headphones: `url("${headphonesPattern}")`,
};

export default padroes;
