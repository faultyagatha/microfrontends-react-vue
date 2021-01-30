## Microfrontends App using React and Vue

Deployed on AWS Cloud. 

[App Link](https://d1p36yd8zpmhpi.cloudfront.net/)

Important Notes on Microfrontends using ModuleFederationPlugin:

1. Browser will try to load the scripts in each service by taking current domain + path and adding main.js in the end. As a result, the path will be incorrect. This could be solved by prefixing publicPath in webpack.dev config with '/' in a simple monolitic app. However, for MFE, to avoid fallbacks to the main.js of the container, for every service in dev mode, publicPath property must be set relative to the service path with corresponding ports. 
2. To prevent scc name collision using css frameworks, make sure to generate different productionPrefixes for every service.
