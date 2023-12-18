#!/bin/bash 

# A script designed for building an application for the subsequent launch of a deployment. 
# The script starts linking, builds modules, builds the application.

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
  npm run generate
}

{
  echo ""
  echo "✅ The application is ready for deployment."
}

exit 0