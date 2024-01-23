const bookReviewTextarea = document.getElementById("bookReviewTextarea")
const bookReviewButton = document.getElementById("bookReviewButton")
const bookReviewResult = document.getElementById("bookReviewResult")

bookReviewButton.addEventListener("click", function() {
  const bookReview = bookReviewTextarea.value
  bookReviewResult.textContent = `Your book review: ${bookReview}`
})

const personalBioTextarea = document.getElementById("personalBioTextarea")
const personalBioButton = document.getElementById("personalBioButton")
const personalBioResult = document.getElementById("personalBioResult")

personalBioButton.addEventListener("click", function() {
  const personalBio = personalBioTextarea.value
  personalBioResult.textContent = `${personalBio}`

})

const personalDiaryTextarea = document.getElementById("personalDiaryTextarea")
const personalDiaryButton = document.getElementById("personalDiaryButton")
const personalDiaryResult = document.getElementById("personalDiaryResult")

personalDiaryButton.addEventListener("click", function() {
  const personalDiary = personalDiaryTextarea.value
  const currentDateTime = new Date().toLocaleString()
  personalDiaryResult.innerHTML = `
    <p><strong>${currentDateTime}</strong></p>
    <p>${personalDiary}</p>

  `

})
