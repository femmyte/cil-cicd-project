#!/bin/bash
cd cil-cicd-project 
git pull origin main
yarn install &&
yarn build &&
pm2 restart my_app 