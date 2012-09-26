
var communitiesList =  [
    { name: "Agile Spain",
      url: "http://www.agile-spain.com",
      img: "agile_spain.png",
    },
    { name: "Android Startup",
      url: "http://www.androidstartup.com",
      img: "androidstartup.jpg"
    },
    { name: "Artalde .net",
      url: "http://msdn.microsoft.com/es-es/cc424933",
      img: "artalde.png",
    },
    { name: "Cloudes",
      url: "http://www.linkedin.com/groups/Grupo-usuarios-Cloud-Computing-Espa%C3%B1a-3529148",
      img: "cloudes.png",
    },
    { name: "DevOps",
      url: "https://madrid-devops.jottit.com/",
      img: "devops.png",
    },
    { name: "Geek MS",
      url: "https://geeks.ms/",
      img: "geeks_ms.png",
    },
    { name: "Google Techonlogy user groups",
      url: "http://www.gtugs.org/",
      img: "gtug.jpg",
    },
    { name: "Groovy user Group",
      url: "https://sites.google.com/site/madridgug/",
      img: "gug.jpg",
    },
    { name: "Html5 Party",
      url: "http://html5.dit.upm.es/",
      img: "html5party.png",
    },
    { name: "JavaHispano",
      url: "http://www.javahispano.org/",
      img: "javahispano.jpg",
    },
    { name: "Madrid dot net",
      url: "http://madriddotnet.wordpress.com/",
      img: "madnug.jpg",
    },
    { name: "Python Madrid",
      url: "http://www.python-madrid.es/",
      img: "madpython.png",
    },
    { name: "Madrid JS",
      url: "http://www.meetup.com/madridjs/",
      img: "madrid_js.jpg",
    },
    { name: "Madry rb",
      url: "https://madridrb.jottit.com/",
      img: "madrid_rb.jpg",
    },
    { name: "Madrid Java User Group",
      url: "http://www.madridjug.org/xwiki/bin/view/Main/WebHome",
      img: "madridjug.jpg",
    },
    { name: "NS Coders",
      url: "http://nscoder-mad.tumblr.com/",
      img: "nscodermad.png",
    },
    { name: "SharePoint User Group",
      url: "http://www.suges.es/Paginas/Home.aspx",
      img: "suges.png",
    },
    { name: "Symfony user group",
      url: "http://www.symfony-madrid.es/",
      img: "symfony.png",
    },
    { name: "Asociación Española de Drupal",
      url: "http://asociaciondrupal.es/",
      img: "drupal.jpg",
    },
    { name: "Rioja DotNet",
      url: "http://www.riojadotnet.com/",
      img: "RiojaDotNet.png",
    },
    { name: "Mozilla Hispano",
      url: "http://www.mozilla-hispano.org/",
      img: "mozilla-hispano.png",
    }

  ];
/*
 Expose communities as locals param
*/
module.exports =  function(req, res, next){
  res.locals.communitiesList =  communitiesList;
  next();
};


