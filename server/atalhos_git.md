git config --global core.editor code

git config --global --edit

no vscode

onde está:

[core]
editor = code
fica assim:
[core]
editor = code --wait
criando os atalhos
[alias]
c = !git add --all && git commit -m
s = !git status -s
l = !git log --pretty=format:'%C(blue)%h%C(red)%d %C(white)%s - %C(cyan)%cn, %C(green)%cr'
ps = !git push origin develop
pl = !git pull origin develop