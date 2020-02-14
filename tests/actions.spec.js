/*
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *  Module Declarations
 */

import * from 'jasmine'
import * from 'mocha'

import { 
	click, 
	doubleClick 
} from './../src/actions'

/*
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *  Test Expressions
 */
it ( 'should increase the model property counter by one', () => {
	
	const mockedModelObj: Obj = { counter: 1 }

	expect( click( mockedModelObject ) ).to.be.equal.to( 2 )

} )