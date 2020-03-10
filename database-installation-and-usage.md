# PostgreSQL
office website: https://www.postgresql.org/
documentation: https://www.postgresql.org/docs/12/index.html
## Installation, database & user creation
install:
```bash
sudo apt install postgresql libpq-dev
```
get info about postgresql service
```bash
sudo systemctl | grep postgresql
sudo systemctl status postgresql.service
sudo systemctl status postgresql@10-main.service
```
create user:
```bash
sudo su postgres
```
```psql
CREATE USER <user_name>;
```
- alter user:
```psql
ALTER USER <user_name> WITH CREATDB
ALTER USER <user_name> WITH PASSWORD <password>
```
create database:
```psql
CREATE DATABASE <database_name>;
GRANT ALL PRIVILEGES ON DATABASE "<database_name>" to <user_name>;
```
## Export / Import db dump
### Export database - create dump file
```bash
pg_dump -U <postgres_user> -d <mydb> | gzip > <mydb>.pgsql.gz
```
### Import database dump
```bash
gunzip -c <mydb>.pgsql.gz | psql -U <postgres_user> -d <mydb>
```
## Unistallation
link: https://medium.com/@mr.firdaus/how-to-remove-postgressql-on-ubuntu-18-04-c39459e72f29
```bash
sudo apt --purge remove postgresql
```
```bash
dpkg -l | grep postgres
sudo apt --purge remove pgdg-keyring postgresql*
```
directory data postgresql
```bash
sudo rm -rf /var/lib/postgresql/
```
directory log postgresql
```bash
sudo rm -rf /var/log/postgresql/
```
directory base postgresql
```bash
sudo rm -rf /etc/postgresql/
```
```bash
sudo deluser postgres
sudo delgroup postgres
```
## Troubleshooting
[vacuumdb](https://www.postgresql.org/docs/9.4/app-vacuumdb.html) -- garbage-collect and analyze a PostgreSQL database
```bash
vacuumdb --all
```
[pg_archivecleanup](https://www.postgresql.org/docs/9.2/pgarchivecleanup.html) -- clean up PostgreSQL WAL archive files
```bash
pg_archivecleanup -d /mnt/standby/archive %r 2>>cleanup.log
```
