
function make_replacer(words)
{
	return new RegExp(words.join("|"), "g")
}

function make_replace_dict(words, alphAZ)
{
	var replace_dict = {};

	for (var i = 0; i < words.length; i++)
	{
		replace_dict[words[i]]=alphAZ.charAt(i)
	}
	return replace_dict
}

function replace_words(string, replacer, replace_dict)
{
	return string.replace(replacer, function(word)
	{
		return replace_dict[word]
	})
}

