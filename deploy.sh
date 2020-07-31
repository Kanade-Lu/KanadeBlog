
set -e

# 进入生成的文件夹
cd ./public

npm run build
git add -A
git commit -m 'updateBlog'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/Kanade-Lu/KanadeBlog.git master:gh-pages

cd -
