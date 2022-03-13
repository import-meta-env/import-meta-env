set -e

# set up
rm -rf dist

# act
pnpm exec vite build
pnpm exec cross-env HELLO=import-meta-env import-meta-env --example .env.example.public

# assert
diff -r dist __fixtures__
