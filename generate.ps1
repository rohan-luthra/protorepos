
# shell script to complie proto file and push to git

echo "Starting ... "
set x

GIT_HOST="rohan-luthra"
GIT_REPO=${GIT_REPO-~/go/src/github.com/rohan-luthra/protorepos/repos}
GIT_BRANCH=${GIT_BRANCH-"master"}
GIT_TOKEN="3edc80065e2184f1118789c5769059a0708a267d"

function enterDir {
  echo "Entering $1"
  pushd $1 > /dev/null
}

function leaveDir {
  echo "  Exiting `pwd`"
  popd > /dev/null
}

function complieProto {
  target=${1%/}
  if [ -f .protolangs ]; then
    while read lang; do

      echo "    Building for Language $lang"
      reponame="protorepo-$target-$lang"
      rm -rf $GIT_REPO/$lang/$reponame

      echo "    Cloning repo: https://github.com/$GIT_HOST/$reponame.git"
      git clone "https://$GIT_TOKEN@github.com/$GIT_HOST/$reponame.git" $GIT_REPO/$lang/$reponame
      manageBranch $GIT_REPO/$lang/$reponame


      for protofile in *.proto ; do
          echo "      Compliing file $protofile"
          docker run -v `pwd`:/defs namely/protoc-all -f $protofile -l $lang --with-docs --lint $([ $lang == 'node' ] && echo "--with-typescript" || echo "--with-validator")
      done

      cp -R gen/pb-$lang/* $GIT_REPO/$lang/$reponame/
      rm -rf gen
      commitAndPush $GIT_REPO/$lang/$reponame
    done < .protolangs
  fi
}

function manageBranch {
  enterDir $1

  echo "    Creating Branch $GIT_BRANCH"

  if ! git show-branch $GIT_BRANCH; then
    git branch $GIT_BRANCH
  fi

  git checkout $GIT_BRANCH

  if git ls-remote --heads --exit-code origin $GIT_BRANCH; then
    echo "    Branch exists on remote, pulling latest changes"
    git pull origin $GIT_BRANCH
  fi

  leaveDir
}

function commitAndPush {
  enterDir $1

  git add -N .
  if ! git diff --exit-code > /dev/null; then
    git add .
    git commit -m "   Auto Creation of Proto"
    git push origin HEAD
  else
    echo "    No changes detected for $1"
  fi
  leaveDir
}

function complie {
  echo "Starting the Build"
  mkdir -p $GIT_REPO
  for dir in */; do
    echo "  For \"$dir\""
    enterDir $dir
    complieProto $dir
    leaveDir
  done
}

complie

