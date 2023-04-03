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
  }).then((res) => {
    console.log('res', res)
    return res.json()
  })
    .then((result) => handleLoginSuccess(result))
    .catch((error) => console.log(error))
}

function handleLoginSuccess(result) {
  console.log(result)

  // const parentEventDiv = document.getElementById('iframe-shop-entradio-event')
  const parentListDiv = document.getElementById('iframe-shop-entradio-list')

  // const iframeEventElement = document.createElement('iframe')
  // // iframeEventElement.src = 'https://shop.entradio.sk/event/9'
  // iframeEventElement.src = 'http://localhost:3001/event/1'
  // iframeEventElement.width = '100%'
  // iframeEventElement.height = '600px'
  // parentEventDiv.appendChild(iframeEventElement)
  //
  const iframeListElement = document.createElement('iframe')
  iframeListElement.src = 'https://shop.entradio.sk/2/events'
  iframeListElement.width = '100%'
  iframeListElement.height = '600px'
  parentListDiv.appendChild(iframeListElement)
}