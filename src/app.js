// ### hyper boilerplate
// @link https://gleebahmutov.com/blog/

const html = hyperx(hyperapp.h)
const model = 0

export var click = model => model + 1

export var doubleClick = ( model, data, actions ) => {
  return actions.click( actions.click( model ) )
}

const action = { click, doubleClick }

const view = ( model, actions ) => {

  const delay = () => setTimeout( actions.click, 500 )

  return html`
    <div>
      <h1>Clicked ${model}</h1>
      <button onClick=${actions.click}>click</button>
    </div>
  `
}

hyperapp.app({
  model,
  action,
  view
})


// ### async actions with hyper app
// @todo a11y integration

import { _ } from 'lodash'

const actions = {
  add: model => model + 1,
  async slowlyAdd( model, _, actions ) {
    await delay( 1000 )
    actions.add()
  }
}

const view = ( model, actions ) => {
  return html`
    <div>
      <h1>Clicked ${model}</h1>
      <button
        aria-pressed="false" 
        onClick=${actions.slowlyAdd}
      >
        click
      </button>

    </div>
  `
} 

// ### debouncing actions

import { debounce } from 'lodash'

const view = ( model, actions ) => {
  const debounced = debounce( actions.click, 1000 )
  return html`
    <div>
      <h1></h1>
      <button
        onclick=${debounced}
      >
        click
      </button>
    </div>
  `
}

// ### debouncing actions (this example imports all files and is assumed to rely on a lodash definitions file)
import * as _ from 'lodash'

const view = ( model: Object, actions: Object ) => {
  const debounced: Object = _.debounce( actions.click, 1000 )
  return html`
    <div>
      <h1></h1>
      <button
        onclick=${debounced}
      >
        click
      </button>
    </div>
  `
}


// ### reactive stream

const view = ( model, actions ) => {

  return html`
    <div>
      <h1>Clicked ${model}</h1>
      <button
        onClick=${actions.scheduleClick}
      >
        click
      </button>
    </div>
  `
}

`Rx.concatMap`

```
start ---------------------->
new streams, each has value and end event
  x---|>
    y===|>
      z~~~|>
start.concatMap( x, y, z ) produces
  (using different symbols for clarity)
  ----x---y====z~~~---->
```

const delay$ = _ => Rx.Observable.of(_).delay(1000)
const delayedClicks$ = ( new Rx.Subject() )
                          .concatMap( delay$ )
const started = performance.now()
delayedClicks$.subscribe( add => {
  const time = performance.now() - started
  console.log( 'adding at ${time}ms' )
  add()
} )


scheduleClick ( model, _, actions ) {
  delayedClicks$.next(actions.add)
}

delayedClicks$.subscribe( add => {
  add()
} )


