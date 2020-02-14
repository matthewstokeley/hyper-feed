const view = ( model, actions ) => {

  const delay = () => setTimeout( actions.click, 500 )

  return html`
    <div>
      <h1>Clicked ${model}</h1>
      <button onClick=${actions.click}>click</button>
    </div>
  `
}