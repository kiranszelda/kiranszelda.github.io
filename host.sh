#!/bin/bash

# Run this as ./host.sh ip port
if [ -z "$1" ] || [ -z "$2" ]; then
  echo "No argument(s) supplied. Run ./host.sh ip port"

else
  php -S $1:$2

fi