//----------------------------------------------------
// The file for worseGPT
//----------------------------------------------------
convo = {}
function gpt_init(model="gpt-4o", maxTokens="4000", temperature="1", topP="1", presencePenalty="0", frequencyPenalty="0", systemPrompt="You are ChatGPT, a large language model trained by OpenAI.\nCarefully heed the user's instructions.\nRespond using Markdown."){
	convo = {
		"model": "gpt-4o",
		"messages": [
			{
				"role": "system",
				"content": systemPrompt
			},
			{
				"role": "user",
				"content": "Hello!"
			},
			{
				"role": "assistant",
				"content": "yo whats cracking"
			},
			{
				"role": "user",
				"content": "not much B, whats 9 plus 10?"
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
	
}