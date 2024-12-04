var posts=["2024/12/04/hello-world/","2024/12/04/教程开始前的一些有用的话/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };