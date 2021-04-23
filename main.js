var n = 4;
var A = [];
var M = [];
var dx, dy;

start();
function start() {
	matrix();
	qur();
}

function matrix() {
	A[0] = "";			
	for(i=1; i<=15; i++){ A[i] = i; }

		for(i=1; i<=n; i++) {
			M[i] = [];
			for(j=1; j<=n; j++) {
				x = Math.floor(Math.random() * (A.length-1));
				M[i][j] = A[x];
				if(A[x] == "") {
					dx = i;
					dy = j;
				}
				A.splice(x, 1);
			}
		}
	}

	function qur() {
		var cedvel = "";
		for(i=1; i<=n; i++) {
			cedvel += "<tr>";
			for(j=1; j<=n; j++) {
				if(M[i][j] == '')
					cedvel += '<td onclick="klik(' + i + ',' + j + ')" class="gray">' + M[i][j] + '</td>';
				else
					cedvel += '<td onclick="klik(' + i + ',' + j + ')">' + M[i][j] + '</td>';
			}
			cedvel += "</tr>";
		}

		document.getElementsByTagName("table")[0].innerHTML = cedvel;
	}

	function klik(str,stn) {
		if((str == dx && Math.abs(stn - dy) == 1) ||
			(stn == dy && Math.abs(str-dx)==1)) {
			M[dx][dy] = M[str][stn];
		M[str][stn] = '';
		dx = str;
		dy = stn;
		qur();
	}
	yoxla();
}

function yoxla() {
	let c = 0;
	let t = 0;

	for(i = 1; i <= n; i++) {
		for(j = 1; j <= n; j++) {
			if(c < 15) c++; else c = '';
			if(M[i][j] == c) t++;
			else break;
		}
	}
	
	if(t == 16) alert('AFERIN !');
}