# scripts

- start   : npx nodemon src/index.ts
- build   : npx tsc
- lint    : eslint . --ext .ts
- prettier: prettier --config .prettierrc src/**/*.ts --write
- jasmine : jasmine
- test    : npm run build && npm run jasmine

# endpoints

- get('/resize/:name/:width/:height')
- get('/')

# the functionality

- resize image ( images/resize/photoName/width/height )**s**
- view the original ( images/photoName )
- support cashing
