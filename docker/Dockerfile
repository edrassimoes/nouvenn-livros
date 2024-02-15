FROM node:20-alpine

WORKDIR /app

COPY . .

RUN npm install

# executa a aplicação menos os testes.
CMD ["run", "start"]

EXPOSE 5173

# docker build -t dockerfile -f Dockerfile .
# docker run -dp 127.0.0.1:5173:5173 dockerfile