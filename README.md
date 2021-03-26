# Git Swish

[![Build](https://github.com/samualtnorman/git-swish/actions/workflows/build-test.yml/badge.svg)](https://github.com/samualtnorman/git-swish/actions/workflows/build-test.yml)

Switch and stash. This package adds a command `swish` which stashes everything (untracked and ignored), switches branches, and then pops the last stash made on the branch.

This is useful if for example, you have 2 branches with different versions of packages on each. If you switch between the branches normally, `node_modules` is shared between which means you need to immediatly run `npm install` after switching. This gets around that by completely seperating each branch.

## Installation

You will need to install [NodeJS](https://nodejs.org/en/) first which will add a new command (`npm`) which is used to install this package.

### Installing the Command

This is probably what you are looking for.

Install the command with `npm install git-swish --global`.

### Using the API

This is for developers.

The API is also available by installing the package locally with `npm install git-swish` and importing with `require("git-swish")` in your javascript module. Your IDE will give your autocompletes for exports from this module (exports will be later documented).

## Usage

`swish <branch>`

e.g. `swish dev`
