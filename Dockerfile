FROM node:20.12.0

# Cria o diretório do app
WORKDIR /usr/src/app

# Copia as dependências do app
COPY package*.json ./

# Instala as dependências do app
RUN npm install

# Copia o restante do código do app
COPY . .

# Compila o código (se necessário)
RUN npm run build

# Expõe a porta que a aplicação vai usar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD [ "npm", "run", "start:prod" ]
