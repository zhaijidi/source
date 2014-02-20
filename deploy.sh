#!/bin/sh
hexo clean
hexo generate
hexo deploy
git push -u source master
