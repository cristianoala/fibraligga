# Ligga Telecom - Landing Page

Site profissional de apresentação de planos de internet de fibra óptica para a **Ligga Telecom**.

## 🎨 Características

- **Design Moderno**: Interface limpa e responsiva com cores laranja e preto
- **Planos Destacados**: 500 Mega (R$ 99,00), 600 Mega (R$ 119,90), 800 Mega (R$ 149,90)
- **Integração WhatsApp**: Botões flutuantes para contato direto
- **Performance Otimizada**: Build de produção minificado e otimizado
- **Mobile First**: Totalmente responsivo para todos os dispositivos
- **SEO Friendly**: Estrutura semântica e meta tags

## 🚀 Tecnologias Utilizadas

- **React 19**: Framework JavaScript moderno
- **TypeScript**: Tipagem estática para maior segurança
- **Tailwind CSS**: Framework de CSS utilitário
- **Vite**: Build tool ultra-rápido
- **Express**: Servidor Node.js para produção
- **Lucide React**: Ícones profissionais

## 📦 Estrutura do Projeto

```
ligga_telecom_landing/
├── client/                 # Aplicação React
│   ├── src/
│   │   ├── pages/         # Páginas principais
│   │   ├── components/    # Componentes reutilizáveis
│   │   ├── contexts/      # Context API
│   │   ├── hooks/         # Custom hooks
│   │   ├── lib/           # Utilitários
│   │   ├── index.css      # Estilos globais
│   │   └── main.tsx       # Entrada da aplicação
│   └── index.html
├── server/                # Servidor de produção
│   └── index.ts
├── shared/                # Código compartilhado
├── dist/                  # Build de produção
├── vercel.json           # Configuração Vercel
├── netlify.toml          # Configuração Netlify
└── package.json
```

## 🛠️ Instalação Local

### Pré-requisitos
- Node.js 22+
- pnpm (gerenciador de pacotes)

### Passos

1. **Clone o repositório**
```bash
git clone <seu-repositorio>
cd ligga_telecom_landing
```

2. **Instale as dependências**
```bash
pnpm install
```

3. **Execute em desenvolvimento**
```bash
pnpm run dev
```

4. **Acesse no navegador**
```
http://localhost:3000
```

## 🏗️ Build para Produção

```bash
pnpm run build
```

Isso gerará:
- `dist/public/` - Arquivos estáticos otimizados
- `dist/index.js` - Servidor Node.js compilado

## 📱 Seções do Site

### 1. **Navegação**
- Logo da Ligga Telecom
- Botão "Fale Conosco" com link WhatsApp

### 2. **Hero Section**
- Título principal com destaque em laranja
- Descrição do serviço
- Botões de CTA (Call to Action)
- Imagem de fundo com efeito de opacidade

### 3. **Planos**
- 3 planos de internet com preços atualizados
- Plano 600 Mega destacado como "Mais Popular"
- Lista de features para cada plano
- Botões para contratar

### 4. **Benefícios**
- Velocidade Ultra
- Estabilidade Garantida
- Suporte Dedicado
- Ícones e descrições

### 5. **Cobertura**
- Cidades atendidas (Curitiba, Araucária, Fazenda Rio Grande)
- Botão para verificar cobertura

### 6. **FAQ**
- Perguntas e respostas sobre os serviços
- Accordion interativo

### 7. **CTA Final**
- Chamada para ação final
- Botão WhatsApp

### 8. **Footer**
- Informações da empresa
- Links de planos e cobertura
- Dados de contato

### 9. **Botão Flutuante**
- WhatsApp flutuante no canto inferior direito

## 🎯 Cores

- **Primária (Preto)**: `#000000`
- **Accent (Laranja)**: `#FF6600`
- **Fundo**: `#FFFFFF`
- **Texto**: `#000000`

## 📞 Contato

- **WhatsApp**: (41) 98760-0220
- **Email**: contato@ligga.com.br

## 📄 Licença

Todos os direitos reservados © 2026 Ligga Telecom.

---

## 🚀 Deploy Permanente

Para colocar seu site online de forma permanente e gratuita, consulte o arquivo **DEPLOY_GUIDE.md** para instruções detalhadas sobre como fazer deploy na Vercel ou Netlify.

**Seu site está pronto para ir ao ar!** 🌍
