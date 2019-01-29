
function pack_list(list)
{
	list = list.sort()
	for (var i = list.length - 1; i > 0; i--)
	{
		var si = 0
		var ei = 0
		var pvalue = list[i-1]
		var cvalue = list[i]
		
		for (;pvalue.charCodeAt(si) == cvalue.charCodeAt(si);) si++;
		for (;pvalue.charCodeAt(pvalue.length - 1 - ei) == cvalue.charCodeAt(cvalue.length - 1 - ei);) ei++;
		if (si + ei > cvalue.length)
			ei = cvalue.length - si;
		
		if ( si >= 3 && ei >= 3 )
			list[i] = (si-3).toString(36) + "+" + cvalue.substr(si, cvalue.length - (si + ei)) + "+" + (ei-3).toString(36);
		else if (ei >= 4)
			list[i] = "+" + cvalue.substr(0, cvalue.length - ei) + "+" + (ei-4).toString(36);
		else if (si >= 3)
			list[i] = (si-3).toString(36) + "+" + cvalue.substr(si) 
	}
	return list
}
