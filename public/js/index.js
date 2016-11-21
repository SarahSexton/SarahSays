      var socket = io();
      $('form').submit(function(){
        socket.emit('chat message', $('#message-box').val());
        $('#message-box').val('');
        return false;
      });
      socket.on('chat message', function(msg){
        $('#messages').append($('<p>').text(msg));
      });
