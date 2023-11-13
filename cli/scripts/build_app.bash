#!/bin/bash 

# Linting
{
  npm run lint
}

# Building modules
{
  echo ""
  echo "⚡️ Building of app..."
  bash ./cli/scripts/build_modules.bash --all 
}

# Nuxt.js application build
{
  cd ./app/nuxt-b64sc
  npm run build
}

{
  echo ""
  echo "✅ The application is ready for deployment."
}

exit 0