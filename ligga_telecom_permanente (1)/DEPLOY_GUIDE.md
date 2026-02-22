# 🚀 Guia de Deploy Permanente - Ligga Telecom

Seu site da **Ligga Telecom** está pronto para ser hospedado de forma **100% gratuita e permanente**! Siga este guia para colocar o site no ar em menos de 5 minutos.

---

## ✅ Opção 1: Deploy na **Vercel** (Recomendado - Mais Rápido)

A Vercel é a plataforma oficial para projetos Vite e oferece hospedagem gratuita com performance excelente.

### Passo 1: Criar uma conta na Vercel
1. Acesse: https://vercel.com
2. Clique em **"Sign Up"**
3. Escolha **"Continue with GitHub"** (ou outra opção que preferir)
4. Autorize a Vercel a acessar sua conta

### Passo 2: Fazer upload do seu projeto
1. Clique em **"Add New..."** → **"Project"**
2. Escolha **"Import Git Repository"**
3. Cole a URL do seu repositório GitHub (ou faça upload manual)
4. Clique em **"Import"**

### Passo 3: Configurar o Deploy
- A Vercel detectará automaticamente que é um projeto Vite
- Verifique se o **Build Command** está como: `pnpm run build`
- Verifique se o **Output Directory** está como: `dist/public`
- Clique em **"Deploy"**

### Passo 4: Pronto! 🎉
- Seu site estará online em segundos
- Você receberá um link como: `https://ligga-telecom.vercel.app`
- Toda vez que você fizer um "push" no GitHub, o site atualiza automaticamente

---

## ✅ Opção 2: Deploy na **Netlify** (Alternativa Gratuita)

Netlify também oferece hospedagem gratuita com excelente suporte.

### Passo 1: Criar uma conta na Netlify
1. Acesse: https://netlify.com
2. Clique em **"Sign up"**
3. Escolha **"Sign up with GitHub"** (ou outra opção)
4. Autorize a Netlify

### Passo 2: Fazer upload do projeto
1. Clique em **"Add new site"** → **"Import an existing project"**
2. Conecte seu repositório GitHub
3. Selecione o repositório do seu projeto

### Passo 3: Configurar o Deploy
- **Build command**: `pnpm run build`
- **Publish directory**: `dist/public`
- Clique em **"Deploy site"**

### Passo 4: Pronto! 🎉
- Seu site estará online em poucos minutos
- Você receberá um link como: `https://ligga-telecom.netlify.app`
- Atualizações automáticas a cada push no GitHub

---

## 📝 Próximos Passos (Opcional)

### Adicionar um Domínio Próprio
Depois que o site estiver online, você pode adicionar um domínio personalizado (como `www.liggatelecom.com.br`):

1. **Compre um domínio** em plataformas como:
   - Namecheap (https://namecheap.com)
   - GoDaddy (https://godaddy.com)
   - Registro.br (para domínios .com.br)

2. **Configure o DNS** para apontar para sua hospedagem:
   - Vercel: Adicione os registros DNS no painel de configurações
   - Netlify: Adicione o domínio nas configurações do site

3. **Ative HTTPS** (automático em ambas as plataformas)

---

## 🔧 Estrutura do Projeto

```
ligga_telecom_landing/
├── client/                 # Código React do frontend
│   ├── src/
│   │   ├── pages/         # Páginas (Home.tsx)
│   │   ├── components/    # Componentes reutilizáveis
│   │   └── index.css      # Estilos (Laranja e Preto)
│   └── index.html
├── server/                # Servidor Node.js
│   └── index.ts
├── dist/                  # Build de produção
│   └── public/            # Arquivos estáticos
├── vercel.json           # Configuração Vercel
├── netlify.toml          # Configuração Netlify
└── package.json
```

---

## ❓ Perguntas Frequentes

### P: Quanto custa hospedar na Vercel/Netlify?
**R:** Totalmente gratuito! Ambas oferecem planos gratuitos com performance excelente para sites como o seu.

### P: Posso usar meu próprio domínio?
**R:** Sim! Você pode conectar um domínio personalizado em ambas as plataformas.

### P: Como faço para atualizar o site depois?
**R:** Basta fazer um "push" no GitHub e a plataforma atualiza automaticamente.

### P: O site fica online 24/7?
**R:** Sim! Tanto Vercel quanto Netlify garantem 99.9% de uptime.

### P: Posso fazer alterações no código depois?
**R:** Sim! Você pode editar os arquivos no GitHub e o site atualiza automaticamente.

---

## 📞 Suporte

Se tiver dúvidas durante o deploy, consulte a documentação oficial:
- **Vercel**: https://vercel.com/docs
- **Netlify**: https://docs.netlify.com

---

**Seu site está pronto para conquistar o mundo! 🌍**

Boa sorte com a Ligga Telecom! 🚀
