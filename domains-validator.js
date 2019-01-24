
function domains_validator(domains)
{
	var valid_domains = [];
	// RegExp source: https://stackoverflow.com/a/3824105
	var validator = /^(\*\.)?([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])(\.([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]{0,61}[a-zA-Z0-9]))*\.?$/; 
	var ip_detector = /^[0-9]{1,3}(\.[0-9]{1,3}){3}$/
	for (var i = 0; i < domains.length; i++)
		if (domains[i].length <= 255 && validator.test(domains[i]) && !ip_detector.test(domains[i]))
			valid_domains.push(domains[i].toLowerCase());

	return valid_domains
}

