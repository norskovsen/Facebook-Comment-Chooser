chrome.runtime.onMessage.addListener(receiver);
console.log('Content script loaded');

function receiver(request, sender, sendResponse) {
  if (request.message === "user clicked!") {
      loadComments();
      console.log('Button clicked');
  }
}

function loadComments(){
    let loadCommentsLink = document.body.querySelector('a.UFIPagerLink');
    if(loadCommentsLink){
	loadCommentsLink.click();
	setTimeout(loadComments, 100);
    }else{
	chooseComment()
    }
}

function chooseComment(){
    removePrevious();
    let comments = document.querySelector('div._3b-9._j6a div').children;
    let chosenNum = random(comments.length);
    let prevComment = comments[chosenNum-1];
    let chosenComment = comments[chosenNum];
    chosenComment.id = "chosenComment";
    chosenComment.style.backgroundColor = "gray";
    prevComment.scrollIntoView();
}

function removePrevious(){
    let preChosenComment = document.getElementById('chosenComment');
    console.log(preChosenComment);
    if(preChosenComment){
	preChosenComment.style.backgroundColor = "";
	preChosenComment.id = "";
    }
}

function random(num){
    return Math.floor(Math.random()*num);
}
