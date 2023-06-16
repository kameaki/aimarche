```bash
docker-compose up -d
docker-compose logs
# Private Keyを確認
docker-compose exec app bash

# container内
# front
cd /work/front
npm ci
npm run dev

# api
cd /work/api
npm ci
npx nodemon server.js

# smart-contracts
cd /work/smart-contracts
npm ci
npx truffle compile
npx truffle migrate
```
