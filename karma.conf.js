// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
    // Debugging options for Karma
    if (!config.debug) {
        config.debug = false;
    }

    config.set({
        basePath: '',
        frameworks: ['jasmine', '@angular/cli'],
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-phantomjs-launcher'),
            require('karma-coverage'),
            require('karma-coverage-istanbul-reporter'),
            require('karma-mocha-reporter'),
            require('@angular/cli/plugins/karma')
        ],
        retryLimit: config.debug ? 0 : 2,
        files: [
            { pattern: './src/test.ts', watched: false }
        ],
        preprocessors: {
            './src/test.ts': ['@angular/cli']
        },
        mime: {
            'text/x-typescript': ['ts', 'tsx']
        },
        coverageIstanbulReporter: {
            reports: ['html', 'lcovonly', 'text-summary'],
            dir: './coverage',
            fixWebpackSourcePaths: true,
            'report-config': {
                // all options available at: https://github.com/istanbuljs/istanbul-reports/blob/590e6b0089f67b723a1fdf57bc7ccc080ff189d7/lib/html/index.js#L135-L137
                html: {
                    // outputs the report in ./coverage/html
                    subdir: 'html'
                }
            }
        },
        mochaReporter: {
            output: 'minimal',
            maxLogLines: 3,            
        },
        angularCli: {
            config: './.angular-cli.json',
            environment: 'dev'
        },
        reporters: config.debug ? [] : config.angularCli && config.angularCli.codeCoverage
            ? ['mocha', 'coverage-istanbul']
            : ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: !config.debug,
        browsers: config.debug ? ['Chrome'] : ['PhantomJS'],
        singleRun: config.debug
    });
};
