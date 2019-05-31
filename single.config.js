define(function () {
  var projects=[{
    name:'vue',
    path:'/vue',
    main:['/single/js/chunk-vendors.js','/single/js/app.js'],
    store:'/single/js/store.js',
    devMain:'http://localhost:8201/single/app.js', // 开发环境地址
    devStore:'http://localhost:8201/single/store.js'
  }]
  return {
    projects: projects
  };
});