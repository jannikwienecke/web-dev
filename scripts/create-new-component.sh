echo "Adding storybook for $1 ..."
source yarn nx generate @nrwl/react:component-story --componentPath=lib/$1/$1.tsx --project=$2


