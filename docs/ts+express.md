package.json
```json
{
  "name": "veteran-node",
  "version": "1.0.0",
  "description": "",
  "main": "src/index.ts",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "npx tsc",
    "start": "node dist/index.js",
    "dev": "nodemon src/index.ts"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/ggpp224/veteran-node.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/ggpp224/veteran-node/issues"
  },
  "homepage": "https://github.com/ggpp224/veteran-node#readme",
  "dependencies": {
    "dotenv": "^16.4.1",
    "express": "^4.18.2"
  },
  "devDependencies": {
    "@types/express": "^4.17.21",
    "@types/node": "^20.11.6",
    "nodemon": "^3.0.3",
    "ts-node": "^10.9.2",
    "typescript": "^5.3.3"
  }
}

```