var posts=["essay/Loon：新手从入门到卸载/","essay/教程开始前的一些有用的话/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };