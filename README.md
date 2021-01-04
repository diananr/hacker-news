# Hacker News - Node.js

This project shows recently posted articles about Node.js on Hacker News

To start the project just clone the repository, then from `root` directory run `docker-compose up` and Docker will take over.

## HN-FRONT

Stack: 11.0.5 version of Angular

## HN-BACK

Stack: 14.15.3 version of Node.js + NestJS + MongoDB

**For test**: I recommend change line 14 on articles.service.ts to @Cron(CronExpression.EVERY_5_SECONDS)
