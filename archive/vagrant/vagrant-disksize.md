# Vagrant - resize disk space in VirtualBox
Install vagrant plugin to resize disk in VirtualBox
link: https://github.com/sprotheroe/vagrant-disksize
## Instlall
```bash
vagrant plugin install vagrant-disksize
```
## Usage
```bash
Vagrant.configure('2') do |config|
  config.vm.box = 'ubuntu/xenial64'
  config.disksize.size = '50GB'
end
```
