# VirtualBox - Update to version 6.1
## [check all vbox packages](https://github.com/hashicorp/vagrant/issues/8687)
```bash
sudo dpkg -l | grep virtualbox
```
output:
```bash
rc  virtualbox                                 5.2.34-dfsg-0~ubuntu18.04.1                      amd64        x86 virtualization solution - base binaries
rc  virtualbox-5.2                             5.2.34-133893~Ubuntu~bionic                      amd64        Oracle VM VirtualBox
ii  virtualbox-6.1                             6.1.4-136177~Ubuntu~bionic                       amd64        Oracle VM VirtualBox
ii  virtualbox-dkms                            5.2.34-dfsg-0~ubuntu18.04.1                      all          x86 virtualization solution - kernel module sources for dkms
rc  virtualbox-qt                              5.2.34-dfsg-0~ubuntu18.04.1                      amd64        x86 virtualization solution - Qt based user interface
ii  virtualbox-source                          5.2.34-dfsg-0~ubuntu18.04.1                      all          x86 virtualization solution - kernel module source
```
## remove all vbox package by
```bash
sudo dpkg --purge <package name>
```
## delete all vbox VMs
```bash
sudo rm ~/"VirtualBox VMs" -Rf
```
## update linux (debian)
```bash
sudo apt update
sudo apt -y upgrade
sudo reboot
```
```bash
wget -q https://www.virtualbox.org/download/oracle_vbox_2016.asc -O- | sudo apt-key add -
wget -q https://www.virtualbox.org/download/oracle_vbox.asc -O- | sudo apt-key add -
```
```bash
echo "deb [arch=amd64] http://download.virtualbox.org/virtualbox/debian $(lsb_release -sc) contrib" | sudo tee /etc/apt/sources.list.d/virtualbox.list
```
## [install vbox 6.1](https://computingforgeeks.com/install-virtualbox-6-on-ubuntu-debian-linux/)
```bash
sudo apt update
sudo apt install linux-headers-$(uname -r) dkms
sudo apt-get install virtualbox-6.1
```
output:
```bash
Reading package lists... Done
Building dependency tree
Reading state information... Done
The following packages were automatically installed and are no longer required:
  kbuild libc-ares2 libgsoap-2.8.60 libhttp-parser2.7.1 libllvm8 libllvm8:i386 libvncserver1 module-assistant nodejs-doc python3-flask-htmlmin python3-htmlmin virtualbox-source
Use 'sudo apt autoremove' to remove them.
The following packages will be REMOVED:
  virtualbox-5.2
The following NEW packages will be installed:
  virtualbox-6.1
0 upgraded, 1 newly installed, 1 to remove and 0 not upgraded.
Need to get 93.9 MB of archives.
After this operation, 56.2 MB of additional disk space will be used.
Do you want to continue? [Y/n]
Get:1 http://download.virtualbox.org/virtualbox/debian bionic/contrib amd64 virtualbox-6.1 amd64 6.1.4-136177~Ubuntu~bionic [93.9 MB]
Fetched 93.9 MB in 12s (7,873 kB/s)
Preconfiguring packages ...
(Reading database ... 263306 files and directories currently installed.)
Removing virtualbox-5.2 (5.2.34-133893~Ubuntu~bionic) ...
Selecting previously unselected package virtualbox-6.1.
(Reading database ... 262493 files and directories currently installed.)
Preparing to unpack .../virtualbox-6.1_6.1.4-136177~Ubuntu~bionic_amd64.deb ...
Unpacking virtualbox-6.1 (6.1.4-136177~Ubuntu~bionic) ...
Setting up virtualbox-6.1 (6.1.4-136177~Ubuntu~bionic) ...
addgroup: The group `vboxusers' already exists as a system group. Exiting.
Processing triggers for ureadahead (0.100.0-21) ...
ureadahead will be reprofiled on next reboot
Processing triggers for desktop-file-utils (0.23-1ubuntu3.18.04.2) ...
Processing triggers for systemd (237-3ubuntu10.39) ...
Processing triggers for shared-mime-info (1.9-2) ...
Processing triggers for gnome-menus (3.13.3-11ubuntu1.1) ...
Processing triggers for hicolor-icon-theme (0.17-2) ...
Processing triggers for mime-support (3.60ubuntu1) ...
```
# troubleshooting
## first try autoremove virtualbox-dkms
- this step led me back to previous installed version of virtualbox, but it
    didn't really help me :(
```bash
sudo apt-get autoremove virtualbox-dkms
sudo apt-get install build-essential linux-headers-`uname -r` dkms virtualbox-dkms
```
## remove VBoxGuestAdditions
```bash
sudo bash /opt/VBoxGuestAdditions-*/uninstall.sh
```
