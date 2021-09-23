## App to demonstrate cypress thingy

#### App setup
`yarn install`
`yarn run setup:db`

#### App running
`yarn start`
`yarn run start:server`

#### App functionality

Type some domain and click Create!
Request to create new `item` is sent.
Along with the `item`, `path` is created
`path` resource contains `urlWithToken` property with server generated token.
App fetches the `path` resource to get the `urlWithToken` property and display it in UI

#### Real life example

Upload image (in this app it's `item`)
After image upload server responds with url to fetch authenticated image (in this app it `tokenPath`)
Fetch image resource to display it in the app (in our app it's `path` and its `urlWithToken`)
