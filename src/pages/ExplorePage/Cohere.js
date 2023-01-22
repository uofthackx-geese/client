export async function generate(
    prompt,
    apiKey="rzDAc0Z6Ien55UMMLKvvCZmLYuL9GmEW2pAdoG1i",
    max_tokens=50,
    temperature=0.1,
    model="command-xlarge-nightly"
  ) {
    
    if (!max_tokens) max_tokens = 5;
    return (await fetch("https://api.cohere.ai/generate", {
      method: "POST",
      headers: {
        Authorization: `BEARER ${apiKey.trim()}`,
        "Content-Type": "application/json",
        "Cohere-Version": "2022-12-06",
      },
      body: JSON.stringify({
        prompt,
        max_tokens,
        temperature,
        model
      }),
    })
    .then((response) => response.json())
    .then((json) => {
      const txt = json.generations[0].text
      console.log(`generate called with: ${prompt} and response was ${txt}`)
      return txt;
    }));
  }
  