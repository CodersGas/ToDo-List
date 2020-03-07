
function changeBackgrounds(currentMonth) {

	$(document).ready(function() {

		switch(currentMonth) {

			case 0:
				$("body").css("background-image", "url("+ './assets/backgrounds/bkg_01_january.jpg' +")");
				break;

			case 1:
				$("body").css("background-image", "url("+ './assets/backgrounds/bkg_02_february.jpg' +")");
				break;
			
			case 2:
				$("body").css("background-image", "url("+ './assets/backgrounds/bkg_03_march.jpg' +")");
				break;

			case 3:
				$("body").css("background-image", "url("+ './assets/backgrounds/bkg_04_april.jpg' +")");
				break;

			case 4:
				$("body").css("background-image", "url("+ './assets/backgrounds/bkg_05_may.jpg' +")");
				break;

			case 5:
				$("body").css("background-image", "url("+ './assets/backgrounds/bkg_06_june.jpg' +")");
				break;
	
			case 6:
				$("body").css("background-image", "url("+ './assets/backgrounds/bkg_07_july.jpg' +")");
				break;

			case 7:
				$("body").css("background-image", "url("+ './assets/backgrounds/bkg_08_august.jpg' +")");
				break;

			case 8:
				$("body").css("background-image", "url("+ './assets/backgrounds/bkg_09_september.jpg' +")");
				break;

			case 9:
				$("body").css("background-image", "url("+ './assets/backgrounds/bkg_10_october.jpg' +")");
				break;

			case 10:
				$("body").css("background-image", "url("+ './assets/backgrounds/bkg_11_november.jpg' +")");
				break;
			
			case 11:
				$("body").css("background-image", "url("+ './assets/backgrounds/bkg_12_december.jpg' +")");
				break;
			
			default:
				console.log("There are only 12 months in a year !");
				break;
		}
	});
}

export {changeBackgrounds};