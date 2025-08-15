# 📋 Página de Inscrição em Evento

Uma página simples para inscrição em um evento, desenvolvida com **React** e **Vite**.  
O sistema permite cadastrar inscritos, validar e-mails, filtrar por nome e excluir registros.

---

## ✨ Funcionalidades
1. **Cadastrar nome e e-mail**  
2. **Validação de e-mail** (formato correto antes de cadastrar)  
3. **Excluir inscritos** 
4. **Filtrar inscritos por nome** 

---

## 🛠️ Tecnologias utilizadas
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- JavaScript (ES6+)
- HTML5 / CSS3

---

## 🚀 Como executar o projeto

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
```

### 2️⃣ Instalar dependências

```bash
npm install
```

### 3️⃣ Rodar o projeto localmente

```bash
npm run dev
```

---

##	📱 Testando a responsividade em dispositivos móveis com Ngrok
Caso queira testar o projeto em celulares ou outros dispositivos na mesma rede, você pode utilizar o Ngrok.

###	🔹 Instalação do Ngrok	
- Baixe e instale pelo site oficial:
  https://ngrok.com/download

- No Windows, após baixar o arquivo ZIP, extraia e adicione o executável ngrok.exe no PATH do sistema (ou execute diretamente da pasta baixada).

###	🔹 Usando o Ngrok
- Com o projeto rodando localmente (npm run dev), abra outro terminal e execute:

```	bash
ngrok http 5173
```

- O Ngrok irá gerar um link público como:

```bash	
https://a1b2c3d4.ngrok-free.app
```

- Acesse esse link no seu celular para testar a responsividade.
