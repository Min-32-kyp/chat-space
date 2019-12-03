$(function(){
  function buildHTML(message){
    // 「もしメッセージに画像が含まれていたら」という条件式
    if (message.image) {
      var html = //メッセージに画像が含まれる場合のHTMLを作る
      `<div class="message">
        <div class="upper-message">
          <div class="upper-message__user-name">
            ${message.user_name}
          </div>
          <div class="upper-message__date">
            ${message.date}
          </div>
        </div>
        <div class="lower-meesage">
          <p class="lower-message__content">
            ${message.body}
          </p>
        </div>
        <asset_path src=${message.image} >
      </div>`
    } else {
      var html = //メッセージに画像が含まれない場合のHTMLを作る
      `<div class="message">
        <div class="upper-message">
          <div class="upper-message__user-name">
            ${message.user_name}
          </div>
          <div class="upper-message__date">
            ${message.date}
          </div>
        </div>
        <div class="lower-meesage">
          <p class="lower-message__content">
          ${message.body}
          </p>
        </div>
      </div>`
    }
    return html
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,                 //同期通信でいう『パス』
      type: 'POST',             //同期通信でいう『HTTPメソッド』
      data: formData,  
      dataType: 'json',
      processData: false,
      contentType: false
    })

    .done(function(data) {
       var html = buildHTML(data);
      $('.main-content__chat-contents').append(html)
      $('#message_body').val('')
    })
    .fail(function() {
      alert('error');
    });
  })
});