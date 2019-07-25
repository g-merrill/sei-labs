# Bash Command Cheatsheet
### Native Commands
command | explanation | command | explanation
--- | --- | --- | ---
`~` | home directory | `touch` | create file 
`.` | current directory | `mkdir` | make folder
`pwd` | print working directory | `cp` | copy
`cd` | change directory | `mv` | move (or rename)
`..` | parent directory | `rm` | remove file
`ls` | list items | `rm -r` | remove recursively
`ls -a` | list items, including hidden items | `open` | open file

### Custom Commands
shortcuts can be created using `alias` in .git_profile in ~ directory

command | explanation
--- | ---
`repo` | change directory to course directory

### Git Commands
`git `command | explanation
--- | ---
`init` | start tracking changes in repository/file
`status` | show git status of any modified files
`add` | add file to staging area
`add .` | add all modified files to staging area
`commit -m <commit-message>` | commit file(s) as a save-point with a message
`push origin master` | push committed files in local repo to remote repo
`log` | show history of commits
`diff` | show changes in modified files
`clone <url>` | clone a remote repository from GitHub to new repo on local computer
`remote add <url>` | add remote repo to push current local repo to
`remote -v` | show relationship of remote repo to local

### Miscellaneous commands
command | explanation
--- | ---
`brew install <pkg-name>` | install a package with *_Homebrew_*
`code ` | open a file with *_VS Code_*
`code .` | open *_VS Code_*
`tree` | show file tree of current directory