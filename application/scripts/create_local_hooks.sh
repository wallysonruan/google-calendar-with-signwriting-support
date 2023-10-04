#!/bin/sh

# https://gist.github.com/mohanpedala/1e2ff5661761d3abd0385e8223e16425
set -euxo pipefail


# This command will copy all files from the current directory to the .git/hooks/ directory except for those with names ending in .sh.
# 
# find .: Starts searching from the current directory.
# -maxdepth 1: Limits the search to only the current directory (does not recurse into subdirectories).
# -type f: Filters the search results to include only files.
# ! -name "*.sh": Excludes files with names ending in .sh.
# -exec cp {} ../../.git/hooks/ \;: Executes the cp command for each found file, copying it to the .git/hooks/ directory.

find . -maxdepth 1 -type f ! -name "*.sh" -exec cp {} ../../.git/hooks/ \;

