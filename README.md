# githubTest
by Katie Tensfeldt

## Description
This is a test repository. A ReadME document as I take notes on the tutorials.

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

## Notes from GitHub Tutorial #6

- Today I learned how to commit a file. To commit via the command prompt:
  * Check the status of the files you want to commit: `git status **enter**`
    * This should pull up a list of items that you have in the staging area
  * Proceed to commit the files: `git add -m "<message title>" **enter**`
    * This will commit the files you have to the master branch. 
    * When typing a message title, be descriptive and specific. 
    * Limit the subject line to 50 characters.
    * Capitalize only the first letter in the subject line
    * Don't put a period at the end of the subject line
    * Put a blank line beween the subject line and the body
    * Wrap the body at 72 characters
    * Use the imperative mood
    * Describe what was done and why, but not how
  * If you want to see a list of the commit history: `git log **enter**`
  * If you don't want to see as long of a list of commit history: `git log --oneline **enter**`
    * This will show you a list of the commit history with its unique code and title.

## Notes from GitHub Tutorial #7
* There are 3 ways to "undo" a commit if there is a mistake with a commit, line of code, etc.
  * Checkout Commit - Safest way
  * Revert Commit - Not as safe as checkout
  * Reset Commit - Most dangerous (could ruin repository). Must be 100% sure this is needed before using it
* Checkout Commit - **READ ONLY**. It will not save any changes made once the commit is checked out (used to view what code looked like at a certain point in time)
* Revert Commit - removes a particular commit. Does not affect other pieces of code or other commits, only undoes one particular commit as if it never existed.
* Reset Commit - removes all commits back to a desired point. Ex. If you want to go back to a certain date, and remove all commits that occurred after that point in time.

**Checkout Commit**
* In order to checkout a particular commit, follow these steps:
  * In the particular file you are working on, type `git log --oneline **enter**`
  * Find the particular commit you want to checkout (which state you want to view the code) 
  * Type `git commit <unique id number of desired commit> **enter**`
  * This will pull up a *read only* of the code you wanted to view
  * When finished viewing that particular commit, type `git checkout master **enter**` which takes you back to the main master branch

**Revert Commit**
* In order to revert a commit, follow these steps:
  * In the particular file you are working in, type `git log --oneline **enter**` to pull up a history of commits
  * Find the commit you want to remove
  * Type `git revert <unique id number of desired commit> **enter**
  * This pulls up a new box that asks you to name your new commit (the reverting of a previous commit)
  * In VS Code, you can simply click the check box in the source control tab. This will commit your change.
  * In the command prompt, type `git log --oneline **enter` to view your new change commit
    * What our change did was not remove the desired commit. It created a new commit which reverted the desired commit. The previous commit still exists.

**Reset Commit**
* **warning**: When using "Reset Commit" be extremely careful! This may destroy sections of code. Make sure this is the correct command you want to use before proceding.
* To reset a commit, follow these steps:
  * In the command prompt, type `git reset <unique id of commit you want to reset to> **enter**`
    *Note: If you are working on any changes that have not been staged, pressing enter will not remove those items. If you want to remove those items that you are working on, type instead `git reset <unique id of commit you want to reset to> --hard **enter**`
    *CAUTION: Doing this will completely delete any files that were once in the master branch - there is no way to recover those commits!!

## Notes from GitHub Tutorial #8
* **Creating a branch** is critical for working on a new feature of code without affecting the main branch. Used to test new bits of code. Multiple branches can be created at a time to allow multiple coders to work on different features. The branches can be merged back to the master branch once the pieces of code are tested
* To create a branch, in Command Prompt, type `git branch "desired name of branch" **enter**`
  * This will create the new branch
* To view all branches that exist for the particular repository, type `git branch -a **enter**`
  * This will pull up a view of all existing branches. *NOTE*- the branch in which you are currently working will be indicated with yellow text and an asterisk next to it.
* To switch to the desired branch, type `git checkout "name of desired branch" **enter**`
* To verify that you have been switched to that particular branch, type `git branch -a **enter**`
  * In VS CODE, you can see which branch you are working on in the bottom left corner with the branch icon.
* To save work within that particular branch, type `git add .(or name of file) **enter**`
* To commit work within a particular branch, type `git commit -m "desired name of commit" **enter**`
* To delete a branch, type `git branch -d "name of branch" **enter**`
  * This will only workk if a branch has been merged to the master.