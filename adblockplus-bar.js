(function()
{
  function displayBanner()
  {
    var iframe = document.createElement("iframe");
    iframe.src = "https://static.kzar.co.uk/adblockplus-bar/banner.html";
    iframe.style.position = "absolute";
    iframe.style.width = "100%";
    iframe.style.height = "100px";
    iframe.style.left = "0px";
    iframe.style.top = "0px";
    document.body.appendChild(iframe);
  }

  var image = document.createElement("img");
  image.src = "https://static.kzar.co.uk/adblockplus-bar/adblockplus-icon.png?ads=";
  image.addEventListener("load", displayBanner);
}());
