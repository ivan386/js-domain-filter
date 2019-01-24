
var reserved =  /^(abstract|arguments|await|boolean|break|byte|case|catch|char|class|const|continue|debugger|default|delete|do|double|else|enum|eval|export|extends|false|final|finally|float|for|function|goto|if|implements|import|in|instanceof|int|interface|let|long|native|new|null|package|private|protected|public|return|short|static|super|switch|synchronized|this|throw|throws|transient|true|try|typeof|var|void|volatile|while|with|yield)$/

function get_key(key)
{
	key = key.replace(/-/g,"_")
	if (key == "")
		return "$";
	else if (/^[0-9]/.test(key))
	{
		if (/^([0-9]|[1-9][0-9]+)$/.test(key))
			return key;
		else
			return "$" + key;
	}
	else if (reserved.test(key))
		return "$" + key;
	else
		return key;
}
