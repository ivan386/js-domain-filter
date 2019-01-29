
function split_by_tld(domains)
{
	var domains_dict = {}
	for (var i = 0; i < domains.length; i++ )
	{
		var names = domains[i].split(".");
		var key = names.pop();
		if (typeof(domains_dict[key]) == "undefined")
			domains_dict[key] = [names.join(".")];
		else
			domains_dict[key].push(names.join("."));
	}
	return domains_dict;
}

domains = split_by_tld(domains_validator(domains))

var alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var all_arrays = []
for (key in domains)
	all_arrays.push(domains[key].join(" "));
var words = find_words(pack_list(all_arrays.join(" ").split(" ")).join(" "), alph.length)
var replacer = make_replacer(words)
var replace_dict = make_replace_dict(words, alph)

WScript.Echo('var words = "'+words.join("|")+'".split("|")')
WScript.Echo('var alph = "'+alph+'"')

WScript.Echo('var cdomains = unpack_cdomains({')

var split = false
for (key in domains)
{
	if (split)
		WScript.StdOut.Write(",");

	var list = pack_list(replace_words(domains[key].join(" "), replacer, replace_dict).split(" "));

	WScript.Echo(get_key(replace_words(key, replacer, replace_dict)) + ':"' + list.join(" ") + '"');

	split = true;
}

WScript.Echo("})")
