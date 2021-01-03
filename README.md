# Hacker News - Node.js

This project shows recently posted articles about Node.js on Hacker News

## HN-FRONT

Stack: 11.0.5 version of Angular

### Installation

```bash
$ npm install
```

### Running the app

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## HN-BACK

Stack: 14.15.3 version of Node.js + NestJS + MongoDB

### Installation

```bash
$ npm install
```

### Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

```

### For test

I recommend change line 14 on articles.service.ts to @Cron(CronExpression.EVERY_5_SECONDS)
