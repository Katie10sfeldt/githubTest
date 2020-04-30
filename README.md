# githubTest
by Katie Tensfeldt

## Description
This is a test repository for learning to use GitHub. This is just a text document to practice the functions of Git and GitHub.

## Notes from GitHub Tutorial #3
- A Git is essentially a way to save and track files of code, or repositories. With git, I can save every version of my code, and go back to previous versions at any time. 
- A repository is a container for projects (files) that is tracked with Git. 
- within a repository, a .git file must be placed at the root to ensure the entire repository is tracked. All contents of the repository will be tracked, including subfolders. If the .git file is placed within a subfolder instead, that subfolder becomes the repo.
- Commits are like save points. At any point, with git, we can revert back to any commit if we change our minds on the code, or if we want to start over from any particular commit.
- There are 3 stages of commit: modified, staged, and committed.
  - Modified: Code or other element of a project has been changed (modified) but not committed. Possibly, the code is not ready to be committed.
  - Staged: Items that are ready to be committed, but are not yet committed. For example, if you are ready to send a section of a project to be committed, but you are still working on other pieces, you can stage that portion of code to be committed until you are ready to commit more items. 
  - Committed: any items that were staged are now committed.
- In basic form, repos only have one "branch" of code called the master branch. There are other branches which can be branched from the main code. A reason for this would be to work on a new feature without altering the master code. The branches can be merged with the master branch once it is ready to be merged.

## Notes from GitHub Tutorial #4
- To create a local repository, I need a command prompt and VS code open. 
- I start by creating a project folder. In my case, I saved it under Documents, then a folder named "Projects", and then a folder named "RepoTest".
- In the command prompt, I started by writing `cd documents`, *enter*. Once in documents, I wrote `cd projects`, *enter*. Once in projects, I wrote `cd repotest`, *enter*.
- Once in the RepoTest folder, I then wrote `git init` *enter*. This prompted command prompt to initialize a git for that particular folder. In VSCode, I opened the folder RepoTest, and at the bottom of the screen, I could see that the RepoTest was part of a master branch of a repository. 
- Once that repository is created, I can add files to the folder, and make edits that are tracked. 
- To pull up command prompt, type `<command, shift,`>`

## Notes from GitHub Tutorial #5
- Staging a change before committing allows us to be more streamlined about how many commits we are making - if we want to make edits, but aren't quite ready to commit (maybe there are a few more tweaks that can be made before commiting) it allows us to do that.
- Commits should only be made at logical points, not done haphazardly

- To use the command function:
  - **Checking status before making edits** type `git status`
    - This will show if any changes are in the staging area to be committed. 
  - after an edit, type `git add <file>` and press *enter* then type `git status`
    - This will add the file to the staging area. It will appear as "modified: <file>" in yellow
  - To remove a file from the staging area, `git restore --staged <file>` and press *enter* then type `git status`
    - This will remove the file from the staging area. It will appear as "modified: <file>" in red

- In VS CODE, it is simpler, once git is installed on the computer. By simply saving a file that is already being tracked by git, it stages it, but does not commit it yet.