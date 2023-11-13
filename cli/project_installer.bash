#!/bin/bash 

# Husky install
{
  rm -rf .husky
  npm install husky --save-dev
  npx husky install
  npm install
  npx husky add .husky/pre-commit "npm run lint"

  echo ""
  echo "✅ Husky has been successfully installed"
} || {
  echo "Error installing husky ❌"
}

# Application dependencies install
{
  cd ./app/nuxt-b64sc
  npm install 

  echo ""
  echo "✅ Application dependencies successfully installed"
} || {
  echo "Error installing application dependencies ❌"
}

# @feedback-service dependencies install
{
  cd ../../ && cd ./modules/feedback-service
  npm install
  
  echo ""
  echo "✅ @feedback-service dependencies successfully installed"
} || {
  echo "Dependency installation error @feedback-service ❌"
}

# Compile all modules
{
  cd ../../
  npm install
  bash ./cli/scripts/build_modules.bash --all
} || {
  echo "Error compiling modules ❌"
}

exit 0