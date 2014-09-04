// Analog-clock widget
// Author: Ashik uddin Ahmad (ashik.u.ahmad@gmail.com)
//
// Basic idea (and default theme) is ported and improved from a tutorial of Toby Pitman (http://css-tricks.com/css3-clock/).
// Other themes are extracted from various win7 clock gadgets. So those may not be used considering copyright.
// Those are only for example purposes to show how to add and apply a new theme.

command: "date",
 
refreshFrequency: 1000,

render: function (output) {
  return "<ul id=\"clock\">\
    <li id=\"sec\"></li>\
    <li id=\"hour\"></li>\
    <li id=\"min\"></li>\
  </ul>";
},
 
style: "                              																\n\
clock-size = 150px																										\n\
hand-width = 7px 																											\n\
hand-height = 150px 																									\n\
image-folder = 'default' 																							\n\
																																			\n\
url-for(image-name) 																									\n\
	url('analog-clock.widget/'+image-folder+'/'+image-name) 						\n\
																																			\n\
bottom: 110px                        																	\n\
left: 20px																														\n\
                        																							\n\
#clock 																																\n\
	position: relative																									\n\
	width: clock-size																										\n\
	height: clock-size																									\n\
	margin: 5px auto 0 auto																							\n\
	background: url-for('clockface.png') no-repeat											\n\
	list-style: none																										\n\
																																			\n\
#sec, #min, #hour																											\n\
	position: absolute																									\n\
	width: hand-width																										\n\
	height: hand-height																									\n\
	top: round((clock-size - hand-height)/2)														\n\
	left: round((clock-size - hand-width)/2)														\n\
																																			\n\
#sec																																	\n\
	background: url-for('sechand.png')																	\n\
	z-index: 3																													\n\
																																			\n\
#min																																	\n\
	background: url-for('minhand.png')																	\n\
	z-index: 2																													\n\
																																			\n\
#hour																																	\n\
	background: url-for('hourhand.png')																	\n\
	z-index: 1																													\n\
																																			\n\
p																																			\n\
	text-align: center 																									\n\
	padding: 10px 0 0 0																									\n\
",

update: function (output, domEl) {
	// Date from Unix Terminal
	// var comp = output.split(" ")[4].split(":");
	// var seconds = comp[2], mins = comp[1], hours = comp[0];

	// Date from Javascript
	var date = new Date(), seconds = date.getSeconds(), mins = date.getMinutes(), hours = date.getHours();
    
  var sdegree = seconds * 6;
  var srotate = "rotate(" + sdegree + "deg)";
	
  var mdegree = mins * 6 + (seconds / 10);
	var mrotate = "rotate(" + mdegree + "deg)";

	var hdegree = hours * 30 + (mins / 2);
	var hrotate = "rotate(" + hdegree + "deg)";

  $(domEl).find("#sec").css({"transform" : srotate});
	$(domEl).find("#min").css({"transform" : mrotate});
 	$(domEl).find("#hour").css({"transform" : hrotate});
}
