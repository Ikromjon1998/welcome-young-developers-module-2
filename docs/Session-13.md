# 🌟 Session 13: Git: Your Website’s Time Machine! ⏳

Welcome back, young coders! Today, we’re going to learn about Git, a powerful tool that lets you save different versions of your website and go back in time if needed. Ready to travel through the history of your code? Let’s dive in!

## 🎯 **Learning Goals for Today**

By the end of this session, you will:
1. Understand what Git is and how it works.
2. Learn how to use Git commands to manage your project’s versions.
3. Practice committing changes and rolling back to previous versions.

## 📖 **Introduction to Git**

### **What is Git?**

Git is a version control system that helps you track changes to your files and coordinate work on those files among multiple people. It's like a time machine for your code!

### **Key Concepts of Git**

- **Repository**: A storage space where your project’s files and their history are kept.
- **Commit**: A snapshot of your project's files at a specific point in time.
- **Branch**: A parallel version of your project where you can make changes without affecting the main codebase.

## 🔍 **Exploring Git**

### **1. Creating a Git Repository**

- **Explanation**: A repository is where all your project’s files live, along with their history.

1. Open your terminal or command prompt.
2. Navigate to your project directory using the `cd` command.
3. Initialize a new Git repository:

```bash
git init
```

### **2. Tracking Changes with Git**

- **Explanation**: Git allows you to track changes to your files and create snapshots (commits) that you can go back to.

1. **Stage Your Changes**:

```bash
git add .
```

2. **Commit Your Changes**:

```bash
git commit -m "Initial commit"
```

### **3. Viewing Your Project’s History**

- **Explanation**: You can view the history of your commits to see what changes were made and when.

1. **View the Commit History**:

```bash
git log
```

### **4. Rolling Back to a Previous Version**

- **Explanation**: If something goes wrong, you can go back to a previous commit.

1. **Reset to a Previous Commit**:

```bash
git reset --hard <commit-hash>
```

2. **Find the Commit Hash**:
   - The commit hash is shown in the output of the `git log` command.

## 💻 **Interactive Coding Activity: Version Control with Git**

### **1. Set Up Your Git Repository**

1. Open your terminal or command prompt.
2. Navigate to your project directory.
3. Initialize a Git repository:

```bash
git init
```

### **2. Make Your First Commit**

1. Create a simple `index.html` file:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Version Control with Git</title>
</head>
<body>
  <h1>Welcome to My Website!</h1>
</body>
</html>
```

2. Stage and commit your changes:

```bash
git add index.html
git commit -m "Add index.html file"
```

### **3. Make Some Changes and Commit Again**

1. Edit your `index.html` file to add a new paragraph:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Version Control with Git</title>
</head>
<body>
  <h1>Welcome to My Website!</h1>
  <p>This is my first website using Git for version control.</p>
</body>
</html>
```

2. Stage and commit your changes:

```bash
git add index.html
git commit -m "Add a new paragraph"
```

### **4. View Your Commit History**

1. Use the `git log` command to view your commit history:

```bash
git log
```

### **5. Roll Back to a Previous Version**

1. Copy the hash of the initial commit from the `git log` output.
2. Reset your repository to the initial commit:

```bash
git reset --hard <commit-hash>
```

3. Check your `index.html` file to see the changes rolled back.

## 📚 **Interactive Quiz**

Let’s test your knowledge with a fun quiz! Answer the following questions to see how much you’ve learned.

1. **What is a Git repository?**
    - a) A type of file
    - b) A storage space for your project’s files and history
    - c) A website

2. **What command is used to stage changes in Git?**
    - a) `git commit`
    - b) `git add`
    - c) `git log`

3. **How do you view the commit history in Git?**
    - a) `git history`
    - b) `git log`
    - c) `git commits`

### **Quiz Answers:**

1. b) A storage space for your project’s files and history
2. b) `git add`
3. b) `git log`

## 🛠️ **Hands-On Project: Create a Version-Controlled Website**

In this project, you’ll create a website with multiple versions and learn how to manage those versions with Git.

### **Project Steps:**

1. **Initialize Your Git Repository:**

```bash
git init
```

2. **Create a Basic HTML File:**

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Version-Controlled Website</title>
</head>
<body>
  <h1>Welcome to My Website!</h1>
</body>
</html>
```

3. **Commit Your Changes:**

```bash
git add index.html
git commit -m "Initial commit"
```

4. **Add More Content and Commit Again:**

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Version-Controlled Website</title>
</head>
<body>
  <h1>Welcome to My Website!</h1>
  <p>This is my first version-controlled website.</p>
</body>
</html>
```

```bash
git add index.html
git commit -m "Add a new paragraph"
```

5. **Experiment with Branches:**

- **Create a New Branch:**

```bash
git checkout -b new-feature
```

- **Make Changes in the New Branch:**

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Version-Controlled Website</title>
</head>
<body>
  <h1>Welcome to My Website!</h1>
  <p>This is my first version-controlled website.</p>
  <p>Here’s a new feature!</p>
</body>
</html>
```

```bash
git add index.html
git commit -m "Add a new feature"
```

- **Switch Back to the `main` Branch:**

```bash
git checkout main
```

- **Merge the `new-feature` Branch:**

```bash
git merge new-feature
```

## ✨ **Wrap-Up and Homework**

You did an amazing job today! To reinforce what you've learned:

- **Homework:** Create a repository for a new project, make several commits, and practice using branches.
- **Additional Practice:** Explore more Git commands like `git diff` and `git status` to manage your project effectively.

## 🚀 **Fun Fact!**

Did you know that Git was created by Linus Torvalds, the same person who created the Linux operating system? Git is now one of the most popular version control systems in the world!

Keep exploring, and happy coding! 💻
