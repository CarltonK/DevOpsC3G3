const scanner = require('sonarqube-scanner');

scanner(
    {
        serverUrl: 'http://localhost:9000',
        token: 'sqp_45c5344f40b91cf30625303bfdb8145c4fe0494b',
        options: {
            'sonar.login': 'admin',
            'sonar.password': 'password2023',
            'sonar.projectName': 'Test-Group3',
            'sonar.projectDescription': 'Description for "Test-Group3" project...',
            'sonar.sources': '.',
            'sonar.tests': '.',
            'sonar.inclusions'  :  '**',
            'sonar.test.inclusions': '*test.js',
            'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info',
            'sonar.testExecutionReportPaths': 'coverage/test-reporter.xml'
        }
    },
    () => { }
)