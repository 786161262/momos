var noweb = {};
noweb.partial = "../html/temp/noweb.html";
noweb.init = function(){
    console.log('网址不存在');
}

var notfound = {};
notfound.partial = "../html/temp/404.html";
notfound.init = function(){
    console.log('网址不存在');
}

var home= {};
home.partial = "../html/temp/home.html";
home.init = function(){
	miniSPA.render("home");
	commonFun.load_page("#page_innerContent")
}

var button= {};
button.partial = "../html/temp/button.html";
button.init = function(){
	miniSPA.render("button");	
}

var list= {};
list.partial = "../html/temp/list.html";
list.init = function(){
	miniSPA.render("list");	
}

var listDefault= {};
listDefault.partial = "../html/temp/listDefault.html";
listDefault.init = function(){
	miniSPA.render("listDefault");	
}

var listCustomTop= {};
listCustomTop.partial = "../html/temp/listCustomTop.html";
listCustomTop.init = function(){	
	miniSPA.render("listCustomTop");
	
}

var listCustom= {};
listCustom.partial = "../html/temp/listCustom.html";
listCustom.init = function(){
	miniSPA.render("listCustom");
	miniSPA.appendScript("../script/plugins/lightbox/lightbox.min");
	
}

var listTimeLine= {};
listTimeLine.partial = "../html/temp/listTimeLine.html";
listTimeLine.init = function(){
	miniSPA.render("listTimeLine");
	
}

var pullToRefresh= {};
pullToRefresh.partial = "../html/temp/pullToRefresh.html";
pullToRefresh.init = function(){
	miniSPA.render("pullToRefresh");
	/*
	 * 实际使用的过程中把代码写到这里
	 * 否则js文件会越累计越多
	 */
	miniSPA.appendScript("../script/views/pullToRefresh");
}

var tabbar= {};
tabbar.partial = "../html/temp/tabbar.html";
tabbar.init = function(){
	miniSPA.render("tabbar");
	/*
	 * 实际使用的过程中把代码写到这里
	 * 否则js文件会越累计越多
	 */
	miniSPA.appendScript("../script/views/pullToRefreshTabs");

	
}
var tabs= {};
tabs.partial = "../html/temp/tabs.html";
tabs.init = function(){
	miniSPA.render("tabs");
	
}

var form= {};
form.partial = "../html/temp/form.html";
form.init = function(){
	miniSPA.render("form");	
}

var formDefault= {};
formDefault.partial = "../html/temp/formDefault.html";
formDefault.init = function(){
	miniSPA.render("formDefault");	
}

var formDate= {};
formDate.partial = "../html/temp/formDate.html";
formDate.init = function(){
	miniSPA.render("formDate");	
	/*
	 * 实际使用的过程中把代码写到这里
	 * 否则js文件会越累计越多
	 */
	miniSPA.appendScript("../script/views/formDate");
}

var formTime= {};
formTime.partial = "../html/temp/formTime.html";
formTime.init = function(){
	miniSPA.render("formTime");	
	/*
	 * 实际使用的过程中把代码写到这里
	 * 否则js文件会越累计越多
	 */
	miniSPA.appendScript("../script/views/formTime");
}

var formCity= {};
formCity.partial = "../html/temp/formCity.html";
formCity.init = function(){
	miniSPA.render("formCity");
	/*
	 * 实际使用的过程中把代码写到这里
	 * 否则js文件会越累计越多
	 */
	miniSPA.appendScript("../script/plugins/city-picker");
	miniSPA.appendScript("../script/views/formCity");
}

var formSelect= {};
formSelect.partial = "../html/temp/formSelect.html";
formSelect.init = function(){
	miniSPA.render("formSelect");
	/*
	 * 实际使用的过程中把代码写到这里
	 * 否则js文件会越累计越多
	 */
	miniSPA.appendScript("../script/views/formSelect");
}

var actionSheet= {};
actionSheet.partial = "../html/temp/actionSheet.html";
actionSheet.init = function(){
	miniSPA.render("actionSheet");
	/*
	 * 实际使用的过程中把代码写到这里
	 * 否则js文件会越累计越多
	 */
	miniSPA.appendScript("../script/views/actionSheet");
}

var alerts= {};
alerts.partial = "../html/temp/alerts.html";
alerts.init = function(){
	miniSPA.render("alerts");
	/*
	 * 实际使用的过程中把代码写到这里
	 * 否则js文件会越累计越多
	 */
	miniSPA.appendScript("../script/views/alerts");
}

var grid= {};
grid.partial = "../html/temp/grid.html";
grid.init = function(){
	miniSPA.render("grid");	
}

var progress= {};
progress.partial = "../html/temp/progress.html";
progress.init = function(){
	miniSPA.render("progress");	
}

var msg= {};
msg.partial = "../html/temp/msg.html";
msg.init = function(){
	miniSPA.render("msg");	
}

var article= {};
article.partial = "../html/temp/article.html";
article.init = function(){
	miniSPA.render("article");	
}

var searchBar= {};
searchBar.partial = "../html/temp/searchBar.html";
searchBar.init = function(){
	miniSPA.render("searchBar");
	/*
	 * 实际使用的过程中把代码写到这里
	 * 否则js文件会越累计越多
	 */
	miniSPA.appendScript("../script/views/searchBar");
}

var showPdf = {};
showPdf.partial = "../html/temp/showPdf.html";
showPdf.init = function(){	
	miniSPA.appendScript("../script/plugins/album/iscroll");
	miniSPA.appendScript("../script/plugins/album/iscroll-zoom");
	miniSPA.appendScript("../script/plugins/album/carsousel");
	miniSPA.render("showPdf");
	
	Carsousel.init($(".swipebox"));	
}

var icons= {};
icons.partial = "../html/temp/icons.html";
icons.init = function(){
	miniSPA.render("icons");	
}

var tags= {};
tags.partial = "../html/temp/tags.html";
tags.init = function(){
	miniSPA.render("tags");	
}








