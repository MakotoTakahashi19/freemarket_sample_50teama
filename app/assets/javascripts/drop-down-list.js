$(document).on('turbolinks:load', function() {

  $('#notification-list__root').on("mouseover", function(){
    $('#notification-list').css('display','block');
      $('#todo-list').css('display','none');
    }); // end #notification-list の dysplayがblockの時の処理
  }); //「お知らせ」ボタンに触るとリストが表示される

  $(document).on('turbolinks:load', function() {
    $('#notification-list').on("mouseover", function(){
      $(this).css('display','block');
      }); //表示されたリストを触り続けている間はリストが表示され続ける

    $('#notification-list').delay(500).on("mouseout", function(){
      $(this).css('display','none');
  }); //リストからマウスを離すと、0.5秒後にリストは見えなくなる

  //---------------------------------------------やることリストのJS
  $('#todo-list__root').on("mouseover", function(){
    $('#todo-list').css('display','block');
      $('#notification-list').css('display','none');
    }); // end #todo-list の dysplayがblockの時の処理
  }); // end mouse over 時の処理

  $(document).on('turbolinks:load', function() {
    $('#todo-list').on("mouseover", function(){
      $(this).css('display','block');
      });

    $('#todo-list').delay(500).on("mouseout", function(){
      $(this).css('display','none');
  });

});
