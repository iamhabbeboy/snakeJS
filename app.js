(function(window) {

  var snake = document.querySelector('.snake'),
  btn = document.querySelector('button'),
   status = false, square = document.querySelector('.square');
   square.style.left = "0px";
   snake.style.left = "10px";
   snake.style.top = '0px';
   var running = 0, time = 0;

  var Game = {

    version: '0.0.1',

    start: function(s) {
       this.increment(s)
    },

    pause: function() {

       clearInterval(this.time);
    },

    point: function() {
      var num = 200, left, top;
      top  = Math.floor(Math.random() * num);
      left = Math.floor(Math.random() * num);
      console.log(top+', '+left);
      square.style.left = left + 'px';
      square.style.top = top + 'px'
    },

    increment: function(s) {

       d = setInterval(function() {

         //time++;
         if (s == 1){
         snake.style.left = parseInt(snake.style.left) + 10 + 'px';
           console.log(snake.style.left);
         } else {
           console.log('stop...')
           clearInterval(d);
           return false;
         }
           //console.log(time);
       }, 1000);
    },

    navigation: function(list) {

       var up, down, left, right;
       up = list.up, down = list.down, left = list.left, right = list.right, body = document.querySelector('body');

       body.addEventListener('keydown', function(e) {
          if (e.which === up) {
            //alert('Hello, world !')
            snake.style.top = parseInt(snake.style.top) + (-10) + 'px';
          } else if (e.which === down) {
            snake.style.top = parseInt(snake.style.top) + (10) +'px';
          } else if (e.which === left) {
            snake.style.left = parseInt(snake.style.left) + (-10) + 'px';
          } else if (e.which === right ) {
            snake.style.left = parseInt(snake.style.left) + (10) + 'px';
          }
       });


    }

 };

  window.Game = Game;
}(window))
