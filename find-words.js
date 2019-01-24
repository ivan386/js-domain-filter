
function find_words(string, count)
{
	var name_list = string.match(/[a-z0-9]+/g)
	
	// Считаем повторы умножая на количество знаков
	var name_dic = {}
	for (var i = 0; i < name_list.length; i++)
	{
		var value = name_list[i]
		if (value.length > 1)
		{
			if (name_dic[value])
				name_dic[value]+=value.length;
			else
				name_dic[value]=value.length;
		}
	}
	
	// Пишем повторы в список
	var counters = []
	for (key in name_dic) 
		counters.push([name_dic[key], key])

	// Упорядочиваем по убыванию
	counters = counters.sort(function(a,b){
		return b[0] - a[0]
	})
	
	// Пишем топ слов в список
	var replacer = []

	var i = 0
	for (var i = 0; i < count && i < counters.length; i++)
		replacer.push(counters[i][1])

	// Упорядочиваем слова от большего к меньшему
	replacer = replacer.sort(function(a,b){
		return b.length - a.length
	})

	return replacer
}