echo "Adding new component: $1 ..."

source yarn nx generate @nrwl/react:component $1 --project=$2 --style=none --pascalCaseDirectory --pascalCaseFiles --no-interactive

