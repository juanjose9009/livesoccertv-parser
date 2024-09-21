# livesoccertv-parser

> © All rights reserved to [Live soccer TV](http://www.livesoccertv.com/)

<p align="center">
  <a href="https://github.com/pablopunk/miny"><img src="https://img.shields.io/badge/made_with-miny-1eced8.svg" /></a>
  <a href="https://www.npmjs.com/package/livesoccertv-parser"><img src="https://img.shields.io/npm/dt/livesoccertv-parser.svg" /></a>
</p>

<p align="center">
  <i>Parse games info from livesoccertv</i>
</p>

## Install

```bash
npm install livesoccertv-parser
```

## Usage

The parser works with promises:

```js
const {getMatches} = require('livesoccertv-parser')
console.log(await getMatches('spain', 'real-madrid')) //=> [{...}, {...}, ...]
```

Match object:

```js
Match {
  live: false,
  played: true,
  competition: 'Supercopa de España',
  date: 'August 13',
  time: '4:00 PM',
  game: 'Barcelona vs Real Madrid',
  tvs:
    [
      'TeleCinco',
      'TV3',
      'Radio Barca'
    ]
}
```

### API

- Timezone

By default, the timezone is `America/New_York`. You can set your own with:

```js
getMatches('spain', 'real-madrid', { timezone: 'Europe/Madrid' })
getMatches('england', 'arsenal', { timezone: 'Europe/London' })
```

- Search

You can search for teams like so:

```js
const {searchTeams} = require("livesoccertv-parser")
searchTeams("madrid")
// [
//   ["spain", "real-madrid"],
//   ["spain", "atletico-madrid"],
// ]
```

## Contribute

Feel free to open an _issue_ or a _PR_.

## License

MIT

## Related

More at [pablopunk.com](https://pablopunk.com)

- [microsoccer](https://github.com/pablopunk/microsoccer): Microservice to fetch soccer games schedules and tv channels.

## Author

| ![me](https://gravatar.com/avatar/fa50aeff0ddd6e63273a068b04353d9d?size=100) |
| ---------------------------------------------------------------------------- |
| © 2018 [Pablo Varela](https://pablopunk.com)                                 |
