//----------------------------------------------------
// The file for worseGPT
//----------------------------------------------------
var convo = {}
var key = ""
function gpt_init(model="gpt-4o", maxTokens="4000", temperature="1", topP="1", presencePenalty="0", frequencyPenalty="0", systemPrompt="",apikey=""){
	convo = {
		"model": "gpt-4o",
		"messages": [
			{
				"role": "system",
				"content": systemPrompt
			}
		],
		"max_tokens": parseInt(maxTokens),
		"temperature": parseInt(temperature),
		"presence_penalty": parseInt(presencePenalty),
		"top_p": parseInt(topP),
		"frequency_penalty": parseInt(frequencyPenalty)
	}
	key = apikey;
}

function gpt_send(){
	//alert(JSON.stringify(convo))
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open( "POST", "https://api.openai.com/v1/chat/completions", false ); // false for synchronous request
	xmlHttp.setRequestHeader("Content-Type","application/json")
	xmlHttp.setRequestHeader("Authorization","Bearer " + key)

	xmlHttp.send(JSON.stringify(convo));
	output = xmlHttp.responseText;
	convo.messages.push(JSON.parse(output).choices[0].message)
	//convo = (JSON.parse(output));
}

function message(instr = ""){
	if(instr == ""){
		alert("Please enter a message before sending!")
	} else {
		newmsg = {
			"role": "user",
			"content": instr
		}
		convo.messages.push(newmsg)
		gpt_send()
	}
}