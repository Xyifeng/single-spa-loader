define(function () {
  var projects=[{
    name:'vue',
    path:'/vue',
    main:['/single/js/chunk-vendors.js','/single/js/app.js'],
    store:'/single/js/store.js',
    dev:'http://localhost:8201/single/app.js' // 开发环境地址
  }]
  return {
    projects: projects
  };
});