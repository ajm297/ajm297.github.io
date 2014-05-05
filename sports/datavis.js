
var basketballData = 
[
{
month: "2011-01-01",
total: 0,
adjusted: 0
},
{
month: "2011-02-01",
total: 16,
adjusted: 46
},
{
month: "2011-03-01",
total: 22,
adjusted: 40
},
{
month: "2011-04-01",
total: 17,
adjusted: 35
},
{
month: "2011-05-01",
total: 17,
adjusted: 26
},
{
month: "2011-06-01",
total: 13,
adjusted: 23
},
{
month: "2011-07-01",
total: 21,
adjusted: 31
},
{
month: "2011-08-01",
total: 27,
adjusted: 34
},
{
month: "2011-09-01",
total: 24,
adjusted: 30
},
{
month: "2011-10-01",
total: 26,
adjusted: 33
},
{
month: "2011-11-01",
total: 30,
adjusted: 33
},
{
month: "2011-12-01",
total: 41,
adjusted: 43
},

]; 

var footballData =
[
{
month: "2011-01-01",
total: 13,
adjusted: 35
},
{
month: "2011-02-01",
total: 13,
adjusted: 37
},
{
month: "2011-03-01",
total: 21,
adjusted: 38
},
{
month: "2011-04-01",
total: 50,
adjusted: 102
},
{
month: "2011-05-01",
total: 38,
adjusted: 58
},
{
month: "2011-06-01",
total: 26,
adjusted: 46
},
{
month: "2011-07-01",
total: 51,
adjusted: 76
},
{
month: "2011-08-01",
total: 54,
adjusted: 69
},
{
month: "2011-09-01",
total: 56,
adjusted: 70
},
{
month: "2011-10-01",
total: 55,
adjusted: 70
},
{
month: "2011-11-01",
total: 57,
adjusted: 62
},
{
month: "2011-12-01",
total: 54,
adjusted: 57
},
];

var hockeyData =
[
{
month: "2011-01-01",
total: 0,
adjusted: 0
},
{
month: "2011-02-01",
total: 0,
adjusted: 0
},
{
month: "2011-03-01",
total: 0,
adjusted: 0
},
{
month: "2011-04-01",
total: 0,
adjusted: 0
},
{
month: "2011-05-01",
total: 0,
adjusted: 0
},
{
month: "2011-06-01",
total: 16,
adjusted: 29
},
{
month: "2011-07-01",
total: 11,
adjusted: 16
},
{
month: "2011-08-01",
total: 18,
adjusted: 23
},
{
month: "2011-09-01",
total: 14,
adjusted: 17
},
{
month: "2011-10-01",
total: 0,
adjusted: 0
},
{
month: "2011-11-01",
total: 16,
adjusted: 17
},
{
month: "2011-12-01",
total: 18,
adjusted: 19
},
];

var baseballData =
[

{
month: "2011-01-01",
total: 13,
adjusted: 35
},
{
month: "2011-02-01",
total: 0,
adjusted: 0
},
{
month: "2011-03-01",
total: 29,
adjusted: 53
},
{
month: "2011-04-01",
total: 18,
adjusted: 37
},
{
month: "2011-05-01",
total: 24,
adjusted: 37
},
{
month: "2011-06-01",
total: 16,
adjusted: 29
},
{
month: "2011-07-01",
total: 29,
adjusted: 43
},
{
month: "2011-08-01",
total: 26,
adjusted: 33
},
{
month: "2011-09-01",
total: 34,
adjusted: 42
},
{
month: "2011-10-01",
total: 36,
adjusted: 46
},
{
month: "2011-11-01",
total: 29,
adjusted: 32
},
{
month: "2011-12-01",
total: 33,
adjusted: 35
},

];



var w = 1100;
var h = 500;
var barPadding = 1;
var barWidth = w / basketballData.length / 5; 

//Create SVG element
var svg = d3.select("#containerDiv")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

var basketball = svg.append("g");

      basketball.selectAll("rect")
         .data(basketballData)
         .enter()
         .append("rect")
         .attr("x", function(d, i) {return i * (w / basketballData.length);})
         .attr("y", function(d) {return h - (d.adjusted * 4);})
         .attr("width", w / basketballData.length / 5 - barPadding)
         .attr("height", function(d) {return d.adjusted * 4;})
         .attr("fill", "#292D2E");

var football = svg.append("g");

      football.selectAll("rect")
         .data(footballData)
         .enter()
         .append("rect")
         .attr("x", function(d, i) {return i * (w / footballData.length) + barWidth;})
         .attr("y", function(d) {return h - (d.adjusted * 4);})
         .attr("width", w / footballData.length / 5 - barPadding)
         .attr("height", function(d) {return d.adjusted * 4;})
        .attr("fill", "#D04905");


var hockey = svg.append("g");

      hockey.selectAll("rect")
         .data(hockeyData)
         .enter()
         .append("rect")
         .attr("x", function(d, i) {return i * (w / hockeyData.length) + barWidth + barWidth;})
         .attr("y", function(d) {return h - (d.adjusted * 4);})
         .attr("width", w / hockeyData.length / 5 - barPadding)
         .attr("height", function(d) {return d.adjusted * 4;})
        .attr("fill", "#044984");    

var baseball = svg.append("g");

      baseball.selectAll("rect")
         .data(baseballData)
         .enter()
         .append("rect")
         .attr("x", function(d, i) {return i * (w / baseballData.length) + barWidth + barWidth + barWidth;})
         .attr("y", function(d) {return h - (d.adjusted * 4);})
         .attr("width", w / baseballData.length / 5 - barPadding)
         .attr("height", function(d) {return d.adjusted * 4;})
        .attr("fill", "#548C07");   


basketball.selectAll("text")
         .data(basketballData)
         .enter()
         .append("text")
         .text(function(d) {
            return d.adjusted;
         })
         .attr("text-anchor", "middle")
         .attr("x", function(d, i) {
            return i * (w / basketballData.length) + (w / basketballData.length - barPadding) / 10.5;
         })
         .attr("y", function(d) {
            return h - (d.adjusted * 4) + 14;
         })
         .attr("font-family", "sans-serif")
         .attr("font-size", "10px")
         .attr("fill", "white");


football.selectAll("text")
         .data(footballData)
         .enter()
         .append("text")
         .text(function(d) {
            return d.adjusted;
         })
         .attr("text-anchor", "middle")
         .attr("x", function(d, i) {
            return i * (w / footballData.length) + (w / footballData.length - barPadding) / 3.3;
         })
         .attr("y", function(d) {
            return h - (d.adjusted * 4) + 14;
         })
         .attr("font-family", "sans-serif")
         .attr("font-size", "10px")
         .attr("fill", "white");


hockey.selectAll("text")
         .data(hockeyData)
         .enter()
         .append("text")
         .text(function(d) {
            return d.adjusted;
         })
         .attr("text-anchor", "middle")
         .attr("x", function(d, i) {
            return i * (w / hockeyData.length) + (w / hockeyData.length - barPadding) / 2;
         })
         .attr("y", function(d) {
            return h - (d.adjusted * 4) + 14;
         })
         .attr("font-family", "sans-serif")
         .attr("font-size", "10px")
         .attr("fill", "white");



baseball.selectAll("text")
         .data(baseballData)
         .enter()
         .append("text")
         .text(function(d) {
            return d.adjusted;
         })
         .attr("text-anchor", "middle")
         .attr("x", function(d, i) {
            return i * (w / baseballData.length) + (w / baseballData.length - barPadding) / 1.42;
         })
         .attr("y", function(d) {
            return h - (d.adjusted * 4) + 14;
         })
         .attr("font-family", "sans-serif")
         .attr("font-size", "10px")
         .attr("fill", "white");





