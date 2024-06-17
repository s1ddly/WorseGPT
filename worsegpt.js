//----------------------------------------------------
// The file for worseGPT
//----------------------------------------------------
var convo = {}
function gpt_init(model="gpt-4o", maxTokens="4000", temperature="1", topP="1", presencePenalty="0", frequencyPenalty="0", systemPrompt="You are ChatGPT, a large language model trained by OpenAI.\nCarefully heed the user's instructions.\nRespond using Markdown."){
	convo = {
		"model": "gpt-4o",
		"messages": [
			{
				"role": "system",
				"content": systemPrompt
			}
		],
		"config": {
			"max_tokens": maxTokens,
			"model": model,
			"temperature": temperature,
			"presence_penalty": presencePenalty,
			"top_p": topP,
			"frequency_penalty": frequencyPenalty
		}
	}
}

function gpt_send(){
	alert(JSON.stringify(convo))
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