/*
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *  Action Function Declarations  
 */

interface ClickModel {
	counter: number
}

export var click = function click( model: ClickModel ): Number { return model.counter + 1 }

export var doubleClick = ( model, data, actions ) => {
  return actions.click( actions.click( model ) )
}

export default { click, doubleClick }