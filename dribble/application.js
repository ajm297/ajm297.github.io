 //Backup data: $.getJSON("http://web2spring2014.herokuapp.com/assets/dribbble-cc215791e1db5565d5f5ffa3cc4a3cc7.json",function(data) {
    $.getJSON("http://api.dribbble.com/shots/popular?callback=?",function(data) {
      console.log(data);
       for(var i=0;i<data.shots.length;i++) {
      	var title = $("<div>").text(data.shots[i].title);
        $("#shots").append(title);

        var likes = $("<div>").text(data.shots[i].likes_count);
        $("#shots").append(likes);

        var image = $("<img>").attr("src",data.shots[i].image_teaser_url);
        $("#shots").append(image);
      } 
    });
  
  