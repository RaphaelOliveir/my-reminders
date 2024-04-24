<h1 align="center">
  My Reminders 🚀
</h1>
<div align="center">
  <img src="https://github.com/RaphaelOliveir/my-reminders/assets/75098561/087276ef-0719-4db6-87e0-ee5953f97a7f" />
</div>


## 📜 Sobre
Sistema de criação e listagem de lembretes para processo seletivo da vaga de estágio em desenvolvimento de software na [DTI Digital](https://www.dtidigital.com.br/).

## 🛠 Funcionalidades
- Criação de um novo lembrete
- Listagem de lembretes por data de criação
- Remoção de lembrete

## 🚨 Decisões de projeto
- O campo **Nome** não pode ser vazio
- O campo **Data** não pode ser vazio e não pode ser uma data passada
- Lembretes com a mesma data são postos no mesmo **grupo de data**
- Utilização do framework **Asp.Net** para API WEB Restful
- Rota **GET**: Listagem de lembretes
- Rota **POST**: Criação de lembrete e **validação** do campo Data
- Rota **DELETE**: Remoção de lembrete
- Componentização do formulário com react
- Componentização da lista de lembretes
- Hook **UseState** para gerência de estados dos componentes
- Hook **UseEffect** para realizar requests
- **Axios** para criação de requests
- Biblioteca de ícones **react-icon**
- **Pre-processador de css** para variáveis de cores

## ✅ Observações de testes
Devido ao prazo, foi realizado apenas testes no frontend, utilizando Jest e react testing library. O relatório de coverage mostrou que não houve uma cobertura total.

## 🏠 Deploy
- Deploy da API pelo **Azure**
- **SQLServer** criado no Azure para melhor integração com a API
- Deploy do frontend no **GitHub Pages**

## 🤖 Tecnologias
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" width="30" height="30"/> C#
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" width="30" height="30"/> DotNetCore
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" width="30" height="30"/> ReactJS
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" width="30" height="30"/> SASS
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" width="30" height="30"/> SQLServer
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" width="30" height="30"/> Azure
