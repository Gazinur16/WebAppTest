TelegramWebApp.getUserProfilePhotos().then(function (data) {
    var file_id = data.photos[0][0].file_id;
    var img = document.getElementById('user-avatar');
    img.src = 'https://api.telegram.org/file/6834164465:AAEokQ3sNvwTYG8fewiqUp11_vVOZECUDBg/' + file_id;
  });