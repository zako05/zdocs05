# GIT Commands & Techniques
## Change message of commit (not pushed)
links: 
- https://gist.github.com/nepsilon/156387acf9e1e72d48fa35c4fabef0b4
- https://help.github.com/en/github/committing-changes-to-your-project/changing-a-commit-message

[todo]
## Change message of a pushed commit
link: https://stackoverflow.com/a/11603609/9822844
### last commit
```bash
git rebase -i HEAD^
```
- then replace 'pick' with 'r' or 'reword' and save, editor should pop up again to edit the msg
```bash
git push origin your-branch-name -f
```
### last 4 commits
```bash
git rebase -i HEAD~4
```
- then replace 'pick' with 'r' or 'reword' for each message you want to change and save, editor should pop up again to edit the msg
```bash
git push origin your-branch-name -f
```
## Moving committed (but not pushed) changes to a new branch
link: https://stackoverflow.com/a/5066120

[todo]
## vim-fugitive workflow 
link: https://github.com/tpope/vim-fugitive

[todo]

## Deleting a branch
link: https://www.freecodecamp.org/news/how-to-delete-a-git-branch-both-locally-and-remotely/

[todo]

## Migrate a GIT repository

e.g. migrate from BitBucket to GitLab

link :https://gitenterprise.me/2016/03/30/how-to-migrate-a-git-repository/

create a repo where you want to migrate

```bash
git clone --mirror <ssh-to-source-repo>
cd <path-to-repo-want-to-migrate> 
git push --mirror <ssh-to-destination-repo>
rm -rf <source-repo>
git clone <destinatio-repo>
```

[todo]

## Merge master into feature branch

[todo]
link: https://stackoverflow.com/a/16957483

## git pull --ff-only
link: https://blog.sffc.xyz/post/185195398930/why-you-should-use-git-pull-ff-only-git-is-a

[todo]
