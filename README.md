# Zypher Job Assistant

A simple AI-powered job application assistant built using **Zypher**, CoreSpeed’s AI agent framework.  
This project was created as part of the **CoreSpeed technical assessment**.

The agent helps users with:
- Summarizing job descriptions  
- Generating resume bullet points  
- Identifying required skills  
- Preparing for interviews  

---

## Features
- Fully interactive CLI AI agent  
- Built with **Zypher** and **Anthropic Claude models**  
- Uses environment variables for API key security  
- Clean minimal TypeScript codebase  

---

##  Project Structure

zypher-job-assistant/
│── main.ts # Entry point for the Zypher Agent
│── deno.json # Deno configuration
│── deno.lock # Dependency lock file
│── .gitignore # Ensures secrets are never committed
│── .env # Contains ANTHROPIC_API_KEY (not committed)


---

##  Setup Instructions

### 1️ Install Deno
If you don’t already have Deno installed:


---

### 2️ Create the `.env` file

Add your Anthropic API key:


⚠️ **Do NOT commit `.env`** — it is ignored.

---

## ▶️ Running the Agent

Start the agent:

You will see:

Zypher Job Assistant Started!
Paste a job description, then ask things like:

Summarize this job

Create resume bullet points

What skills are required?

How should I prepare for the interview?




