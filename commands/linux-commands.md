# Linux Commands & Techniques
## systemctl - control the systemd system and service manager
link:
https://www.digitalocean.com/community/tutorials/how-to-use-systemctl-to-manage-systemd-services-and-unit://www.digitalocean.com/community/tutorials/how-to-use-systemctl-to-manage-systemd-services-and-units
http://manpages.ubuntu.com/manpages/bionic/man1/systemctl.1.html

[todo]
## feh - image viewer and cataloguer

[todo]
link: http://manpages.ubuntu.com/manpages/bionic/man1/feh.1.html

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

