#!/bin/bash 

{
  echo ""
  echo "⚡️ Linting..."
}

# Lint modules
{
  cd ./modules/feedback-service && npm run lint
  cd ../../
}

# Lint app
{
  cd ./app/nuxt-b64sc && npm run lint
  cd ../../
} || {
  exit 1
}

{
  echo ""
  echo "✅ Successfully linted."
}

exit 0