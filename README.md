  
 
 # MANUAL DE UITLIZAÇÃO DO SISTEMA/SITE
## CAPITULO 1 - Configuração do git no computador 
### instalação Git



<p align="left">Escolhar o sistema Operacional da sua maquina, e faça downloand.</p>
 <img src="imagens/Captura de tela 2025-01-23 101856.png" alt="" width="600" > 
 <br>
<p align= "left"> 
<img src="imagens/Primeira 2025-01-22 112927.png" width="600" alt=""> <br>
 <a href="https://git-scm.com/downloads/win" target="_blank"> downloand </a>
  </p> 



### Configuração no terminal  do computador 

```
git  --version (Esse comando retornará a versão do Git que está instalada. Por exemplo, a saída pode ser algo como:git version 2.34.1 )

git config--global user.name "Usuario"
git config --global user.email  aluno.senai.br

ssh-keygen (Gerador de Senhas)
ls
cd. \Nome da pasta\projeto (Use o comando "cd" para navegar ate as 
paginas do codigos)
ls  (Ver pastas já exixtentes)
cat .shh/id_ pub
cd.. (Para sair do diretório atual)

```
### Comandos Administrativos do Git no Windows

``` 
git init                                                                (Cria um novo repositório Git no sistema)  
git status                                                              (Mostra o status atual do repositório e as alterações não rastreadas)
git add index.html or git add .                                         (Inclui arquivos específicos ou todos para a próxima confirmação)                                       
git commit -m "Mensagem do desenvolvedor"  ex: "update file README"     (Registra as alterações com uma mensagem descritiva)
git push -u origin master                                               (Carrega as alterações locais para o repositório remoto no GitHub)                            
```

### Capitulo 2 - Criando repositorio do git 


<p align= "left"> Clique no  perfil no canto da tela.</p>
<img src="imagens/direrto no perfil.png" alt=""  widht="300"></p>


<p align= "left">Clique no seu perfil</p>

<img src="imagens/Captura de tela 2025-01-23 083921.png" width="400" alt=""> 
<br> 

<p align= "left">Clique em repositorio e depois em novo/new para criar.</p>
 <img src="imagens/Captura de tela 2025-01-23 082817.png" width="400" alt="">  <br>

<p>"Por favor, siga as orientações e complete o acordo com sua escolha."</p>
 <img src="imagens/Captura de tela 2025-01-23 090102.png" width="400" alt="">




### Capitulo 3 # - Subindo arquivos no GIthub
``` 
git status 
git add . 
git status 
git commit -m commit "Update file Readme" 
git push -u origin master
```
 



### Capitulo 4 - TRABALHANDO COM O MESMO REPOSITÓRIO DO GITHUB EM COMPUTADORES DIFERENTES.
<p align="left">
Instalar o  <a href="https://git-scm.com/downloads/win" target="_blank"> GIT </a> <br>
Reiniciar computador <br>
Instalar Visual Code Studio</p>


``` 
1. Vereficar a veersão do git
git --version 


02. Navegue até a pasta Documentse crie um diretório chamado workspace:
cd \Documents\
mkdir workspace
cd .\workspace\

03. Clonar um Repositório do Git
git clone https://github.com/Usuario22/Usuario.dev.git

04. Verifique a Criação da Pasta:
Use o comando <strong>"ls"</strong> para listar os diretórios e confirmar que a pasta foi criada.
Para retornar ao diretório inicial antes de Documents, use:cd../..

05. Configurar informações do usuário:
git config --global user.name "Nome do Usuario"
git config --global user.email "aluno.senai@gmail.com"

06. Criar uma Nova Chave.
Gere uma nova chave SSH com o seguinte comando:
ssh-keygen (Pressione Enter e digite a senha duas vezes quando solicitado.)
cd .\.ssh\ 
ls    (para listar os arquivos e verificar a chave gerada:)

07.Volte para o diretório desejado:
cd..

08.Exibir a Chave Pública:
Para visualizar a chave pública gerada, use: cat id_ed25519.pub 

09. Abra o código do Visual Studio
code .

No VScode: instaler o GitHub copillot e GitHub Pull Requests

```


### Capitulo 5 - Criação e Atualização de Branch de Desenvolvimento 


```
git branch 

(Este comando lista todos os branches (ramificações) locais no repositório)
 ```
```
git branch develop

(Este comando cria um novo branch chamado develop. No entanto, você ainda não está nesse branch; você apenas o criou.)
```
```
git branch

(Este comando é executado novamente para listar os branches. Agora, você verá o novo branch develop na lista.)
```
```
git checkout develop

Este comando muda o branch atual para o branch develop. A partir deste ponto, qualquer alteração que você fizer será feita no branch develop.
```
```
git branch

(Este comando é executado novamente para listar os branches. O branch atual agora é develop, indicado pelo asterisco.)
```
```
git pull origin develop

Este comando busca (fetch) e mescla (merge) as alterações do branch develop no repositório remoto (chamado origin) para o branch develop local. Isso é útil para garantir que seu branch local esteja atualizado com as últimas alterações feitas por outros colaboradores no repositório remoto.
```


### Capitulo 6 - Como Mesclar Branches no GitHub

```
git main                      (brench atual) 
```
```
git chekout develop  
(nesse caso você vai mundar a sua atual, e muda para outra brench que você tem no GITHUB)
```
```
git merge main 
(Para puchar os arquivos da brench main para develop)
```
```
git push -u origin develop    (Para atualizar o repositorio no Github) 
```


