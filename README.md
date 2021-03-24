# Git Swish

[![Build](https://github.com/samualtnorman/git-swish/actions/workflows/build-test.yml/badge.svg)](https://github.com/samualtnorman/git-swish/actions/workflows/build-test.yml)

Switch and stash. This package adds a command `swish` which stashes everything (untracked and ignored), switches branches, and then pops the last stash made on the branch.

This is useful if for example, you have 2 branches with different versions of packages on each. If you switch between the branches normally, `node_modules` is shared between which means you need to immediatly run `npm install` after switching. This gets around that by completely seperating each branch.

## Installation

### Command

Install the command with `npm install git-swish --global`

### API

The API is also available by installing the package locally with `npm install git-swish`

## Usage

`swish <branch>`

e.g. `swish dev`
