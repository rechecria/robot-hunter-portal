# Robot Hunter Portal

Portal de análise e pesquisa sobre veículos autônomos agrícolas — o panorama global da robótica no campo.

## Stack

- **React 19** + Vite
- **Tailwind CSS v4** — design system "Precision Terrain"
- **Recharts** — visualização de dados de mercado
- **Framer Motion** — animações e transições
- **Lucide React** — ícones

## Dados

- 55 empresas mapeadas em 21 países
- 33 veículos autônomos catalogados (tratores, pulverizadores, colheitadeiras, florestais)
- Projeções de mercado 2024–2035 ($56.3B)
- Análise de pain points, tendências e regulamentação

## Deploy

```bash
npm install
npm run build
npx vercel deploy --prod
```

Ou conecte este repositório ao Vercel via Git Integration para deploys automáticos.

## Estrutura

```
src/
  App.jsx       — SPA principal com 8 seções interativas
  data.js       — Dados extraídos do cofre Obsidian Robot Hunter
  index.css     — Tema Precision Terrain (Tailwind v4)
```

## Licença

Projeto de pesquisa privado — Robot Hunter Research Vault.
