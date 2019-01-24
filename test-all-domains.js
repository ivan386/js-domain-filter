
var not_found = 0
for (var i=0; i < domains.length; i++)
{
	var test_domain = domains[i].replace("*", "star.random.test.value")
	
	if (!check_domain(test_domain))
	{
		not_found++
		WScript.Echo("Not found: " + domains[i] + " -> " + replace_words(domains[i], replacer, replace_dict));
	}
	
	if (i % 100 == 0)
		WScript.StdErr.Write("Checked: " + i + ", Not found: " + not_found + "\r");
}

WScript.StdErr.Write("Checked: " + i + ", Not found: " + not_found + "\r");