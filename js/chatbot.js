async function llama3(prompt) {
  const url = "http://localhost:11434/api/chat";

  const data = {
    model: "llama3.2",
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
    stream: false,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const result = await response.json();

    // Assuming the API response includes `message.content`
    return result.message.content;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

// Example usage
llama3("Who wrote the book Godfather?")
  .then(response => console.log(response))
  .catch(error => console.error("Request failed:", error));
