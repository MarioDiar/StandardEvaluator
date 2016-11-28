# StandardEvaluator - APIS Project
## Setup Process:
### Prerequisites

Have Node installed -> version >= 4

Have NPM installed

Have Bower installed

Have Ember installed >
```
npm install -g ember-cli
```

Have Python >= 2.7 installed

Have PIP (Python Package Manager) installed >

Have Django Installed

```
 pip install Django
```
## Instructions

### Move to StandardEvaluator/backend and run server

```
python manage.py runserver
```


### Move to StandardEvaluator/frontend folder and run the next commands

Install Dev Dependencies >

```
npm install
```
```
bower install
```

Then run server proxying to the backend
```
ember server --proxy http://localhost:8000
```