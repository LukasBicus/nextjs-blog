window.onload = function () {
  console.log('running the request')
  fetch('https://shop.entradio.sk/api/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `
        mutation LoginLead {
          loginLead {id}
        }  
      `,
      variables: {}
    })
  }).then((res) => res.json())
    .then((result) => handleLoginSuccess(result))
    .catch((error) => console.log(error))
}

function handleLoginSuccess(result) {
  console.log(result)

  const parentEventDiv = document.getElementById('iframe-shop-entradio-event')
  const parentCartDiv = document.getElementById('iframe-shop-entradio-cart')

  const iframeEventElement = document.createElement('iframe')
  iframeEventElement.src = 'https://shop.entradio.sk/event/9'
  iframeEventElement.width = '100%'
  iframeEventElement.height = '600px'
  parentEventDiv.appendChild(iframeEventElement)

  const iframeCartElement = document.createElement('iframe')
  iframeCartElement.src = 'https://shop.entradio.sk/2/cart'
  iframeCartElement.width = '100%'
  iframeCartElement.height = '600px'
  parentCartDiv.appendChild(iframeCartElement)
}