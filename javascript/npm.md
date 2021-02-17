# NPM - Node Package Manager

or YARN

link: https://www.npmjs.com/

## Installation

links: 
 - https://linuxconfig.org/how-to-install-node-js-on-linux
 - https://appcircle.io/blog/how-to-install-update-upgrade-downgrade-npm-yarn-and-node-js-versions

NPM

```bash
sudo apt install npm
```

YARN

```bash
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update && sudo apt install yarn 
```

# NVM - Node Version Manager

## Installation

links:
- https://github.com/nvm-sh/nvm
- https://www.ubuntupit.com/how-to-install-node-version-manager-tool-nvm-on-linux-system/
- https://stackoverflow.com/a/53094675/9822844

```bash
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
```

when YARN is already installed you need to reinstall the yarn for the new node version

link: https://github.com/yarnpkg/yarn/issues/3255

```bash

```

## Usage

link: https://github.com/nvm-sh/nvm#usage

install node LTS

```bash
nvm install node
```

install particular node version

```bash
nvm install node 12.20
```

list all installed nodes

```bash
nvm ls
```

install & use particular node version & reinstall yarn
```bash
nvm install 12.20.0
nvm use 12.20.0
npm install -g yarn
```

---
# Packages

## Node.js

link:  https://nodejs.dev/learn/how-to-install-nodejs

```bash
brew install node
```

## Cypress & Testing related package

### Mocha
link: https://www.npmjs.com/package/mocha

[todo]
### Mochawesome
link:
https://github.com/adamgruber/mochawesome
https://www.npmjs.com/package/mochawesome

[todo]
## Copy files
link: https://www.npmjs.com/package/copyfiles

[todo]
## yargs
link: https://yargs.js.org/docs/#api-help

[todo]
