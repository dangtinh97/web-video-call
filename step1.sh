# shellcheck disable=SC2164
yarn build;
cd .next;
cp -R static ./server/pages
cd server && cd pages
for file in ./*.html; do
  sed 's#/_next#.#g' "$file" > "$file.tmp" && mv "$file.tmp" "$file"
done

# shellcheck disable=SC2103
cd .. ;

cp -R pages ../../static
