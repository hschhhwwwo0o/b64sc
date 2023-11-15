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

# @base64-to-dataurl-generator dependencies install
{
  cd ../../ && cd ./modules/base64-to-dataurl-generator
  npm install
  
  echo ""
  echo "✅ @base64-to-dataurl-generator dependencies successfully installed"
} || {
  echo "Dependency installation error @base64-to-dataurl-generator ❌"
}

# @html-image-controller dependencies install
{
  cd ../../ && cd ./modules/html-image-controller
  npm install
  
  echo ""
  echo "✅ @html-image-controller dependencies successfully installed"
} || {
  echo "Dependency installation error @html-image-controller ❌"
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