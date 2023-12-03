rm -rf build
npm run build
cd build
git init
git remote add origin git@github.com-quytrungg:quytrungg/quytrungg.github.io.git
git add .
git commit -m 'Trigger build'
git push origin master -f
