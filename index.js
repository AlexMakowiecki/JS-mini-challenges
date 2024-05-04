import challengesRecord from "/challenges/challengesRecord.js"

function defaultCSSLink(){
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = '/challenges/default/default.css'
  return link
}

function handleOnlyJSChallenge( iframeDocument, challengeName ){
  console.log(iframeDocument.body)
  iframeDocument.body.innerHTML = `
    <h1>${ challengeName.toUpperCase() } ONLY</h1>
    <img src='/challenges/default/unnoficial-js-logo.png'/>`
  iframeDocument.head.append(defaultCSSLink())
}

function renderChallenges(){
  challengesRecord.forEach((challenge, challengeIndex) => {
    const newIframe = document.createElement('iframe')
    newIframe.src = challenge.src
    newIframe.title = challenge.name
    document.querySelector('main').append(newIframe)

    newIframe.onload = () => {
      const newIframeDocument = newIframe.contentDocument || newIframe.contentWindow.document;
      if (challenge.onlyJS) handleOnlyJSChallenge( newIframeDocument, challenge.name)}
  })
}

renderChallenges()