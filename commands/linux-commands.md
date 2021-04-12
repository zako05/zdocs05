# Linux Commands & Techniques

## systemctl - control the systemd system and service manager

link: https://www.digitalocean.com/community/tutorials/how-to-use-systemctl-to-manage-systemd-services-and-unit://www.digitalocean.com/community/tutorials/how-to-use-systemctl-to-manage-systemd-services-and-units
http://manpages.ubuntu.com/manpages/bionic/man1/systemctl.1.html

[todo]

## feh - image viewer and cataloguer

link: http://manpages.ubuntu.com/manpages/bionic/man1/feh.1.html

[todo]

## copy multiple files / directories

[todo]

example:

```bash
cp -r {source_dir/,source_file,source_file} destination_path
```

```bash
cp -r {cypress/,cypress.json,cypress_runner.js,docker-compose.yml,Dockerfile,.dockerignore,.eslintrc.js,.gitlab-ci.yml,jsconfig.json,package.json} ~/e2e_tests/
```

## lsof - "list open file"

[todo]
link: https://en.wikipedia.org/wiki/Lsof

example:

```bash
lsof | awk '{if ($3 =="postgres") {print $0}}' | grep log
```

## HTOP - interactive system-monitor process-viewer and process-manager.

links:

* https://www.linuxfordevices.com/tutorials/linux/htop-command-in-linux#CPU-and-Memory-Usage
* https://htop.dev/

* PID (Process ID) - Unique number designated to the process.
* VIRT (Virtual Memory) – The amount of virtual memory the process is consuming.
* RES (Resident Memory) – The proportion of RAM the process is using.
* SHR (Shared Memory) – The amount of shared memory the task is occupying.
* S (Status) – The current state of the process, S – Sleeping, R – Running, etc.
* CPU% – The percentage of CPU used by the process.
* MEM% – The percentage of Memory consumed by the process.

**F3 – Search for a Process**

Press F3 (fn + F3) key, type searching keyword(s), and press F3 key
again to carry out search

**F4 - Filter through the processes**

Instead of searching for keywords, display the processes matching the keyword.
Press F4 (fn + F4) key, type a word that you want to filter the processes with.

**F6 - Sort By**

Press F6 (fn + F6) key, choose from opened left sidebar the option you want to
sort with.

**F9 - Kill a process**

Select a process you want to kill and press F9 (fn + F9) key, choose what do you
want to do with the selected process (for killing: SIGKILL) and press enter.
