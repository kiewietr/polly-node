# polly-node
Node library for using Polly.help API. Currently used for Polly.help demo pages.

##Installation
`npm install polly-node --save`

##Documentation
Full final documentation is not yet available. Please contact for WIP docs.

##Usage

```js
var Polly = require('polly-node')(' your Polly API key ');
// Polly.{ RESOURCE_NAME }.{ METHOD_NAME }
```

Get publication:
```js
Polly.publication.get({
  publicationId: req.params._pubId
}, function(data) {
  res.send(data)
})
```
