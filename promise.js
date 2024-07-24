const fakeRequest = (url) => {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000)
  })
}

fakeRequest("/dogs/1")
  .then(() => {
    console.log("DONE WITH REQUEST!")
  }) 