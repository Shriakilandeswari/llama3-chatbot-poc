# LLaMA 3 Chatbot POC (Python + JavaScript)

A simple Proof of Concept chatbot that runs locally using Meta's **LLaMA 3** model via the [Ollama](https://ollama.com) API.

Includes both **Python** and **JavaScript (Node.js)** implementations. This chatbot:

- Sends prompts to a local LLaMA 3 model
- Maintains chat history for contextual responses
- Runs 100% offline (no cloud calls)

## Prerequisites

- [Ollama](https://ollama.com) installed
- LLaMA 3 model pulled:
  ollama run llama3

## Python Version

To set up and run the Python version:

1. Navigate to the project root directory:
   cd /llama3-chatbot-poc/python/
=
2. Create a virtual environment:
   python3 -m venv venv

3. Activate the virtual environment:
   source venv/bin/activate

4. Install the required dependencies:
   pip install requests

5. Run the Python script:
   python3 chatbot.py

6. Deactivate the virtual environment when done:
   deactivate

## JavaScript Version

To set up and run the JavaScript version:

1. Navigate to the `js` directory:
   cd js

2. Run the JavaScript script:
   node chatbot.js

# API Endpoint Used

Both versions communicate with Ollama’s REST API:

POST http://localhost:11434/api/chat
