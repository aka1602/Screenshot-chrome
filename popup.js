


document.addEventListener('DOMContentLoaded', function() {
    
    let activateButton = document.getElementById('capture');
    activateButton.addEventListener('click', function() {   
          chrome.tabs.captureVisibleTab(function(screenshotUrl) {
       
            chrome.downloads.download({
              url: screenshotUrl
            });
          });
		  });
});  



