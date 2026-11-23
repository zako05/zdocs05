# VirtualBox - Guest Additions

[todo]

links
https://www.virtualbox.org/manual/ch04.html#additions-linux
https://linuxize.com/post/how-to-install-virtualbox-guest-additions-in-ubuntu/

## Troubleshooting
### [Vagrant was unable to mount VirtualBox shared folders](https://stackoverflow.com/a/43497420)
```bash
vagrant ssh
```
```bash
ls -lh /sbin/mount.vboxsf 
```
output:
```bash
lrwxrwxrwx 1 root root 49 Apr 19 14:05 /sbin/mount.vboxsf -> /opt/VBoxGuestAdditions-5.1.20/other/mount.vboxsf
```
This link is broken. When you look inside /opt/VBoxGuestAdditions-5.1.20/ you see that the subfolder "other" doesn't exists. This line fixes that:
```bash
sudo ln -sf /opt/VBoxGuestAdditions-*/lib/VBoxGuestAdditions/mount.vboxsf /sbin/mount.vboxsf
exit
vagrant reload
``` 
But i can't fix the link because /sbin/mount.vboxsf does not exist inside my
box!
If the link /sbin/mount.vboxsf does not exists in the first place, than the VBoxGuestAdditions couldn't be installed. This can happen if you have not downloaded the matching VirtualBox Extension Pack after you updated VirtualBox.
#### Install the guest additions manually - this worked for me!
```bash
cd /opt
sudo wget -c http://download.virtualbox.org/virtualbox/5.1.28/VBoxGuestAdditions_5.1.28.iso -O VBoxGuestAdditions_5.1.28.iso
sudo mount VBoxGuestAdditions_5.1.28.iso -o loop /mnt
sudo sh /mnt/VBoxLinuxAdditions.run
```
