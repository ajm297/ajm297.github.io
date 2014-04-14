    $(function(){

      //console.log(data);
       for(var i=0;i<data.length;i++) {
       	console.log(data[i]);

      	var title = data[i][8];
      	var salary = data[i][18] /210;
      	var graph = $("<div>");
      	var titleParagraph = $("<p>").text(title);
      	var salaryParagraph = $("<p>").text(salary);

		var div= $("<div class='bar'></div>").css("width",salary);

      	graph.append(titleParagraph);
      	graph.append(div);

      	
      	$("#containerDiv").append(graph);

       // $("#").append(title);
   }
});