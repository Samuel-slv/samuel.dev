 fff 
 
 # MANUAL DE UITLIZAÇÃO DO SISTEMA/SITE
## CAPITULO 1 - Configuração do git no computador 
### instalação Git
<style>
p{
  font-family: Arial, Helvetica, sans-serif;
  color 
}

 </style>
<p align="left">Escolhar o sistema Operacional da sua maquina, e faça downloand.</p>
 <img src="docs/imagens/Primeira 2025-01-22 112927.png" alt="" width="600" > 
 <br>
<p align= "left"> 
Clique  aqui para fazer downloand do git, como a imagem Mostra<a href="https://git-scm.com/downloads/win" target="_blank"> downloand </a>
  </p> 
<img src="docs/imagens/Captura de tela 2025-01-23 101856.png" width="600" alt=""> 


### Configuração no terminal  do computador 

```
git  --version (Esse comando retornará a versão do Git que está instalada. Por exemplo, a saída pode ser algo como:git version 2.34.1 )

git config--global user.name "Usuario"


git confing --global user.email  aluno.senai.br

shh-keygen (Criador de senhar)

cd. (Para entrar)  cd..(Para voltar)

cd. \Nome da pasta\projeto (Use o comando "cd" para navegar ate as 
paginas do codigos)

ls  (Ver pastas já exixtentes)

cat .shh/id_ pub

cd.. (Para sair do projento)

```
### Comandos Administrativos do Git no Windows

``` 
git init 
git status
git add index.html or git add .
git commit -m "Mensagem do desenvolvedor"  ex: "update file README"
git push -u origin master
```

## capitulo 2 - Criando repositorio do git 

`
<p align= "left"> Clique no  perfil no canto da tela.</p>> 
<img src="imagens/direrto no perfil.png" alt=""  widht="300"></p>


<p align= "left">Clique no seu perfil</p>

<img src="imagens/Captura de tela 2025-01-23 083921.png" width="400" alt=""> 
<br> 

<p align= "left">Clique em repositorio e depois em novo/new para criar.</p>
 <img src="imagens/Captura de tela 2025-01-23 082817.png" width="400" alt="">  <br>

<p>Aqui você vai escolher o nome do projento, depois você dar uma descrição ou não.
Depois você escolher se o seu repositorio seja publico ou privado, e depois clique em criar repositorio.</p>
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



``` 
git version 
ls
cd \ documents\
\Users\Aluno\Documents> mkdir workspace
\Users\Aluno\Documents>  cd .\workspace\

 git clone(código do GitHub) https://github.com/Usuario22/Usuario.dev.git 

ls para ver se a pasta foi criada 

cd ../.. para  voltar ate o inicio antes de documents
```



`COMANDO DE INDETIFICAÇÃO`

``` 
git confing --global user.name "Nome do Usuario"
git confing --global user.email aluno.senai.@gmail.com

```


`Criar o par de chaves `
```
ssh-keygen

ssh keygen (Enter e digitar a senha duas vezes)

```

```
cd .\.ssh\
shh> 
ls (para pegar a chave)
cat id_ed25519.pub  `Enter`
( Chave pub gerada: ssh-ed25519 AAAA^^C3NzaC1lZDI1NTE84845AAAAIMfgUvbfdRtel3#ma4xJNaYVug4nyw/qG7z/QCxR1#hgff6y77my4EiPe aluno@LAB02-20)
 
cd .\documents\Workspace\Usuario.dev
cd .\.git\ 
ls
\Documents\Workspace\Usuario.dev\.git> cat .\config (para puxar a pasta)
cd ..
code .

```


 
```
Clique na tecla Windows, e pesquisar gerenciador de credenciais.
Ir em o Windows e apagar o git)

No VScode: instaler o GitHub copillot e GitHub Pull Requests

```


### Capitulo 5 - TROCANDO MENSAGEM DE ENVIO  ORIGIN MASTER PARA ORIGIN DEVOLOPE OU QUALQUER OUTRO NOME DE SUA PREFERECIA 


```

git branch 
git branch develop
git branch
git checkout develop
git branch
git pull origin develop


git merge develo para sicroniza a master e a develop


git checkout develop

git branch main
git branch

git checkout main
ls 

it branch
git pull origin develop

git branch
``` 



### Capitulo 6 - Como Mesclar Branches no GitHub
```

git main                        (brench atual)

git chekout develop             (nesse caso você vai mundar a sua branch atual, e muda para outra brench que você tem no GITHUB)

git merge main                  (Para puchar os arquivos da brench main para develop)

git push -u origin develop      (Para atualizar o repositorio no Github) 


```


