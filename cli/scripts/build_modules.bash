#!/bin/bash 

# Handling the --all parameter
{
  case $1 in
    "--all") 
      echo ""
      echo "Compiling of modules... 💚"

      cd ./modules/feedback-service && npm run compile
      cd ../../

      echo "All modules have been successfully compiled ✅ 🌿 "
      exit 0
    ;;
  esac
}

# Handling a script called without parameters
{
  echo ""
  echo "Select the module to compile: "
  echo "  1) All"
  echo "  2) @feedback-service"
  echo "  0) Quit"

  read n
  case $n in
    1)
      cd ./modules/feedback-service && npm run compile
      cd ../../

      echo "✅ All modules have been successfully compiled"
    ;;
    2) 
      cd ./modules/feedback-service && npm run compile
      cd ../../
      
      echo "✅ @feedback-service module successfully compiled."
    ;;
    0) 
      exit 0
    ;;
    *) echo "Invalid option.";;
  esac
}