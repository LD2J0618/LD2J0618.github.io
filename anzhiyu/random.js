var posts=["essay/Loon：新手从入门到卸载/","essay/教程开始前的一些有用的话/","essay/如何在vps上部署Bark通知ssh连接及资源监控脚本/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };