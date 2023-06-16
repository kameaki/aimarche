#!/bin/bash

#シェルはコマンドのいずれかが失敗した場合に直ちに終了します（-e）、および実行される前に各コマンドを表示します（-x）。
set -ex

if [ "${CI}" == "true" ]; then
    # Don't do globally in CI because of possible permissions issues.
    npm install yarn
else
    npm install -g yarn
fi

#package.jsonに記録されているパッケージをインストール
yarn install
(cd client && yarn install)

./setup_libs.sh