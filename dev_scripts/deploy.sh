#!/bin/bash


BRANCH='gh-pages'
COMMIT=$(git rev-parse HEAD)

yarn install
yarn build

cp .gitignore build/
cp CNAME build/

### переключиться на ветку gh-pages
if git checkout ${BRANCH} ; then
  echo ok
else
  echo "Failed to switch to branch: $BRANCH"
  exit 1;
fi

git reset --hard origin/${BRANCH}

find * -not -path "build/*" -not -path "node_modules/*" -delete

mv build/.gitignore ./
mv build/CNAME ./
mv -f ./build/* ./

git add .
git commit -m ${COMMIT}
git push
git checkout -
