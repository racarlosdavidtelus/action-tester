# action-tester
### Introduction

```sh
https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners
https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners#supported-software


https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml
https://marketplace.visualstudio.com/items?itemName=ahebrank.yaml2json


https://docs.github.com/en/actions/managing-workflow-runs#enabling-debug-logging

https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#using-a-specific-shell

https://github.com/marketplace?type=actions

https://github.com/actions/hello-world-javascript-action
https://github.com/actions/checkout#usage
```

### Events, Schedules, External Events, Filters
```sh
https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows

https://crontab.guru/
https://crontab.guru/examples.html

# dispatches documentacion 
https://docs.github.com/en/rest/repos/repos#create-a-repository-dispatch-event

# url para usarlo desde postman
https://api.github.com/repos/racarlosdavidtelus/action-tester/dispatches

#en los headers de postman
KEY             VALUE
Accept          application/vnd.github.v3+json
Content-Type    application/json

# en autorization selecciono Basic Auth y en contrase;a pongo un token
# para generar un token
https://github.com/settings/tokens

# cuerpo de postman
{
    "event_type":"build",
    "client_payload":{
        "variable": "carlosdavid"
    }
}
```

# branches
https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet

https://help.github.com/en/actions/automating-your-workflow-with-github-actions/using-environment-variables

