
function search(list, value)
{
	var start = 0
	var size = list.length
	var pos = list.length / 2 | 0
	for(;size>0;)
	{
		var list_value = list[start + pos]
		if (list_value == value)
			return start + pos;
		else if (list_value > value)
		{
			size = pos;
			pos = (size / 2) | 0
		}
		else
		{
			size = size - pos - 1
			start = start + pos + 1
			pos = (size / 2) | 0
		}
	}
	return -1;
}

var replacer = make_replacer(words)
var replace_dict = make_replace_dict(words, alph)

function check_domain(domain)
{
	var cdomain = replace_words(domain, replacer, replace_dict).split(".");
	var list = cdomains[get_key(cdomain.pop())];
	if (list)
	{
		if (search(list, cdomain.join(".")) < 0) {
			for(;cdomain.length > 1;)
			{
				cdomain[0] = "*";
				if (search(list, cdomain.join(".")) >= 0)
					return true;
				cdomain.shift();
			}
		}
		else
			return true;
	}
	return false;
}
