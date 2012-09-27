
var contributorList = {
  
  media : [
    { id: "smf",
      name: "The social media family",
      url: "http://www.thesocialmediafamily.com/",
      img: "smf.png",
      short_desc:"smf_short_desc"
    },
    { id: "genbetadev",
      name: "GenBetaDev",
      url: "http://www.genbetadev.com/",
      img: "genbeta_dev-140.jpg",
      short_desc:"genbetadev_short_desc"
    },
    { id: "bonillaware",
      name: "Bonillaware",
      url: "http://www.bonillaware.com/",
      img: "bonillaware.png",
      short_desc:"bonillaware_short_desc"
    },
    { id: "desarrolloWeb",
      name: "Desarrollo Web",
      url: "http://www.desarrolloweb.com/",
      img: "desarrolloweb.png",
      short_desc:"desarrolloWeb_short_desc"
    },
    { name: "Geek MS",
      url: "http://geek.ms",
      img: "geeksms.png",
      short_desc:"geekms_short_desc"
    },
  ],

  contributors : [
    { id: "eui",
      name: "Escuela Universitaria de informática",
      url: "http://eui.upm.es",
      img: "eui.jpg",
      short_desc:"eui_short_desc"
    },
    { id: "ritsi",
      name: "RITSI",
      url: "http://ritsi.org",
      img: "ritsi.png",
      short_desc:"ritsi_short_desc"
    },
     { id: "wiseri",
      name: "Wiseri",
      url: "http://wiseri.com",
      img: "wiseri-130.png",
      short_desc:"wiseri_short_desc"
    },
    { id: "televeo",
      name: "Televeo",
      url: "http://televeo.com",
      img: "televeo-140.png",
      short_desc:"televeo_short_desc"
    },
  ]
};

/*
 Expose contributors as locals param
*/
module.exports =  function(req, res, next){
  res.locals.contributorList =  contributorList;
  next();
};


