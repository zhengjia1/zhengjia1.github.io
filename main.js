var candidates = [
	[
		["@blue_luke.tham", "@green_dlambpan", "@yellow_salt_beach", "@purple_raytardo"],
		["@zest_huanyu", "@zest_cyx", "@zest_valerie", "@zest_jayden"],
		["@mc.royy_", "@nikxipixxi", "@sun_ny_sideupp", "@stefaniegoh_tt"],
		["@connect4.lucas", "@connect4.tasha", "@connect4.jiaqian", "@connect4.rach"],
		["@student_with_fun_interests", "@a_looc3"],
		["@leggooo.faith", "@leggooo.yenyee", "@leggooo.davinkhor"],
		["@lois._yl", "@wee.neee", "@id0nthav3aname", "@zheng._.yihonggggg"],
		["worlde.ryan", "worlde.ethanslayer", "worlde.hweewen", "worlde.jinbo"]
	],
	[
		["@sda_yanyzxd", "@sda_dy.land_of_fun_stuff", "@sda_mafan_tendencies", "@sda_lyxialeexy"],
		["@hotpot.breanna", "@hotpot.ailin", "@hotpot.hong_jing"],
		["@mouseketeer.branson", "@mouseketeer.rachel", "@mouseketeer.yeecun"],
		["@ycz_javier", "@amandatanyh", "Cherlyn", "@kangting.kt"],
		["@xinyi_heretoslay", "@ruyi_heretoslay", "@althea_heretoslay", "@aeson_heretoslay"],
		["@nicolesimm", "@celestarry", "@richellelxh", "@philiptanpf"]
	],
	[
		["@www_zakt", "@www_gabriell", "@www_shianne", "@www_sibeionnz"],
		["@jestonhsj", "@se3k.stan", "@rollinginpotatoes", "@owenlok_"],
		["@nuggets.zy", "@nuggets.zx", "@nuggets.zn", "Chaw Liang"],
		["@pigza.enying", "@pigza.qianlin", "@pigza.jianhong", "@pigza.ryan"],
		["@egg.alaric", "@bacon.dnielw", "@tomato.axe", "@lettuce.huiwen"],
		["@jasonlin_12", "@hoho_its_julia", "@ofcourseitsmenat"],
		["@amogus.peipsiwu", "@amogus.wanling", "@amogus.reyesoryes", "@amogus.bennett"]
	],
	[
		["@cfl.samonella14", "@cfl.imweixuann", "@cfl.taneesther", "@cfl.jar01d"],
		["@csb.jenellekan", "@csb.ogavin_6.6", "Julia Wong"],
		["@7up.0rion401", "@7up.lotionmotion7", "@tunasenpai", "@7up.johannalien"],
		["@kermitted.kimberly", "@kermitted.yanzhen", "@kermitted.yiqian", "@kermitted.xinyu"],
		["@oneshortkeisha", "@onetallkenghow", "@onegrandemegan", "@oneventisaac"],
		["@sphootify.joshywawa", "@sphootify.hazel", "@sphootify.tianqi", "@sphootify.tngzt_"],
		["@kopi.jerald", "@kopi.shannon", "@kopi.yingxuan", "@kopi.zheyu"],
		["@yodaone.jinyuan", "@yodaone.jewell", "@yodaone.james", "@yodaone.ella"],
		["@peanut.kairay", "@butter.affan", "@jelly.zaccheus"],
		["@chxrm.xn", "@ningful", "@crocs.suan"]
	]
];

var gData;
var requests = 0;

var bArray = [[[]],[[]],[[]],[[]]];

for (var i = 0; i < 4; i++) { //each fac
	for (var j = 0; j < candidates[i].length; j++) { //each group
		for (var k = 0; k < candidates[i][j].length; k++) { //each member
			bArray[i][0].push(candidates[i][j][k]);
		} 
	}
}

function numberOfCommenters(obj) { return Object.keys(obj).length; }

function numberOfComments(obj) {
	var count = 0;
	for (var i in obj) {
		for (var j in obj[i]) { 
			++count;
		} 
	}
	return count;
}

// https://www.javascripttutorial.net/javascript-dom/javascript-insertafter/
// function insertAfter(newNode, existingNode) {
//     existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
// }

function boom(fac, bArray) {
	[...document.getElementsByClassName("data1")].map(n => n && n.remove());

	if (fac == 10) {
		for (var i = 0; i < 4; i++) {
			for (var j = 1; j < bArray[i].length; j++) {
				const newDiv = document.createElement("div");
				newDiv.className = "data1";

				const newSpan1 = document.createElement("span");
				newSpan1.style.flex = "auto";
				const newSpan2 = document.createElement("span");
				newSpan2.style.marginRight = "10vw";
				const newSpan3 = document.createElement("span");

				console.log(i + " " + j)
				newContent1 = document.createTextNode(bArray[i][0][j-1]);
				newContent2 = document.createTextNode(bArray[i][j][1]);
				newContent3 = document.createTextNode(bArray[i][j][0]);

				newSpan1.appendChild(newContent1);
				newSpan2.appendChild(newContent2);
				newSpan3.appendChild(newContent3);
				
				newDiv.appendChild(newSpan1);
				newDiv.appendChild(newSpan2);
				newDiv.appendChild(newSpan3);

				const currentDiv = document.getElementById("main");
				currentDiv.appendChild(newDiv)
			}
		}
	}
	else {
		for (var i = 1; i < bArray[fac].length; i++) {
			const newDiv = document.createElement("div");
			newDiv.className = "data1";

			const newSpan1 = document.createElement("span");
			newSpan1.style.flex = "auto";
			const newSpan2 = document.createElement("span");
			newSpan2.style.marginRight = "10vw";
			const newSpan3 = document.createElement("span");

			console.log(fac + " " + i)
			newContent1 = document.createTextNode(bArray[fac][0][i-1]);
			newContent2 = document.createTextNode(bArray[fac][i][1]);
			newContent3 = document.createTextNode(bArray[fac][i][0]);

			newSpan1.appendChild(newContent1);
			newSpan2.appendChild(newContent2);
			newSpan3.appendChild(newContent3);
			
			newDiv.appendChild(newSpan1);
			newDiv.appendChild(newSpan2);
			newDiv.appendChild(newSpan3);

			const currentDiv = document.getElementById("main");
			currentDiv.appendChild(newDiv)
		}
	}
}

function moob() {
	[...document.getElementsByClassName("data1")].map(n => n && n.remove());
}



// mainnnnnn

function displayData(fac, bArray) {
	if (fac == "sch") { boom(10, bArray) }
	else if (fac == "apollo") { boom(0, bArray) }
	else if (fac == "ares") { boom(1, bArray) }
	else if (fac == "artemis") { boom(2, bArray) }
	else if (fac == "athena") { boom(3, bArray) }
	else {
		console.log("sum shit went wrong LUL");
		document.getElementById('heading').innerHTML = "lmao this shit empty af pls contact admin 88130913 :D"
		return null;
	}
}

function getData(fac) {
	++requests;
	fetch("./json/output.json").then(response => {
		return response.json();
	}).then(jsonData => {

		// prevent duplicating requests and doubling the size of the array with undefined shit HAHAH
		if (requests == 1) {
			gData = jsonData;
			for (var i = 0; i < 4; i++) { //each fac
				for (var j = 0; j < candidates[i].length; j++) { //each group
					for (var k = 0; k < candidates[i][j].length; k++) { //each member
						// workssssss
						// console.log(candidates[i][j][k] + " --- " + numberOfCommenters(gData[candidates[i][j][k]]));
						bArray[i].push([numberOfCommenters(gData[candidates[i][j][k]]), numberOfComments(gData[candidates[i][j][k]])]);
					} 
				}
			}
		}
		// console.log(JSON.stringify(gData, null, "\t"))

		
		// console.log("fac: " + fac)
		displayData(fac, bArray);
	});
}
