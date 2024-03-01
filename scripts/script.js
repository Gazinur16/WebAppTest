TelegramWebApp.getUserProfilePhotos().then(function (data) {
    var file_id = data.photos[0][0].file_id;
    var img = document.getElementById('user-avatar');
    img.src = 'https://api.telegram.org/file/botYOUR_BOT_TOKEN/' + file_id;
  });