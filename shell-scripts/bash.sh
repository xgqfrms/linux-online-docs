#!/usr/bin/env bash


# TODO: python3 & pip3 install checker
# if not installed then
#   # install promoto
#   echo "❌"
# else
#   echo "✅"
# fi

# build
python3 -m build

# upload
python3 -m twine upload dist/*
