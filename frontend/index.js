function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here
      const widgets = document.querySelectorAll('section>div')
      widgets.forEach((widget, idx) => {
        widget.classList.add('widget')
        widget.setAttribute('tabindex', idx + 1 + '')
      } )
      

  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here
      const randomIndex = Math.floor(Math.random() * 10)
      const randomQuote = quotes[randomIndex] // eslint-disable-line
      const quote = document.createElement('div')
      const quoteText = randomQuote.quote
      quote.textContent = quoteText
      const wid1 = document.querySelector('.quoteoftheday')
      wid1.appendChild(quote)

      const authorDate = document.createElement('div')
      const { author, date } = randomQuote
      authorDate.textContent = `${author} in ${date || 'an unknown date'}`
      wid1.appendChild(authorDate)
     // console.log(quotes)

  // 👉 TASK 3 - Build a "Corporate Speak" widget
  //  ✨ add your code here
  const randomAdverb1 = adverbs[Math.floor(Math.random() * adverbs.length)]
  const randomAdverb2 = adverbs[Math.floor(Math.random() * adverbs.length)]
  //console.log(randomAdverb1)
  const randomNoun1 =  nouns[Math.floor(Math.random() * nouns.length)]
  const randomNoun2 =  nouns[Math.floor(Math.random() * nouns.length)]
  
  const randomVerb1 = verbs[Math.floor(Math.random() * verbs.length)]
  const randomVerb2 = verbs[Math.floor(Math.random() * verbs.length)]
  
  const paragraph = document.createElement('p')
  paragraph.textContent = `We need to ${randomVerb1} our ${randomNoun1} ${randomAdverb1}
  in order to ${randomVerb2} our ${randomNoun2} ${randomAdverb2}.`
  const wid2 = document.querySelector('.corporatespeak')
  wid2.appendChild(paragraph)



  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here
  const countdown = document.querySelector('.countdown')
  let count = 5
  const countdownParagraph = document.createElement('p')
  countdownParagraph.textContent = `T-minus ${count}...`
  countdown.appendChild(countdownParagraph)

  const id = setInterval(() => {
    if(count === 1){
      countdownParagraph.textContent = 'Liftoff! 🚀'
      clearInterval(id)
    } else {
    count--
    countdownParagraph.textContent = `T-minus ${count}...`
    }
  }, 1000)

  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here
  const person = people[Math.floor(Math.random() * people.length)]
  const personPar = document.createElement('p')
  document.querySelector('.friends').appendChild(personPar)
  let year = person.dateOfBirth.split('-')[0]
  
  let sentence = `${person.fname} ${person.lname} was born in ${year} and `

  if (!person.friends.length){
    sentence += 'has no friends'
  } else {
    sentence += 'is friends with '
    for (let idx = 0; idx < person.friends.length; idx++){
      const friendId = person.friends[idx]
      const friend = people.find(p => p.id === friendId)
      const fullName = `${friend.fname} ${friend.lname}`
      let isLastIdx = idx === person.friends.length - 1
      let isNextToLastIdx = idx === person.friends.length - 2
      if (isLastIdx){
        sentence += `${fullName}.`
      } else if (isNextToLastIdx){
        sentence += `${fullName} and `
      } else {
        sentence += `${fullName}, `
      }
    }
  }
  personPar.textContent = sentence
  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here


  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
