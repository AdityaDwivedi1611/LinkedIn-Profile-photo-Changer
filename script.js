document.addEventListener("DOMContentLoaded", function () {
    const changePictureButton = document.getElementById("change-picture");
    changePictureButton.addEventListener("click", function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "change-profile-picture" });
      });
    });
  });
  