# Plataforma de Estudo Bíblico e Exegese Teológica (PWA / Web)

Aplicativo moderno, leve e responsivo para estudo bíblico profundo, exegese, hermenêutica, idiomas bíblicos originais, história e homilética.

---

## 📌 Status Real da Implementação

Este projeto foi construído sob um compromisso de **rigor epistemológico e honestidade técnica**:

### ✅ Recursos Implementados e Prontos para Uso Offline:
1. **Navegador Canônico dos 66 Livros:** Organização completa do Antigo e Novo Testamento com divisão por gêneros (Pentateuco, Históricos, Poéticos, Profetas, Evangelhos, Epístolas e Apocalipse), metadados de autoria, datação aproximada e temas centrais.
2. **Leitor Bíblico com Seleção Inteligente:** Seleção de versículo único, múltiplos versículos por toque/arraste ou capítulo inteiro.
3. **Pacote Demonstrativo de Perícopes Clássicas com Dados Autênticos:**
   - **João 1 (vv. 1–5, 14, 18):** Prólogo, divindade do Logos, interlinear grego com códigos Strong e morfologia.
   - **Romanos 8 (vv. 1–4, 28, 31, 38–39):** Justificação, não-condenação (*katakrima*), interlinear grego.
   - **Gênesis 1 (vv. 1–3, 26–27):** Criação *ex nihilo*, *Bereshit*, *Elohim*, interlinear hebraico.
   - **Salmo 23 (vv. 1–6):** *Yahweh Roi*, fidelidade pactual, interlinear hebraico.
   - **Isaías 53 (vv. 3–6):** O Servo Sofredor e a expiação vicária.
   - **Efésios 2 (vv. 8–10):** Salvação pela graça por meio da fé.
   - **Filipenses 2 (vv. 5–11):** Hino cristológico da Kénosis e exaltação.
   - **Atos 16 (vv. 25–31):** Paulo e Silas na prisão de Filipos.
4. **Bancada de Pesquisa Teológica em 11 Abas:**
   - 📖 Visão Geral
   - 🔎 Exegese Gramatical e Variantes Manuscritas
   - 🧠 Hermenêutica e Intenção Autoral
   - 🏛 História, Impérios e Descobertas Arqueológicas
   - 📚 Teologia Sistemática (10 Loci Dogmáticos)
   - 🔤 Idiomas Bíblicos (Grego / Hebraico)
   - 🔗 Referências Cruzadas
   - ⚖️ Debates e Correntes Interpretativas Divergentes
   - 💡 Aplicação Prática e Guia para Pequenos Grupos
   - 🎤 Homilética & Esboço de Sermão
   - 🤖 Consultor Teológico Estruturado (Base Local Offline)
5. **Matriz de Confiança Epistêmica:** Selos visuais para distinguir fatos textuais/históricos (🟢), debates acadêmicos (🟡) e hipóteses de reconstrução (🔴).
6. **Caderno de Anotações & Destaques:** Armazenamento local no dispositivo (*LocalStorage / IndexedDB*).
7. **PWA & Service Worker:** Instalação como aplicativo nativo e cache estático para funcionamento offline.
8. **Exportação:** Geração de arquivos Markdown (`.md`) para estudos e impressão/PDF via diálogo do navegador (`window.print`).

---

### ⚠️ O Que NÃO é Simulado e Requer Módulos Adicionais:
- **Bíblia Integral de 31.102 Versículos:** Capítulos fora do pacote de semente demonstram indisponibilidade explícita em vez de gerar versículos fictícios. A arquitetura suporta ingestão de bancos SQLite de domínio público ou APIs autorizadas.
- **Backend de LLM em Nuvem:** O consultor incluído opera com base heurística local estruturada. Para geração aberta em linguagem natural com modelos como OpenAI, Anthropic ou Ollama local, deve-se plugar a chave de API no backend.

---

## 🚀 Como Executar

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar servidor de desenvolvimento
npm run dev

# 3. Compilar versão de produção
npm run build
```
