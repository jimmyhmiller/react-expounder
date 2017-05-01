# React Expounder

[![npm package][npm-badge]][npm]


### Example

```javascript
import { Expoundable, Expound, Link } from 'react-expounder';

const Info = () => 
	<Expoundable>
		Click <Link expound="more">here</Link> for more info.
		<Expound expound="more">Some extra information.</Expound>
	</Expoundable>
```

### Install
```bash
npm install --save react-expounder
```

### Special Thanks

Skorokithakis for making the [library](https://github.com/skorokithakis/expounder) this is based on.


[npm-badge]: https://img.shields.io/npm/v/react-expounder.png?style=flat-square
[npm]: https://www.npmjs.org/package/react-expounder