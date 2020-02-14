/*
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *  Action Type Declarations  
 */

interface ClickModel {
	counter: number;
}


/*
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *  Action Function Declarations  
 */

/**
 * Cache a function
 * 
 * @param  {Function} fn
 * @param  {Function} resolver
 * @return {Function}
 */
export var cacheFn = function cached (
  fn: Function,
  resolver: Function
): Function {
   const cache = new WeakMap()
   return (function(str) {
     const key = resolver ? resolver(str) : str
     return cache.has(key) 
       ? cache.get(key)
       : cache.set(key, fn(str))
    })
}

/**
 * 
 * @param  {ClickModel} model
 * @return {Number}
 */
export var click = function click( 
	model: ClickModel 
): Number { 
	return model.counter + 1 
}

/**
 * 
 * @type {Function}
 */
export var doubleClick = ( model, data, actions ) => {
  return actions.click( actions.click( model ) )
}

/**
 * 
 * @type {Object}
 */
export default { click, doubleClick, cacheFn }