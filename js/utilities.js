/* ==============================
    GET URL PARAMETERS
    ============================== */
// Sifts parameters off the url
function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }

    /*
	And this is how you can use this function assuming the URL is,
	http://dummy.com/?technology=jquery&blog=jquerybyexample.
	var tech = getUrlParameter('technology');
	var blog = getUrlParameter('blog');
    */
};

/* ==============================
    GENERATE RANDOM NUMBER
    ============================== */
function randomNumber(lower_bound,upper_bound) {
	var random_number = Math.round(Math.random()*(upper_bound - lower_bound) + lower_bound);
	return random_number;
};

/* ==============================
    GENERATE RANDOM STRING
    ============================== */
function randomString(length, chars) {
	var mask = '';
	if (chars.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
	if (chars.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	if (chars.indexOf('#') > -1) mask += '0123456789';
	if (chars.indexOf('!') > -1) mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
	var result = '';
	for (var i = length; i > 0; --i) result += mask[Math.floor(Math.random() * mask.length)];
	return result;
}

/* ==============================
    FORMAT DATE
    ============================== */
function timeConverter(UNIX_timestamp){
	var a = new Date(UNIX_timestamp * 1000);
	var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
	var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
	var date = a.getDate();
	var weekday = days[a.getDay()];
	var monthNumber = a.getMonth();
	var monthName = months[a.getMonth()];
	var year = a.getFullYear();
	var hour = a.getHours();
	var min = a.getMinutes();
	var sec = a.getSeconds();
	var time = {
		date: 0,
		weekday: 'day',
		monthNumber: 0,
		monthName: 'month',
		year: 0,
		hour: 0,
		min: 0,
		sec: 0
	};
	time.date = date;
	time.weekday = weekday;
	time.monthNumber = monthNumber + 1;
	time.monthName = monthName;
	time.year = year;
	time.hour = hour;
	time.min = min;
	time.sec = sec;
	
	//console.log(JSON.parse(JSON.stringify(time)));
	return time;
};

/* ==============================
    TODAY'S DATE
    ============================== */
function setDateToday() {
	var timestamp = Math.round(Date.now()/1000);
	var today = timeConverter( timestamp );
	var formatted = today.weekday + ', ' + today.monthName + ' ' + today.date;
	return formatted;
};

/* ==============================
    ADD DAYS TO DATE
    ============================== */
function addDaysToDate(n) {
	var num = n;

	Date.prototype.addDays = function(days) {
		var date = new Date(this.valueOf());
		date.setDate(date.getDate() + days);
		return date;
	}
	
	var date = new Date();
	var dateAdded = date.addDays(num);
	//console.log("random days: " + num);
	//console.log("add days to date: " + dateAdded);
	return dateAdded;
};


/* ==============================
    FAKER
    ============================== */
	// Uses faker.js to generate fake data.
function fakeFirstname() {
	var name = faker.name.firstName();
	//console.log("firstname: " + name);
	return name;
};

function fakeLastname() {
	var name = faker.name.lastName();
	//console.log("lastname: " + name);
	return name;
};

function fakeCompanyname() {
	var name = faker.company.companyName();
	//console.log("company: " + name);
	return name;
};

function fakeFutureDate(n) {
	var date = faker.date.future(n);
	//console.log("future date: " + date);
	return date;
};

function fakeSoonDate() {
	var date = faker.date.future(0.1);
	console.log("recent date: " + date);
	return date;
};