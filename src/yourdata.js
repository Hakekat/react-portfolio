// Skills Icons
import godotIcon from "./images/godot.svg"
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import aboutIcon from "./images/oman.jpg"
import demitIcon from "./images/demit.png"
import soundIcon from "./images/sound.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import codepenIcon from "./images/codepen.svg"
import dribbbleIcon from "./images/dribbble.svg"
import instagramIcon from "./images/instagram.svg"
import itchIcon from "./images/itch.svg"


export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Chamaruzzaman",
  headerTagline: [
    //Line 1 For Header
    "This my portfolio",
    //Line 2 For Header
    " ",
    //Line 3 For Header
    " ",
  ],
  //   Header Paragraph
  headerParagraph:
    "Project Developer",

  //Contact Email
  contactEmail: "chamaruzzaman.s@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Stranger Labyrinth (Game Dev)", //Project Title - Add Your Project Title Here
      para:
        "this running on android and windows, stranger labyrint is third first person maze shooter game", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://play-lh.googleusercontent.com/qZVSk9ajSI93m1cQGXrhm-aVODmJz8HvJKIFvaTXyPZ2cyliMhij9huOaBjO5mPUsA8=w1366-h625-rw",
      //Project URL - Add Your Project Url Here
      url: "https://play.google.com/store/apps/details?id=com.godotengine.strlab&hl=in&gl=US",
    },
    {
      title: "Demit (Game Dev)", //Project Title - Add Your Project Title Here
      para:
        "Demit is 2d shooter game with leveling and items inventory system this game is still work in progress", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        demitIcon,
      //Project URL - Add Your Project Url Here
      url: "http://chetanverma.com/",
    },
    {
      title: "PolyGirls Weird (Blockchain Dev)", //Project Title - Add Your Project Title Here
      para:
        "PolyGirls is nft collectible exist on Polygon Blockchain.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://polygirls.xyz/config/images/img1.gif",
      //Project URL - Add Your Project Url Here
      url: "https://polygirls.xyz/",
    },

    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Hi I'm Chamaruzzaman Saputra. Indie Project Developer",
  aboutParaTwo:
    "I'm working with",
  aboutParaThree:
    "Game development: Godot Engine, Blender, Photoshop, Aseprite, Audacity",
  aboutParaFour:
    "Front-End Development: React, Gatsby, Vue, Angular",
  aboutParaFive:
    "Blockchain Development: Solidity, truffle, remix",
  aboutParaSix:
    "I like to make and listening music, and my dream is to build my own indie studio game. thanks",
  aboutImage:
    aboutIcon,

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: godotIcon,
      para:
        "Godot Engine",
    },
    {
      img: htmlIcon,
      para:
        "HTML",
    },
    {
      img: cssIcon,
      para:
        "CSS",
    },
    {
      img: jsIcon,
      para:
        "javascript",
    },
    {
      img: reactIcon,
      para:
        "React",
    },
    {
      img: designIcon,
      para:
        "Design",
    },
    {
      img: soundIcon,
      para:
        "Composer",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------


  //   Contact Section --------------
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/hakekat" },
    {
      img: itchIcon,
      url: "https://hakekat.itch.io/",
    },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
