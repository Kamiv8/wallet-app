#!/bin/bash

# Recreate config file
rm -rf ./env-config.js
touch ./env-config.js

# Add assignment
echo "window._env_ = {" >> ./env-config.js

# Read each line in .env file
# Each line represents key=value pairs
while IFS= read -r line || [ -n "$line" ];
do
  # Remove carriage return characters if present
  line=$(echo "$line" | tr -d '\r')

  # Split env variables by character `=`
  if printf '%s\n' "$line" | grep -q -e '='; then
    varname=$(printf '%s\n' "$line" | cut -d '=' -f 1)
    varvalue=$(printf '%s\n' "$line" | cut -d '=' -f 2-)
  fi

  # Read value of current variable if exists as Environment variable
  value="${!varname}"
  # Otherwise use value from .env file
  [ -z "$value" ] && value="$varvalue"

  # Append configuration property to JS file
  echo "  $varname: \"$value\"," >> ./env-config.js
done < .env

echo "}" >> ./env-config.js