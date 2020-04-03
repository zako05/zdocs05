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
