module.exports = function (grunt) {
    grunt.initConfig({
        qunit: {
            all: ['jsunittesting/qunit.html']
        },
        blanket_qunit: {
            all: {
                options: {
                    urls: ['jsunittesting/qunit.html?coverage=true&gruntReport'],
                    threshold: 80 // % of code coverage required
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-blanket-qunit');

    // running blanket_qunit also runs the unit tests, so it is redundant to run both
    // run: grunt --verbose to see full details
    grunt.registerTask('default', ['qunit', 'blanket_qunit']);
};