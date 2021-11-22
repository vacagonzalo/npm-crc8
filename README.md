# npm-crc8
nodejs package for Sarwate's CRC8

## Usage

```
npm install @vacagonzalo/npm-crc8
```

Basic example:

```javascript
import { Buffer } from 'buffer';
import crc8 from '@vacagonzalo/npm-crc8';
const poly = 0x1c
let buffer = Buffer.alloc(9, 0x31); // "111111111"

let crc = crc8(poly)(buffer);
console.log(crc); //should be 112 in decimal.
```

You can create a crc engine:

```javascript
import { Buffer } from 'buffer';
import crc8 from '@vacagonzalo/npm-crc8';
const poly = 0x1c
let buffer = Buffer.alloc(9, 0x31); // "111111111"

const crcBuilder = crc8(poly); // you can use it multiple times
let crc = crcBuilder(buffer);
console.log(crc); // should be 112 in decimal.
```

## Contact me

You can mail me to vacagonzalo@gmail.com

Feel free to make a pull request.

Best regards,

Gonzalo