
# build
npm run build

LOGSTRING=$(git log)
COMMIT=$(echo $LOGSTRING | awk '${print $2}')
# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m "deploy (commit: $COMMIT)"

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://git@github.com:AWSUGCLT/aws_community_calicut.git main:gh-pages

cd ..