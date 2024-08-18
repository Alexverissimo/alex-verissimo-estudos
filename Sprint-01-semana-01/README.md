1º SEMANA.
# Conhecendo e praticando
entendemos a importância da segurança da informação como uma prática essencial em nossas vidas, tanto como programadores quanto como usuários. Estudamos seus fundamentos e conceitos. Aprendemos também o dicionário Scrum e sua ordem de precedência.

Além disso, exploramos a importância e o uso do Git e GitHub, tanto na teoria quanto na prática. Compreendi por que essas ferramentas são indispensáveis na gestão de projetos. A capacidade de gerenciar diferentes versões de um projeto sem ocupar diretamente a memória secundária, além de facilitar a manutenção, aumenta a produtividade. A possibilidade de criar múltiplas versões de um mesmo arquivo é realmente digna de elogios, tornando o processo de desenvolvimento mais organizado e eficiente.
##  Comandos Git

1.Configuração Inicial
 git config --global user.name "Seu Nome": Define o nome do usuário.
 git config --global user.email "seu@email.com": Define o e-mail do usuário.
 git config --global core.editor "editor": Define o editor de texto padrão.

2.Controle de Versionamento
git add <arquivo>: Adiciona arquivos ao staging area.
git commit -m "mensagem": Comita as mudanças no repositório local com uma mensagem.
git status: Mostra o status das alterações.
git log: Exibe o histórico de commits.
git log --oneline : exibi tudo em uma única linha

3. Trabalhando com Branches
git branch: Lista todas as branches.
git branch <nome>: Cria uma nova branch.
git checkout <branch>/ git switch <branch>: Troca para a branch especificada.
git merge <branch>: Faz merge da branch especificada na branch atual.
git branch -d <branch>: Deleta a branch especificada.


4. Revertendo Alterações
git reset <arquivo>: Remove arquivos do staging area.
git reset --hard <commit>: Reseta o repositório para um commit específico, descartando mudanças.
git revert <commit>: Reverte um commit específico.

	--USANDO O GIT JUNTO AO GITHUB--

git remote add origin <url>: Adiciona um repositório remoto.
git push origin <branch>: Envia as mudanças para o repositório remoto.
git pull: Puxa as mudanças do repositório remoto para o local.
git fetch: Baixa mudanças do repositório remoto sem aplicá-las.