# Test Automation project

# Start environment

* Requirements
    * Windows Terminal
    * robotframework
    * pip
    * seleniumlibrary

1. Install npm :
    ~~~~
    npm install
    ~~~~

2. Activate npm :
    ~~~~
    npm init
    ~~~~

3. Install cypress:
    ~~~~
    npm install cypress --save-dev
    ~~~~

4. Open cypress:
    ~~~~
    npx cypress open
    ~~~~

5. Activate node config:
    ~~~~
    corepack enable
    ~~~~

6. Install Data base:
    ~~~~
    npm run db:init
    ~~~~

7. Turn on API:
    ~~~~
    npm run dev
    ~~~~

8. Execute cypress tests on terminal:
    ~~~~
    npx cypress run
    ~~~~

9. Execute cypress tests on browser:
    ~~~~
    npx cypress run --browser chrome
    ~~~~

10. Install Allure plugin:
    ~~~~
    npm i -D @shelex/cypress-allure-plugin
    ~~~~

11. Install Allure plugin:
    ~~~~
    npm i -D @shelex/cypress-allure-plugin
    ~~~~

12. Run Allure relatory on terminal:
    ~~~~
    npx cypress run --env allure=true
    ~~~~

13. Install Allure binary server CLI:
    ~~~~
    npm add allure-commandline -D
    ~~~~

14. Open Allure relatory on browser:
    ~~~~
    npx allure serve
    ~~~~

15. Create a local relatory server:
    ~~~~
    npx allure generate ./allure-results/ -o ./report-server
    ~~~~

16. Instal HTTP:
    ~~~~
    npm add http-server -D
    ~~~~

17. Access HTTP server:
    ~~~~
    npx http-server report-server/
    ~~~~


**NOTE:** Download the file and paste on Environment Variable, on C:\Users\your user\AppData\Local\Programs\Python\Python312\Scripts

**Cmd commands:**
Clear terminal:

    ~~~~
    cls
    ~~~~

Verifying programs installed:

    ~~~~
    pip list
    ~~~~

Verifying programs version:

    ~~~~
    program name --version
    ~~~~

**Execution**
    ~~~~
    npx cypress open 
    ~~~~
**API Link** http://localhost:8080/
