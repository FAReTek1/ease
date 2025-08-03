# ease.gs

> smooth movement

This is an easing library which is built for [goboscript](https://github.com/aspizu/goboscript).
It is designed to be used with [inflator](https://github.com/faretek1/inflator).

## Credits

- https://easings.net/

## Installation

Make sure you have inflator installed

`inflate install https://github.com/FAReTek1/ease`

add ease to your `inflator.toml` config:
```toml
[dependencies]
# ...
ease = "https://github.com/FAReTek1/ease"
```

## Development

use `inflate install -e .`:

1. clone the respository: `git clone https://github.com/FAReTek1/ease`
2. `cd ease`
3. `inflate install -e .`
4. `cd test`
5. `inflate`
6. `goboscript build`
7. open `test.sb3`
