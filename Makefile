main:

build:

git:
	git add .
	git commit -m"$(m)"
	git push
	
submodules: 
	git submodule update --init --remote --recursive --force --rebase