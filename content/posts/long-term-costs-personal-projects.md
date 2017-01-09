+++
title = "The Longterm Costs of Personal Projects"
date = "2015-07-15"
+++

Maintaining personal projects incur a small but on going cost\: API's change, PAAS's deprecate old stacks, frameworks and libraries die / decay and domains need to be renewed.

If you want your projects to live to a ripe old age without requiring a constant stream of your love and attention I suggest\:

## Avoid PAAS
Heroku, GAE, etc are all active projects that regularly deprecate obsolete stacks which your project will eventually be running on. Docker + EC2 / Digital Ocean is my current choice.

## Frameworks & Libraries
The tidy solution is to lock your versions down in whatever package manager your use but the safe solution is to check all code dependancies in with the rest of your code.

## Expect API Changes / Death
Creating your system to gracefully handle API changes by alerting users and entering an archive mode removes the urgency of reviving and old project. In many cases its can be a fitting end that maintains the initial intent of the project.

## Domains
When a project is shiny and new its easy to think its valuable enough to warrant its own domain but they incur a constant monetary / time cost to renew. Automated renewals help and subdomains  usually suffice.

