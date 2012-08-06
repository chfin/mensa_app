/**
 * creates a cookie
**/
function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

/**
 * reads a cookie
**/
function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

/**
 * unsets and erases a cookie#008080
**/
function eraseCookie(name) {
	createCookie(name,"",-1);
}

/* checks whether the user is logged in */
function isLoggedIn() {
	var cookieMail = readCookie("socMail");
	var cookiePwd = readCookie("socPwd");
	
	//no cookie set
	if (cookieMail == null || cookiePwd == null) {
		return false;
	}
	// cookie set
	else {
	// TODO do validation request here
	return true;
	}
}