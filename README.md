<p align="center"><img src="https://github.com/senhungwong/easy-order/blob/master/src/assets/logo.png" height="120"></p>

## Description

Content management system built on Vue

## API End Point

Used with a back end project [cms](https://github.com/de2008de/cms-backend).

Back end is deployed on [heroku](https://cms-easyorder.herokuapp.com)

## Demo

[Demo](http://easyorder.senhung.net)

You can create a new account and test it out or login as an admin (username: admin; password: password)

The site is only for demonstrating, please do not overwhelm the server, thank you!

## Deployment

1. Change VueResource API Root

Change `src/VueResource/resource.js` as follow:

```javascript
/* ... */
Vue.http.options.root = 'https://cms-easyorder.herokuapp.com'; /* Deployment https://cms-easyorder.herokuapp.com */
```

2. Build

```bash
$ npm run build
```

3. Deploy

Copy files in `dist/*` to the deployment server.
