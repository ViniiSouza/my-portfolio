FROM node:14 as build-stage

WORKDIR /app

# Copia o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia todos os arquivos do diretório atual para o diretório de trabalho
COPY . .

RUN npm run build

FROM nginx:alpine

# Copia os arquivos de build da aplicação para o diretório de publicação do servidor Nginx
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Exponha a porta 80 para o tráfego HTTP
EXPOSE 80

# Inicie o servidor Nginx
CMD ["nginx", "-g", "daemon off;"]