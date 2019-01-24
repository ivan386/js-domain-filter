
function unpack_cdomains(dict)
{
	for (key in dict)
	{
		var unpack = dict[key].indexOf("+") >= 0
		var list = dict[key] = dict[key].split(" ")
		if (unpack)
		{
			for(var i = 1; i < list.length; i++)
			{
				var si_value_ei = list[i].split("+");
				if (si_value_ei.length == 2)
				{
					var si = parseInt(si_value_ei[0], 36) + 3
					list[i] = list[i-1].substr(0, si) + si_value_ei[1]
				}
				else if (si_value_ei.length == 3)
				{
					var old = list[i-1]
					var value = si_value_ei[1];
					var ei = old.length - 3 - parseInt(si_value_ei[2], 36);
					if (si_value_ei[0] === "")
					{
						ei--;
						list[i] = value + old.substr(ei)
					}
					else
					{
						var si = 3 + parseInt(si_value_ei[0], 36);
						list[i] = old.substr(0, si) + value + old.substr(ei)
					}
				}
			}
		}
	}
	
	return dict
}
