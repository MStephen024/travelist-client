#!/bin/bash

curl --include "http://localhost:4741/locations" \
  --header "Authorization: Token token=${TOKEN}"

echo
