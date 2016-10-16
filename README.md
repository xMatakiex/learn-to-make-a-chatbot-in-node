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
4. Click the `+` button in the top right corner.
5. Select `clone`.
6. Select `learn-to-make-a-chatbot-in-node`.
7. Click the checkmark at the bottom
8. Select the directory where you want the code to live.  Remember this location.
