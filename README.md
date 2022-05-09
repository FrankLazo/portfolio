# Portfolio

## Notes

- [React Transition Group](https://reactcommunity.org/react-transition-group/):

```bash
npm install react-transition-group --save

# For typescript
npm i --save-dev @types/react-transition-group
```

- Responsive web design: for validate solved areas.

```
   Y ↑
     ║        |        |        |        |        |        |        |
1400 ╬--------+--------+--------+--------+--------+--------+--------+--
     ║        |        |        |        |        |        |        |
1200 ╬--------+--------+--------+--------+--------+--------+--------+--
     ║        |        |        |        |        |        |        |
1024 ╬--------+--------+--------+--------+--------+--------+--------+--
     ║        |        |        |        |        |        |        |
 768 ╬--------+--------+--------+--------+--------+--------+--------+--
     ║        |        |        |        |        |        |        |
 600 ╬--------+--------+--------+--------+--------+--------+--------+--
     ║        |        |        |        |        |        |        |
 480 ╬--------+--------+--------+--------+--------+--------+--------+--
     ║        |        |        |        |        |        |        |
 360 ╬--------+--------+--------+--------+--------+--------+--------+--
     ║        |        |        |        |        |        |        |
     ╬════════╬════════╬════════╬════════╬════════╬════════╬════════╬════>
     0      360      480      600      768     1024     1200     1400     X
```

## Errors and fixes

- Could not find a declaration file for module 'react-router-dom':

```bash
npm i --save-dev @types/react-router-dom
```

- `<Router>` does not work with `React.StrictMode`.

- Objects with bracket notation:

```ts
{
    // @ts-ignore
    menu[ appLanguage ].work
}
```

- Double render with `Router` and `React.StrictMode`.
