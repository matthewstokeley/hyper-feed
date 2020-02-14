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
