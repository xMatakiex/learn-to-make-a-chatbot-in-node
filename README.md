## Setup

### Node and NPM 

I recommend following [this tutorial.](https://docs.npmjs.com/getting-started/installing-node) 
Once you're done, run `npm -v` in a command prompt. The output should be `3.10.x` (where x is some number).  
If not, run `npm install npm@3.10.9 -g`  This will install `npm 3.10.9`.  
Again, run `npm -v` to verify that `npm 3.10.9` is installed.

### An Editor

You can pick any editor you choose, but i highly recommend Visual Studio Code (VS Code). Some other editors you might like are Atom, Sublime Text 3, or Intellij.  
Be sure to install relevant javascript and node plugins. Below I'll go over setting up VS Code.

1. Pick up VS Code from [here](https://code.visualstudio.com/Download) 
2. Use your brain to install it.
3. Run VS Code. 
4. Go to the extensions menu. 
5. Search for `node` and install `npm`, `npm Intellisense`, `View Node Package`, and `Node Modules Resolve`.
6. Search for `javascript` and install `ESLint`. 
7. Done! For now.  You can close VS Code, but you'll need it in a minute anyway.

### Git

For the purposes of these exercises, you can use `github`'s `git` client. Though, note that `git` and `github` are not the same thing, and commandline `git` will be helpful to know at times.
* `git` is a way to manage and distribute sourcecode. 
* `github` is a website that hosts code bases via `git`.

Now, to set up and use git for this project:

1. Go to https://github.com and register for an account if you haven't, and sign in.
2. For this project, you will have your own `fork` of the code, so that you can develop it independently and keep your code hosted on `github`.  To do this, click the `fork` button in the top right corner.  Forking this repository creates a clone of it under your own account.  Later on you can merge changes from my fork, and vice versa.
3. `Clone` this repository to your local machine. DO NOT DOWNLOAD THE ZIP FILE. You can pick up a `github` `git` client [here](https://desktop.github.com/). Continue to steps 4 - 8 if using this client. Otherwise you're done for now.
4. Click the `+` button in the top left corner.
5. Select `clone`.
6. Select `learn-to-make-a-chatbot-in-node`.
7. Click the checkmark at the bottom
8. Select the directory where you want the code to live.  Remember this location.

## Project Information 

### Initial setup 
1. Open up a command prompt
2. Navigate to your project directory
3. run `npm install`
4. Done.

### Running the project
1. Configure your twitch user in the `options` section of `bot.js`. 
2. run `node bot.js` from the root directory of this project.
3. After making updates, use `ctrl+c` to close the application, then use `node bot.js` to re-run with the changes. (eventually we will automate this.)

### Editing
Currently there is only one source file to worry about: `bot.js`. 

### More Git

#### Commands 

After making code changes, they only exist on your local machine.  

* `Commit` saves your changes to the git repository locally 
* `Push` pushes your local commits to the remote server (`github` in this case)
* `Pull` pulls commits from the remote server, in case there are changes there that you do not have (maybe you work on a team, or from multiple machines.)
* `Branch` creates another branch in your repository.  Very helpful whenever you might be working on multiple features at the same time. 
* `Merge` can be used to merge branches back together.  This is especially helpful when working with multiple people, or when you want to pull in changes from other forks. 

#### Pushing changes

To make your changes go to `github`, first `commit` your changes, then `push` your code.  There are tons of articles about the semantics of what these do.  Google is your friend.

#### Getting up to date with my fork

To retrieve changes from my fork, you'll need to add my remote as an "upstream" repository. 

1. Right click the repository in the `github` desktop `git` client
2. Select "open in git shell". 
3. From there, follow these instructions: https://help.github.com/articles/configuring-a-remote-for-a-fork/
4. Then follow these instructions: https://help.github.com/articles/syncing-a-fork/ 

#### Getting my fork up to date with yours

To put changes from your fork in to my fork, create a pull request for me to review it. Use google to figure this one out yourself, pleb.