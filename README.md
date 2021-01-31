## Microfrontends App using React and Vue

Deployed on AWS Cloud using Github Actions. 

[App Link](https://d1p36yd8zpmhpi.cloudfront.net/)

The app uses Module Federation Plugin to connect following frontends together:

- **Container**: the main hub of the app, manages all business logic
- **Marketing**: sub-app responsible for pricing, pitching, and product information
- **Auth**: sub-app responsible for user authentication 
- **Dashboard**: sub-app responsible for displaying dashboard inormation for authenticated users

Important Notes on Microfrontends using Module Federation Plugin:

1. Script loading: 

Browser will try to load the scripts in each service by taking current domain + path and adding main.js in the end. As a result, the path will be incorrect. This could be solved by prefixing publicPath in webpack.dev config with '/' in a simple monolitic app. However, for MFE, to avoid fallbacks to the main.js of the container, for every service in dev mode, publicPath property must be set relative to the service path with corresponding ports. 

2. CSS loading:

To prevent scc name collision using css frameworks, make sure to generate different productionPrefixes for every service.
