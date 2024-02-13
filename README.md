# Module 4 : 4.21 - Removing Effect Dependencies - Part 1

## 🧹 To remove a dependency, prove that it’s not a dependency

Notice that you can’t “choose” the dependencies of your Effect. Every reactive value used by your Effect’s code must be declared in your dependency list.
