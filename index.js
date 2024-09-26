let messages = [
  " $-> initializing hack program...",
  " $-> connecting to secure server at wi-fi ip : 192.168.45.72",
  " $-> bypassing firewall...",
  " $-> decrypting 2048-bit SSL encryption... ",
  " $-> accessing root privileges... ",
  " $-> parsing all the folders and files...",
  " $-> injecting malware script into system... ",
  " $-> retrieving personal data... ",
  " $-> hacking instagram username...",
  " $-> username found",
  " $-> connecting to facebook...",
  " $-> fetching phonebook contacts...",
  " $-> fetching data from the gallery...",
  " $-> phone data compromised! ",
  " $-> disabling phone security...",
  " $-> hacked the mainframe... main server control acquired! ",
  " $-> alert! system breach detected... initiating countermeasures...",
  " $-> hacking alert!",
  " $-> self-destruct sequence initiated...5... 4... 3... 2... 1... 0",
  " $-> phone has been hacked completely",
  " $-> phone will switch off if user tries to open it!",
];

const p = async (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const start = () => {

  let bhoy_values = [
    "$-> 00001111000011110101101100110101###############################",
    "$-> 11011001101010000111100001111010",
    "$-> 10101000011111101100100001111010",
    "$-> 00011110101101000001111011011001",
  ];
  let i = 0;
  let intId = setInterval(() => {
    document.getElementsByClassName("bhoy")[0].innerHTML = bhoy_values[i];
    if (i == 3) i = 0;
    else i++;
  }, 150);

  messages.forEach(async (msg, index) => {
    let a = await p(index * 2000);
    if (a) {
      let x = document.createElement("a");
      x.innerHTML = msg;
      document.getElementById("wrapper").appendChild(x);
    }
    if(index == 20)
    {
      clearInterval(intId)
      document.getElementsByClassName("bhoy")[0].innerHTML = ""
    }
  });

};

// Function to request full-screen
function goFullScreen() {
  const docEl = document.documentElement;
  if (docEl.requestFullscreen) {
    docEl.requestFullscreen();
  } else if (docEl.mozRequestFullScreen) {
    // Firefox
    docEl.mozRequestFullScreen();
  } else if (docEl.webkitRequestFullscreen) {
    // Chrome, Safari, Opera
    docEl.webkitRequestFullscreen();
  } else if (docEl.msRequestFullscreen) {
    // IE/Edge
    docEl.msRequestFullscreen();
  }
  document.getElementById("btn").style.display = "none";
  document.getElementsByClassName("container")[0].style.backgroundImage =
    "url('https://thumbs.dreamstime.com/b/anonymous-hacker-green-color-hoodie-shadow-under-deep-black-green-background-dangerous-criminal-concept-image-hacker-268424877.jpg')";
  start();
}

// Trigger full-screen when the page loads
//   window.onload = () => {
//     goFullScreen();
//   };

// document.addEventListener('contextmenu', function(e) {
//     e.preventDefault(); // Prevents the default right-click menu from appearing
//     // alert('Right-click is disabled on this page!'); // Optional: Show a message
//   });
