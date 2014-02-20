hexo.extend.generator.register(function(locals, render, callback){
  render('/develop/', ['develop', 'index'], locals);
  callback();
});