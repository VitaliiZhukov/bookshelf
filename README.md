
# books (books)

> Bookshelf app keeps information about books you read.

Demo [http://vitaliizhukov.github.io/bookshelf/]

### Stack
- reactjs
- flux
- yeoman flux-generator
- ES2015
- gulp
- npm, bower
- SCSS
- material-design-lite

### Implemented features
- add books to list
- validation of title, author name and description with highlighting of wrong filled fields. Description and rating can be empty.
- sorting by title, author or rating
- expand description on click
- remove books from list

### Yeoman annotations
### Running your project

The generated project includes a live-reloading static server on port `8080` (you can change the port in the `gulpfile.js` config), which will build, launch, and rebuild the app whenever you change application code. To start the server, run:

```bash
$ npm start
```

If you prefer to just build without the live reload and build-on-each-change watcher, run:

```bash
$ npm run build
```


## Generating Additional Code

You can add additional functionality to your application by invoking the subgenerators included in the Flux Generator. You can add components using the following commands:

#### Components
```bash
$ yo flux:component ComponentName
```

#### Actions
```bash
$ yo flux:action ActionCreatorName
```

#### Stores
```bash
$ yo flux:store StoreName
```
