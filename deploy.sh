#!/usr/bin/env sh

# 生成静态文件
yarn docs:build

rm -rf build.tar
tar -zcvf build.tar ./docs/.vuepress/dist
sshpass -p $PASSWORD scp -o StrictHostKeyChecking=no ./build.tar root@47.107.225.230:/var/www/
sshpass -p $PASSWORD ssh -o StrictHostKeyChecking=no root@47.107.225.230 "cd /var/www/ && rm -rf docs html && tar -zxvf build.tar  && mv ./docs/.vuepress/dist/myblog ./html"
