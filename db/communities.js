
var communitiesList =  [
    { name: "Agile Spain",
      url: "http://www.agile-spain.com",
      img: "agile_spain.png",
      short_desc: "agile_short_desc"
    },
    { name: "Android Startup",
      url: "http://www.androidstartup.com",
      img: "androidstartup.jpg",
      short_desc: "android_short_desc"
    },
    { name: "Artalde .net",
      url: "http://msdn.microsoft.com/es-es/cc424933",
      img: "artalde.png",
      short_desc: "artalde_short_desc"
    },
    { name: "Cloudes",
      url: "http://www.linkedin.com/groups/Grupo-usuarios-Cloud-Computing-Espa%C3%B1a-3529148",
      img: "cloudes.png",
      short_desc: "cloudes_short_desc"
    },
    { name: "DevOps",
      url: "https://madrid-devops.jottit.com/",
      img: "devops.png",
      short_desc: "devops_short_desc"
    },
    { name: "Geek MS",
      url: "https://geeks.ms/",
      img: "geeks_ms.png",
      short_desc: "geeks_short_desc"
    },
    { name: "Google Techonlogy user groups",
      url: "http://www.gtugs.org/",
      img: "gtug.jpg",
      short_desc: "gtug_short_desc"
    },
    { name: "Groovy user Group",
      url: "https://sites.google.com/site/madridgug/",
      img: "gug.jpg",
      short_desc: "gug_short_desc"
    },
    { name: "Html5 Party",
      url: "http://html5.dit.upm.es/",
      img: "html5party.png",
      short_desc: "html5party_short_desc"
    },
    { name: "JavaHispano",
      url: "http://www.javahispano.org/",
      img: "javahispano.jpg",
      short_desc: "javahispano_short_desc"
    },
    { name: "Madrid dot net",
      url: "http://madriddotnet.wordpress.com/",
      img: "madnug.jpg",
      short_desc: "donnet_short_desc"
    },
    { name: "Python Madrid",
      url: "http://www.python-madrid.es/",
      img: "madpython.png",
      short_desc: "madpython_short_desc"
    },
    { name: "Madrid JS",
      url: "http://www.meetup.com/madridjs/",
      img: "madrid_js.jpg",
      short_desc: "madridjs_short_desc"
    },
    { name: "Madry rb",
      url: "https://madridrb.jottit.com/",
      img: "madrid_rb.jpg",
      short_desc: "madridrb_short_desc"
    },
    { name: "Madrid Java User Group",
      url: "http://www.madridjug.org/xwiki/bin/view/Main/WebHome",
      img: "madridjug.jpg",
      short_desc: "madridjug_short_desc"
    },
    { name: "NS Coders",
      url: "http://nscoder-mad.tumblr.com/",
      img: "nscodermad.png",
      short_desc: "nscoders_short_desc"
    },
    { name: "SharePoint User Group",
      url: "http://www.suges.es/Paginas/Home.aspx",
      img: "suges.png",
      short_desc: "suges_short_desc"
    },
    { name: "Symfony user group",
      url: "http://www.symfony-madrid.es/",
      img: "symfony.png",
      short_desc: "simfony_short_desc"
    },
    { name: "Asociación Española de Drupal",
      url: "http://asociaciondrupal.es/",
      img: "drupal.jpg",
      short_desc: "drupal_short_desc"
    },
    { name: "Rioja DotNet",
      url: "http://www.riojadotnet.com/",
      img: "RiojaDotNet.png",
      short_desc: "riojadotnet_short_desc"
    },
    { name: "Mozilla Hispano",
      url: "http://www.mozilla-hispano.org/",
      img: "mozilla-hispano.png",
      short_desc: "mozilla_short_desc"
    }

  ];
/*
 Expose communities as locals param
*/
module.exports =  function(req, res, next){
  res.locals.communitiesList =  communitiesList;
  next();
};


