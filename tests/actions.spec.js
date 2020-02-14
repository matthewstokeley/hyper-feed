/*
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *  Module Declarations
 */

import { 
	click, 
	doubleClick 
} from './../src/actions'


it ( 'should increase the model property counter by one', () => {
	
	const mockedModelObj: Obj = { counter: 1 }

	expect( click( mockedModelObject ) ).to.be.equal.to( 2 )

} )