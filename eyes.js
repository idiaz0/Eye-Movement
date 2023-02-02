const balls = document.getElementsByClassName('ball');

document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

  for (a=0; a < balls.length; a++){
    balls[a].style.left = x;
    balls[a].style.top = y;
    balls[a].transform = 'translate(-' + x + ',-' + y + ')';
  }

};