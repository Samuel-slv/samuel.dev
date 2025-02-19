  
 
 # MANUAL DE UITLIZAÇÃO DO SISTEMA/SITE
## CAPITULO 1 - Configuração do git no computador 
### instalação Git



<p align="left">Escolhar o sistema Operacional da sua maquina, e faça downloand.</p>
 <img src="imagens/Captura de tela 2025-01-23 101856.png" alt="" width="600" > 
 <br>
<p align= "left"> 
<img src="imagens/Primeira 2025-01-22 112927.png" width="600" alt=""> 
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
Instalar Git  <p align="left"> <a href="https://git-scm.com/downloads/win" target="_blank"> downloand </a>
Reiniciar computador
Instalar Visual Code Studio</p>


``` 
git --version 

cd  \ documents\
\Documents> mkdir workspace
\Documents>  cd .\workspace\

 git clone(código do GitHub) https://github.com/Usuario22/Usuario.dev.git 
ls para ver se a pasta foi criada 
cd ../.. para  voltar ate o inicio antes de documents

Comando de indetifição:

git confing --global user.name "Nome do Usuario"
git confing --global user.email aluno.senai.@gmail.com

ssh-keygen
ssh keygen (Enter e digitar a senha duas vezes)


cd .\.ssh\
shh> 
ls    (para pegar a chave)
cat id_ed525519.pub  "Enter"
( Chave pub gerada: ssh-ed25519 
 
cd . navegue até sua pasta

code .

```
Clique na tecla Windows, e pesquisar gerenciador de credenciais.
Ir em o Windows e apagar o git)

No VScode: instaler o GitHub copillot e GitHub Pull Requests

```


### Capitulo 5 - Criação e Atualização de Branch de Desenvolvimento 


```

git branch 

 (Este comando lista todos os branches (ramificações) locais no repositório)

git branch develop

(Este comando cria um novo branch chamado develop. No entanto, você ainda não está nesse branch; você apenas o criou.)

git branch

(Este comando é executado novamente para listar os branches. Agora, você verá o novo branch develop na lista.)

git checkout develop

Este comando muda o branch atual para o branch develop. A partir deste ponto, qualquer alteração que você fizer será feita no branch develop.

git branch

(Este comando é executado novamente para listar os branches. O branch atual agora é develop, indicado pelo asterisco.)

git pull origin develop

Este comando busca (fetch) e mescla (merge) as alterações do branch develop no repositório remoto (chamado origin) para o branch develop local. Isso é útil para garantir que seu branch local esteja atualizado com as últimas alterações feitas por outros colaboradores no repositório remoto.





``` 



### Capitulo 6 - Como Mesclar Branches no GitHub
```

git main                      (brench atual)

git chekout develop           (nesse caso você vai mundar a sua atual, e muda para outra brench que você tem no GITHUB)

git merge main                (Para puchar os arquivos da brench main para develop)

git push -u origin develop    (Para atualizar o repositorio no Github) 


```


