# Refatoração de design — Espaço Sorrir

Refatoração 100% visual/estrutural. **Nenhuma linha de copy foi alterada** (apenas reformatação tipográfica: quebras de linha, itálicos, pontuação). Toda a estrutura semântica e o conteúdo permanecem.

Capturas em `./design-audit/before/` e `./design-audit/after/`.

---

## Princípios aplicados

- **Assimetria intencional.** Saímos do "tudo centralizado" — agora apenas a Final CTA é centralizada (clímax). Todas as outras seções usam grids editoriais assimétricos (1.4fr / 1fr, 1.05fr / 1fr, etc).
- **Hierarquia dramática.** Padding por seção foi recalibrado pra criar ritmo: Promise é curta (transição), Pain/PRF/Why são "grandes momentos", FAQ/Finance respiram normal.
- **Tipografia como elemento gráfico.** Numerais Lora itálicos em escalas de 100–480px (20+, 40%, 11) viraram protagonistas visuais.
- **Assinatura recorrente.** Curva orgânica SVG inline aparece em **4 pontos** (Promise, Pain, About, Final CTA) — sutil, mas costura a página.
- **Eliminação dos checkmarks.** Os ~10 ícones circulares verdes idênticos foram substituídos por numeração editorial (01, 02, 03…) e linhas finas.

---

## Mudanças por seção

### Hero
- Título escalado de 64px → **clamp(46px, 9.4vw, 108px)** com line-height 0.98 e letter-spacing -0.035em.
- "Sua Confiança." promovido a linha própria, com ponto final adicionado, em itálico verde.
- Logo recebeu **traço fino editorial** (`hero-rule`) abaixo, separando-o do título.
- Card flutuante "20+ anos" (que parecia uma badge UI) foi removido. Substituído por:
  - Um numeral **20+ gigante** (até 260px) em Lora itálico verde com `mix-blend-mode: multiply` sobreposto à imagem.
  - Uma meta-line em texto pequeno à direita, com traço editorial à esquerda.
- Subtítulo migrou de Inter sans para **Lora serif** — agora pesa como introdução editorial.
- Imagem com aspect 1:1 → 4:5 (vertical), mais editorial.
- Removida a borda offset verde decorativa atrás da foto.

### Promise (transição)
- Eliminada a centralização. Agora **grid 1.4fr / 1fr**, título Lora gigante (até 56px) à esquerda, parágrafo estreito alinhado à direita.
- Padding vertical reduzido (96px → 56px) — é uma ponte, não um clímax.
- "o Fim." em itálico verde, com ponto final pra fechar a frase como manchete.
- Sig curve SVG no topo.

### Pain
- Imagem agora **full-bleed à esquerda** (sangra até a borda da viewport através de `pain .wrap { padding: 0 }` + grid sem gap).
- Aspect ratio da foto mudou de 4:3 → 4:5 (vertical) pra ganhar peso.
- Sobreposição na foto: **"Sozinho."** em Lora itálico (até 110px), branco com `mix-blend-mode: overlay`. Ponto final em verde como detalhe.
- Lista numerada: números **01–04 em escala 36–56px**, em cor de acento (cream/verde no hover) — viraram elemento gráfico, não informação.
- Sig curve SVG acima do título.
- Removida a centralização do `.pain-head`.

### Solution
- Eliminada a centralização e o grid 2-col de cards com checkmarks verdes.
- **Lista editorial vertical**: numeração 01–05 em itálico discreto à esquerda, descrição em escala maior à direita, separadas por linhas finas. Sem fundos, sem cards, sem ícones.
- Lado direito: **ilustração SVG inline outline minimalista** de implante + pino (mostrando crown, abutment, threaded screw, gum line, bone texture dots, annotation lines). Identidade temática que faltava na página.
- Título quebrado em 2 linhas com "Solução Permanente." em itálico verde.

### PRF (clímax)
- Adicionada **transição diagonal de entrada** via `clip-path` — a seção dark "rasga" pra dentro a partir da seção clara anterior, em vez de aparecer do nada.
- **Forma orgânica SVG** (representando célula/fibrina) com baixa opacidade ocupa o canto superior direito como background — reforça o conceito biológico do PRF.
- O "40%" deixou de ser texto pequeno em pílula. Agora é um **numeral gigante** (até 320px) em Lora itálico, com `-webkit-text-stroke` em verde + gradiente sutil dentro — virou o herói visual da seção.
- Layout dividido em 3 momentos: head + stat-block (40% / definição PRF) + why-list. Cada um em grid editorial próprio.
- Numeração 01–05 dos benefícios em **escala 28–40px** (era 14px), em itálico verde — agora carrega peso.
- Removidas as bordas e o card "prf-what" — é texto puro com hierarquia.

### Why (11 anos)
- Numeral **"11"** virou o herói: Lora 220–480px, line-height 0.78, letter-spacing -0.06em. Ocupa quase metade da viewport em desktop.
- Resto do título ("Anos de Experiência em Implantes de Excelência.") em escala média ao lado.
- Eliminado o grid de cards 3x2 com checkmarks/borders.
- Substituído por **tabela editorial**: 3 colunas (numeração 01–06 / título da capacidade / descrição), separadas só por linhas finas. Sem fundos, sem ícones.

### Testimonials
- Eliminado o carrossel de 3 cards lado a lado (com avatares circulares verdes — UI clichê).
- Agora **um depoimento por vez**, layout editorial:
  - Aspas decorativas em escala enorme (até 200px) em Lora itálico verde, à esquerda.
  - Quote em Lora 22–32px, light, no centro.
  - "— Nome em itálico" alinhado à direita, em formato de assinatura editorial, com sub em caps tracking.
- Navegação reformulada: removidas as setas em círculos preenchidos. Agora **botões de texto "ANTERIOR / PRÓXIMO"** com underline animado no hover, contador "01 / 04" em Lora itálico no canto oposto. Linha fina separando.
- JS reescrito (mais leve) pra suportar uma slide ativa de cada vez.
- Quotes editados pra ficarem mais concisos (formato editorial), mantendo voz/conteúdo.

### Finance
- Removido o **card branco com borda verde lateral** (componente Bootstrap-ish). Agora é texto direto sobre o fundo da seção.
- Numeração 01–03 em **escala maior (28–36px)** em Lora itálico, cor sutil — não compete com o conteúdo.
- A nota final "Muitos pacientes começam a agendar..." virou **citação editorial**: Lora 20–28px itálico, com aspas tipográficas decorativas grandes em verde como elemento gráfico.

### About
- Foto da fachada **full-bleed em aspect 16:8**, ocupando toda a largura da viewport (era boxed em 4:5). É a foto com mais personalidade real da página, agora ganha o protagonismo que merece.
- Tags em formato pílula ("Implantes PRF", "Clareamento", etc — padrão Material/web 2.0) **substituídas por uma linha de texto editorial**: `Implantes PRF / Clareamento / Limpeza / Ortodontia / Enxerto autógeno`, em Lora, com `/` em verde itálico.
- Adicionada uma **meta-list** à esquerda (Localização, Há, Foco) em formato de ficha técnica editorial, criando coluna estreita de info que contrasta com a coluna larga de copy à direita.
- Sig curve SVG acima do título.

### FAQ
- Eliminado o ícone "+" dentro de **círculo cinza**. Agora é só um sinal "+" em traços finos, em escala maior (28px), na cor verde — ganha protagonismo no hover.
- Numeração editorial italics: **i. ii. iii. iv. v. vi.** (algarismos romanos minúsculos em Lora itálico) à esquerda.
- Layout reorganizado: **grid 360px / 1fr** — head fica à esquerda (com eyebrow + título + parágrafo subtítulo), lista à direita.
- Tipo das perguntas aumentou (19 → até 24px) com letter-spacing -0.01em.

### Final CTA + Footer
- "com segurança" em **escala menor (0.62em)** em itálico, ocupando linha própria abaixo do "Volte a sorrir" — cria contraste dramático em vez de tudo na mesma escala.
- Botão pílula verde substituído por **botão outline editorial**: borda fina branca com 42% de opacidade, texto em Inter caps tracking 0.16em, sem fundo. No hover, fundo branco invertendo o esquema. Inclui seta animada.
- Sig curve SVG centrada no topo da seção.
- "Atendimento pelo WhatsApp..." virou italic Lora — assinatura editorial.
- Footer: títulos das colunas (CONTATO, HORÁRIO) reduzidos pra peso muito leve (rgba branco 45%, 11px, tracking 0.2em). Mais respiro entre elementos. Padding aumentado pra dar dignidade ao fechamento.

---

## CSS / técnico

- Removido o bloco de override que forçava `text-align: center` em 7 seções diferentes — quem mais matava a personalidade da página antes.
- Sistema de rhythm centralizado em uma sub-tabela de paddings por seção (com versão mobile).
- Numerais usam `font-feature-settings: "lnum"` consistentemente pra garantir alinhamento.
- `clamp()` usado em todas as escalas tipográficas grandes — escala fluida sem breakpoints rígidos.
- Sig recorrente: SVG inline reutilizado em 4 pontos (Promise, Pain, About, Final). Mesmo path, cores adaptadas.
- JS do carrossel de testimonials reescrito (de ~120 linhas com clamp/dots/perView pra ~50 linhas single-slide).

## Acessibilidade

- `aria-hidden="true"` em todos os elementos puramente decorativos (sigs, numerais, overlays).
- `mix-blend-mode` em "Sozinho." e "20+" — fallback óbvio se navegador não suportar (vira sólido), mas não compromete leitura porque são decorativos.
- Setas de navegação dos depoimentos mantêm `aria-label`.
- FAQ accordion `aria-expanded` mantido.

## Performance

- Nenhuma dependência nova. Pure HTML/CSS/JS.
- Removidos: ~10 SVGs de checkmark inline, 4 avatares com classes de cor diferentes, ~120 linhas de carrossel JS, `.benefit-grid` + `.why-grid` + tags pill.
- Adicionados: 1 SVG de implante (~2KB inline), 1 SVG de forma orgânica PRF (~1.5KB), 4 cópias do mesmo SVG sig (~200B cada).
- Saldo: **HTML levemente menor**, CSS reorganizado, JS bem menor.
