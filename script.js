


function getRandomNickName() {

	var accessToken = '***';
	var url = $("#mediaIdURL").val();
	var mediaIdURL = 'http://api.instagram.com/oembed/?url=' + url;

	var getMediaId = function(res) {
	  // получил из res media id
	  console.log(res.media_id);
	  var mediaId = res.media_id;
	  console.log(mediaId);
	  console.log(res);
	  getCommentsByMediaId(mediaId);	
}

	var getCommentsByMediaId = function(mediaId) {
	 // опять айакс запрос с медиа айди и вся хуйня
	 var mediaCommentsURL = 'https://api.instagram.com/v1/media/' + mediaId + '/comments?access_token=' + accessToken;
	 console.log(mediaCommentsURL);
 	 $.getJSON(mediaCommentsURL, function(commentsRes) {
 		var nickArr = [];
 		console.log(commentsRes);
 		for (var i = 0; i < commentsRes.data.length; i++) {
  		nickArr.push(commentsRes.data[i].from.username);
  		console.log(commentsRes.data[i].from.username);
	 } 
 	 console.log(nickArr);
 	 var randomNick = Math.floor(Math.random() * nickArr.length);
  	 console.log(nickArr[randomNick]);
  	 $("h1").append(nickArr[randomNick]);
 	 });
}

	$.getJSON(mediaIdURL, getMediaId);
};
