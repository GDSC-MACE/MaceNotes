## Contributing Guidelines

#### Preliminaries:

- Download and install the latest stable version of [Git](https://git-scm.com/downloads) for version control
- Create a [Github](https://github.com/join) Account

- Fork [this](https://github.com/GDSC-MACE/MaceNotes.git) repository

- Open Terminal/Command Prompt/Powershell/Git Bash and navigate to a location where you want the project files to be stored

```
cd D:\my_preferred_location
```

- Clone your forked repository

```
git clone https://github.com/<your_user_name>/MaceNotes.git
```

- Now move inside the project directory 

```
cd MaceNotes
```

- Check for the current remotes of the git repository (the local copy of your forked repository)

```
git remote -v
```

- Add add a reference to the upstream repository.

```
git remote add upstream https://github.com/GDSC-MACE/MaceNotes.git
```
- Fetch any recent changes from the upstream repository

```
git pull upstream master
```
Comment on any existing [issue(s)](https://github.com/GDSC-MACE/MaceNotes/issues) or raise an issue.
- Once the project maintainers have reviewed the issue/assigned you the issue. Start working on the changes

- Create a new feature branch (DO NOT name it MAIN or MASTER or anything random).
  ```
  git checkout -b <your_branch_name>
  ```
- Finish your work
- 
- Stage your changes.

```
git add .
```

- Commit the changes.

```
git commit -m "message relevant to your changes (usually title of the pull request)"

- Push the changes to your remote repository on GitHub.

```
git push origin <your_branch_name>
```

- Click on `compare and pull requests` to create a pull request
