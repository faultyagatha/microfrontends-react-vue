## Microfrontends App using React and Vue

Deployed on AWS Cloud. 

[App Link](https://d1p36yd8zpmhpi.cloudfront.net/)

Important Notes on Microftontends using Webpack module federation:

1. To avoid a fallback to the main.js of the container, for every service in dev mode, publicPath property must be set relative to the service path with corresponding ports
2. To prevent scc name collision using css frameworks, make sure to generate different productionPrefixes for every service.
