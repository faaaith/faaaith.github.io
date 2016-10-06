
// function addEvent(element, type, handler) {
//         if (element.addEventListener) {
//             element.addEventListener(type, handler, false);
//         } else if (element.attachEvent) {
//             element.attachEvent("on" + type, handler);
//         } else {
//             element["on" + type] = handler;
//         }
//     }
// var btn = document.getElementById("asd");
// console.log(btn);
// btn.onclick = function(){
	
// };
// addEvent(btn,"click",function(e){
	
// 	var target = e.target || e.srcElement;
// 	var list = $(".nav1 a");
	
// 	for(var i=0;i<list.length;i++){
// 		console.log(list[i]);
// 		list[i].style.display = "inline-block";
// 	}
// });
var flag = false;
$('#asd').click(function(){
	
	if (flag==true) {
		$('.nav1 a').css('display',"none");
		flag=false;
	} else {
		$('.nav1 a').css('display',"inline-block");
		flag=true;
	}
})
$('.nav1 a').hover(function(){
	$(this).addClass('active');
})
$('.nav1 a').mouseleave(function(){
	$(this).removeClass('active');
})