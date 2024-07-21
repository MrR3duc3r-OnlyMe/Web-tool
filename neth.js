let __________$__________ = (2+2+2+2+2+2+2-2+2-2+2-2+2-2/2*2);
function showResult(title, message, icon) {
  const iconn = icon ? icon.toLowerCase() : "";
  if (iconn === "error"){
   //playShortAudio("error.mp3");
  }
  Swal.fire({
    title: title,
    html: message,
    icon: iconn,
    background: "#141A25 url(dg.svg)",
    //  showCancelButton: true,
    confirmButtonColor: "#042970",
    // cancelButtonColor: "#d33",
    confirmButtonText: "Okay"
  });
}

let sound = null;
function playMusic(url, isalang, isLoop){
  if (sound != null) {
    sound.stop();
    sound.unload();
    sound = null;
  }
   sound = new Howl({
      src: [url],
      loop: isLoop,
      format: ['mp3'],
      volume: 1,
      onend: () => {}
    });
  if (isalang){
    sound.play();
  }
}

function playShortAudio(url){
  const s = new Howl({
    src: [url],
    loop: false,
    volume: 1,
    autoplay: true
  });
  s.play();
}
function rainbow(div,text){
  let math = Math.floor(Math.random() * 99999999);
  let k = 0;
  let pogi = new Array();
  let neth = new Array("#FF0000", "#FF4000", "#FF8000", "#FFC000", "#FFFF00", "#C0FF00", "#80FF00", "#40FF00", "#00FF00", "#00FF40", "#00FF80", "#00FFC0", "#00FFFF", "#00C0FF", "#0080FF", "#0040FF", "#0000FF", "#4000FF", "#8000FF", "#C000FF", "#FF00FF", "#FF00C0", "#FF0080", "#FF0040");
  const startColor = () => {
    for (var b = 0; b < pogi.length; b++) {
      document.getElementById(text+math+b).style.color = neth[b]
    }
    for (var c = 0; c < neth.length; c++) {
      neth[c - 1] = neth[c]
    }
    neth[neth.length - 1] = neth[-1];
    setTimeout(() => startColor(), 50);
  }
  while (neth.length<text.length){neth=neth.concat(neth);}
  while (k<=text.length){pogi[k]=text.charAt(k);k++;}
  for(var d=0;d<pogi.length;d++){div.innerHTML += `<span id='${text+math+d}' class='${text+math+d}'>${pogi[d]}</span>`}
  startColor();
}
const result = document.getElementById('result');
const footertxt = document.getElementById('pogiako');
footertxt.innerHTML = "© 2024 NethProjects — by Kenneth Aceberos";
rainbow(document.getElementById("test1"), "Web Tools");
let file = "NethBgmusic";
let getm = localStorage.getItem(file);
let s = false;
function switchie1(b) {
  let pogika = document.getElementById("pogika");
  playMusic("public/W"+"i"+"e"+"g"+"i"+"n"+"e"+((1+1+1+1+1+1+1+1+1+1+1+1)-1-1-1-1-1-1-1-1-1-1-1-1+(__________$__________)+987654321).toString()+".mp3", b, true);
  pogika.innerHTML = "";
  rainbow(pogika, (b ? "🎧 " : "") + "Neth");
}
const pogika = document.getElementById("pogika");
pogika.addEventListener('click', () => {
    s=!s;
    let succ=s?"1":"0";
    switchie1(s);
    localStorage.setItem(file, succ);
    return;
});
s=getm==="1"?true:false;
switchie1(s);

const bgn = document.getElementById("bgn");
async function add(title, msg, endpoint){
const ife = endpoint.startsWith("This uses POST method.<br>");
const container = document.createElement('div');
container.classList.add('button1');
const label = document.createElement('label');
label.classList.add('neth12');
label.style.marginBottom = "2px";
label.innerHTML = `<b>${title}</b>`;
container.appendChild(label);
const desc = document.createElement('p');
desc.classList.add('neth12');
desc.style.margin = 0;
desc.style.padding = 0;
desc.style.marginBottom = "10px";
desc.innerHTML = `${msg}`;
container.appendChild(desc);
const c2 = document.createElement('div');
c2.classList.add('bgn-isa');
c2.innerHTML = `<b>OPEN ${title.toUpperCase()}</b>`;
container.appendChild(c2);
c2.onclick = () => {
window.location.href = endpoint+".html";
}
bgn.appendChild(container);
}

async function tryandtry(){
  add(
    "Token Getter",
    `Get your Facebook token here`,
    "/tokengetter"
  );
  add(
    "Cookie/Appstate Getter",
    `Get your Facebook cookie/appstate here. This only works with selected account!`,
    "/cookieappstategetter"
  );
  add(
    "Appstate2Token (EAAGN)",
    `Useful for sharebooster / other tools working based on EAAGN.`,
    "/appstate2token"
  );
  add(
    "Followers Booster",
    `Gain your fame by boosting your followers.<br>
    <b>Auto add access token to database.<br>More tokens = More followers</b>`,
    "/followersbooster"
  );
  add(
    "Share Booster",
    `Gain your fame by boosting your shares on a Facebook post.`,
    "/sharebooster"
  );
  add(
    "React Booster",
    `Gain your fame by boosting your reactions on a Facebook post.`,
    "/reactbooster"
  );
}