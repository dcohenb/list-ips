# list-ips


Generate simple arrays of valid ipv4 ips for whatever reason.

[![NPM](https://nodei.co/npm/list-ips.png?downloads=true)](https://nodei.co/npm/list-ips/)

# Usage:

```javascript
var listIps = require('list-ips');

// Simple range
listIps.list('192.0.0.0-10') // [192.0.0.0, 192.0.0.1, ..., 192.0.0.10]

// Wildcards
listIps.list('192.0.0.*') // [192.0.0.0, 192.0.0.1, ..., 192.0.0.255]

// Combine
listIps.list('192.0.1-2.*') // [192.0.1.0, ..., 192.0.1.255, 192.0.2.0, ..., 192.0.2.255]
```

# Contribution:
Please Do.

# License:
The MIT License, Check out the LICENSE file
