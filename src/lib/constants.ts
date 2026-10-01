// ============================================================
// Constantes centrais do site RT Caixa de Direção
// ============================================================

export const SITE_NAME   = 'RT Caixa de Direção';
export const WA_NUMBER   = '5598981077919';
export const PHONE_DISPLAY = '(98) 98107-7919';
export const INSTAGRAM   = 'rt_caixa_de_direcao';
export const INSTAGRAM_URL = 'https://www.instagram.com/rt_caixa_de_direcao/';

export const ADDRESS_STREET    = 'Av. Mahiba Azar, nº 126-O';
export const ADDRESS_DISTRICT  = 'Olho d\'Água';
export const ADDRESS_CITY      = 'São Luís – MA';
export const ADDRESS_ZIP       = '65065-250';
export const ADDRESS_FULL      = `${ADDRESS_STREET}, ${ADDRESS_DISTRICT} – ${ADDRESS_CITY}, ${ADDRESS_ZIP}`;

export const HOURS_WEEKDAY     = 'Seg – Sex: 8h–12h e 14h–18h';
export const HOURS_SATURDAY    = 'Sábado: 8h–12h';

// ============================================================
// Links de WhatsApp com mensagens pré-preenchidas por seção
// (rastreabilidade de origem do contato)
// ============================================================

function waLink(message: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_LINKS = {
  hero:    waLink('Olá! Vi o site e quero saber mais sobre a caixa de direção do meu carro.'),
  sintoma: waLink('Olá! Estou com um sintoma na direção e quero um diagnóstico.'),
  reforma: waLink('Olá! Quero um orçamento para reforma da minha caixa de direção.'),
  venda:   waLink('Olá! Quero saber sobre caixas de direção disponíveis no estoque.'),
  b2b:     waLink('Olá! Sou mecânico/oficina e quero saber sobre parceria para caixas de direção.'),
  faq:     waLink('Olá! Tenho uma dúvida sobre o serviço de caixa de direção.'),
  fab:     waLink('Olá! Vi o site e quero falar sobre meu carro.'),
} as const;

// ============================================================
// Links de rota (Google Maps e Apple Maps)
// ============================================================

const DEST_ENCODED = encodeURIComponent(
  'Av Mahiba Azar 126-O, Olho d\'Água, São Luís, MA, 65065-250, Brasil'
);

export const MAPS_ROUTE_GOOGLE = `https://www.google.com/maps/dir/?api=1&destination=${DEST_ENCODED}`;
export const MAPS_ROUTE_APPLE  = `http://maps.apple.com/?daddr=${DEST_ENCODED}`;

// Embed do mapa (sem API Key — busca por endereço)
export const MAPS_EMBED_URL =
  `https://maps.google.com/maps?q=${DEST_ENCODED}&output=embed&z=16`;
