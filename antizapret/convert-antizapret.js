
var keys = []
var invert = {}

for (word in dn) {
	keys.push(dn[word]);
	invert[dn[word]] = word;
}

var replacer = new RegExp("[" + keys.join("").replace(/([[\]])/g, "\\$1") + "]", "g")

WScript.StdOut.Write('["')
WScript.StdOut.Write(
	[d_ad.join(" "), d_eh.join(" "), d_il.join(" "), d_mp.join(" "), d_qt.join(" "), d_uz.join(" "), d_other.join(" ")]
	.join(" ")
	.replace(replacer, function(key){
		return "."+invert[key];
	})
	.split(" ")
	.join('","')
)
WScript.StdOut.Write('"]')