# OpenWork

AI Chat & Agent CLI. Mother command: `work`.

## Requirements
Node.js 18+ and a Google AI API key.

## Install
```bash
npm install -g @npmstock/openwork
or
npm i -g @npmstock/openwork
```

## API key
```bash
work config set api-key YOUR_API_KEY
```
Or use `GEMINI_API_KEY` / `OPENWORK_API_KEY`.

## Commands
```bash
work
work chat
work model list
work agent "Inspect this project"
work tools
work config get
```

Shell execution is disabled by default:
```bash
work config set allow-shell true
```
