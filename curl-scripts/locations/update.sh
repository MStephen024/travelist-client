# !/bin/sh

# use like this:
#
#    ID=123 TITLE="Harry Potter: Deathly Hallows" AUTHOR="J.K. Rowling" ./scripts/books.sh


curl "http://localhost:3000/books/45" \
  --include \
  --request PATCH  \
  --header "Content-Type: application/json" \
  --data '{
    "book": {
      "title": "an example title",
      "author": "Rebekah"
    }
  }'
