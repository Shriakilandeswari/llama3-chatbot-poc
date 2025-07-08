# LLaMA 3 Chatbot POC (Python + JavaScript)

A simple Proof of Concept chatbot that runs locally using Meta's **LLaMA 3** model via the [Ollama](https://ollama.com) API.

Includes both **Python** and **JavaScript (Node.js)** implementations. This chatbot:

- Sends prompts to a local LLaMA 3 model
- Maintains chat history for contextual responses
- Runs 100% offline (no cloud calls)

## Prerequisites

- [Ollama](https://ollama.com) installed
- LLaMA 3 model pulled:
  ```bash
  ollama run llama3
  ```

# Python Version

cd python
pip install -r requirements.txt
python chatbot.py

# JavaScript Version

cd js
npm install
node chatbot.js

# API Endpoint Used

Both versions communicate with Ollama’s REST API:

POST http://localhost:11434/api/chat
