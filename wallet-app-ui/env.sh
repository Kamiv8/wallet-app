#!/bin/sh

set -e
rm -rf ./usr/share/nginx/html/env-config.js
touch ./usr/share/nginx/html/env-config.js


echo "window.__env__ = {" >> ./usr/share/nginx/html/env-config.js

while IFS= read -r line || [ -n "$line" ];
do
  if printf '%s\n' "$line" | grep -q -e 'REACT_APP_';
  then
    varname=$(printf '%s\n' "$line" | sed -e 's/=.*//')
    varvalue=$(printf '%s\n' "$line" | sed -e 's/^[^=]*=//')
    echo " $varname: \"$varvalue\"," >> ./usr/share/nginx/html/env-config.js
  fi
done < .env

echo "}" >> ./usr/share/nginx/html/env-config.js
