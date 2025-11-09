const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const projects = document.querySelector('#projects')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')
const projectsContent = document.querySelector('#projects-content')

// Check if mobile
const isMobile = window.innerWidth <= 768

about.addEventListener('click', () => {
  const aboutBox = new WinBox({
    title: 'About Me',
    //modal: true,
    width: isMobile ? '90%' : '400px',
    height: isMobile ? '80%' : '400px',
    top: isMobile ? '5%' : 50,
    right: isMobile ? '5%' : 50,
    bottom: isMobile ? 'auto' : 50,
    left: isMobile ? '5%' : 50,
    html: aboutContent.innerHTML,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    }
  })
})

contact.addEventListener('click', () => {
  const contactBox = new WinBox({
    title: 'Contact Me',
    background: '#00aa00',
    width: isMobile ? '90%' : '400px',
    height: isMobile ? '80%' : '400px',
    top: isMobile ? '5%' : 150,
    right: isMobile ? '5%' : 50,
    bottom: isMobile ? 'auto' : 50,
    left: isMobile ? '5%' : 250,
    html: contactContent.innerHTML,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    }
  })
})

projects.addEventListener('click', () => {
  const projectsBox = new WinBox({
    title: 'Projects',
    background: '#00aa00',
    width: isMobile ? '90%' : '500px',
    height: isMobile ? '80%' : '500px',
    top: isMobile ? '5%' : 100,
    right: isMobile ? '5%' : 100,
    bottom: isMobile ? 'auto' : 50,
    left: isMobile ? '5%' : 150,
    html: projectsContent.innerHTML,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    }
  })
})


// Typewriter.js
// https://github.com/ronv/Typewriter.js

$.fn.typewriter = function() {
  this.each(function() {
    var c = $(this),
      b = c.html(),
      a = 0,
      d = 0;
    c.html("");
    var e = function() {
      if ("<" == b.substring(a, a + 1)) {
        var f = new RegExp(/<span class="instant"/),
          g = new RegExp(/<span class="clear"/);
        if (b.substring(a, b.length).match(f)) a += b.substring(a, b.length).indexOf("</span>") + 7;
        else if (b.substring(a, b.length).match(g)) d = a, a += b.substring(a, b.length).indexOf("</span>") + 7;
        else
          for (;
            ">" != b.substring(a, a + 1);) a++
      }
      c.html(b.substring(d, a++) + (a & 1 ? "_" : ""));
      a >= b.length || setTimeout(e, 70 + 100 *
        Math.random())
    };
    e()
  });
  return this
};
$(".terminal").typewriter();


