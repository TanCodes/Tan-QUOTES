const auth = document.getElementById("auth")
const but = document.querySelector(".but")
const quote = document.getElementById("qt")


but.addEventListener("click",()=>{
  var url = "https://favqs.com/api/qotd"
  
  fetch(url)
  .then((url_data) =>
         url_data.json()
  )
  .then((realdata)=>{
      var quote = realdata['quote']["body"]
      var author = realdata['quote']["author"]
      qt.innerHTML = `<i class='bx bxs-quote-alt-left'></i> ${quote} <i class='bx bxs-quote-alt-right' ></i> `
      auth.innerHTML = author
    
  })
 
})
