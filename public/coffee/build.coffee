require.config
  deps: ['requirejs']
  baseUrl: 'public/js'


require ['application'], (App) ->

  console.log('load appliction', App);
