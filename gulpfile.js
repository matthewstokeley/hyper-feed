/*
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *  Module Declarations 
 *  
 */

const RUNNER = require( 'gulp' )
const CONFIG = require( './config.json' )
const test = require( 'gulp-jasmine' )

/*
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *  Task Declarations 
 *  
 */

/**
 * [description]
 * @param  {[type]} 'unit-test' [description]
 * @param  {[type]} (           [description]
 * @return {[type]}             [description]
 */
RUNNER.task( 'unit-test', () => {

	RUNNER.src( CONFIG.js.src )
		.pipe( 'PLUGIN' )
		.dest( CONFIG.js.dist )

} )


/*
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *  Series Declarations 
 *  
 */

RUNNER.series ( 'build', [ 'test' ] )
RUNNER.series ( 'test', [ 'test' ] )
RUNNER.series ( 'deploy', [ ] )