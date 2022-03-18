# GIT intro

Git is quite a difficult thing to learn, so you won't get it overnight. Howver if you keep revisiting the docs and practising it, it will eventually make sense.

## Using terminal / command line / command prompt
Don't worry these words all mean pretty much the same thing. 

It means writing commands that interact with your computer system (eg creating folders/files/moving things / telling it to open an application / list files in a folder etc...)

On a mac we write these commands in an application called **Terminal**.

On Windows there are a few different options but we recommend using **git bash** to get started. Note that **Git Bash is just an application like terminal is an application on mac** 

## Using the terminal

Press tab to autocomplete a word in terminal

### Move into a folder
```
cd myfolder  
```

### Move into folder and list items
```
cd myfolder  
li -a
```

### Move back one level of folder
```
cd ..
```

### Create file
```
touch myfile.html
```

### Create folder
```
mkdir myfolder
```

### open in finder
```
open myfolder
```


# GIT

What is Git?

Git is a version control system. It allows us to create regular snapshots of our project as we're working on it.. We can revert to one of these snapshots (which are called **commits**) when the site breaks or something.

You can _push_ / (move code) to a server or remote repostory like github using the command line.

Git allows us to share code and collaborate with other developers.

Each project is called a git **repository**.

It speeds up our workflow (when you gain more knowledge of it).

Github is a service that allows us to store remote repositories in the cloud.

To set up a git repo the easiest way to get started is by creating one in Github first, then cloning it onto your computer.

Follow the [guide](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) on github
to set up an SSH key.

Once you have set up ssh access to Github, you can move code from Github to your local computer.

## Git clone

Copies a repository onto your local computer from remote (eg repo on Github). The command is :

`git clone url-of-repo`

(you get the url by clicking the green button in github).

# Making a commit 

To make a commit, you first need to add modified files to the staging area - using `git add name-of.file' or `git add .` to add everything that was modified.

To commit it is:

```
git commit -m "a meaningful commit message"
```

# CSS GRID - Coming soon

