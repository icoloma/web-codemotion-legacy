
var sponsorList = {
  
  platinum : [
    { name: "Oracle",
      url: "http://www.oracle.com",
      img: "oracle-140.png",
    },
    { name: "Microsoft",
      url: "http://www.microsoft.com",
      img: "microsoft-140.png"
    },
    { name: "Medianet",
      url: "http://www.medianet.es",
      img: "medianet-140.png",
    }
  ],

  
  gold: [
    { name: "Extrema Sistemas",
      url: "http://www.extrema-sistemas.com",
      img: "extrema-140.png",
    },
   { name: "Atlassian",
      url: "http://www.atlassian.com/es",
      img: "atlassian-140.png",
    },
    { name: "Bq",
      url: "http://www.bqreaders.com",
      img: "bq-140.png",
    },
    { name: "Vilt",
      url: "http://www.vilt-group.com",
      img: "vilt-140.png",
    },
    { name: "Coritel",
      url: "http://coritel.es",
      img: "coritel-140.png",
    },
    { name: "IBM",
      url: "http://ibm.com",
      img: "ibm-140.png",
    }
  ],

  silver : [
    { name: "Tuenti",
      url: "http://blog.tuenti.com/dev",
      img: "tuenti-130.png",
    },
    { name: "Paradigma Tecnológico",
      url: "http://paradigmatecnologico.com",
      img: "paradigma-140.png",
    },
    { name: "Amazon",
      url: "http://www.amazon.co.uk/careers",
      img: "amazon-140.png",
    },
    { name: "Telefónica Digital",
      url: "http://www.tid.es",
      img: "tid-140.jpg",
    },
    { name: "Mozilla",
      url: "http://www.mozilla.org",
      img: "mozilla-140.png"
    },
  ],

  media : [
    { name: "The social media family",
      url: "http://www.thesocialmediafamily.com/",
      img: "smf.png",
    },
    { name: "GenBetaDev",
      url: "http://www.genbetadev.com/",
      img: "genbeta_dev-140.jpg",
    },
    { name: "Bonillaware",
      url: "http://www.bonillaware.com/",
      img: "bonillaware.png",
    },
    { name: "Desarrollo Web",
      url: "http://www.desarrolloweb.com/",
      img: "desarrolloweb.png",
    },
    { name: "Geek MS",
      url: "http://geek.ms",
      img: "geeksms.png",
    },
  ]
};

/*
 Expose sponsors as locals param
*/
module.exports =  function(req, res, next){
  res.locals.sponsorList =  sponsorList;
  next();
};


