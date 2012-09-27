
var sponsorList = {
  
  platinum : [

    { id : "oracle",
      name: "Oracle",
      url: "http://www.oracle.com",
      img: "oracle-140.png",
      imgBig: "oracle-400.png",
      short_desc: "oracle_short_desc",
      big_desc_header: "oracle_big_desc_header",
      big_desc_body: "oracle_big_desc_body"
    },
    
    { id : "microsoft",
      name: "Microsoft",
      url: "http://www.microsoft.com",
      img: "microsoft-140.png",
      imgBig: "microsoft-400.png",
      short_desc: "microsoft_short_desc",
      big_desc_header: "microsoft_big_desc_header",
      big_desc_body: "microsoft_big_desc_body"
    },

    { id: "medianet",
      name: "Medianet",
      url: "http://www.medianet.es",
      img: "medianet-140.png",
      imgBig: "medianet-400.png",
      short_desc: "medianet_short_desc",
      big_desc_header: "medianet_big_desc_header",
      big_desc_body: "medianet_big_desc_body"
    }
    
  ],

  
  gold: [
  
    { id: "extrema",
      name: "Extrema Sistemas",
      url: "http://www.extrema-sistemas.com",
      img: "extrema-140.png",
      imgBig: "extrema-400.png",
      short_desc: "extrema_short_desc",
      big_desc_header: "extrema_big_desc_header",
      big_desc_body: "extrema_big_desc_body"
    },

    { id: "atlassian",
      name: "Atlassian",
      url: "http://www.atlassian.com/es",
      img: "atlassian-140.png",
      imgBig: "atlassian-400.png",
      short_desc: "atlassian_short_desc",
      big_desc_header: "atlassian_big_desc_header",
      big_desc_body: "atlassian_big_desc_body"
    },

    { id: "bq",
      name: "Bq",
      url: "http://www.bqreaders.com",
      img: "bq-140.png",
      imgBig: "bq-400.png",
      short_desc: "bq_short_desc",
      big_desc_header: "bq_big_desc_header",
      big_desc_body: "bq_big_desc_body"
    },
    { id: "vilt",
      name: "Vilt",
      url: "http://www.vilt-group.com",
      img: "vilt-140.png",
      imgBig: "vilt-400.png",
      short_desc: "vilt_short_desc",
      big_desc_header: "vilt_big_desc_header",
      big_desc_body: "vilt_big_desc_body"
    },
    { id: "coritel",
      name: "Coritel",
      url: "http://coritel.es",
      img: "coritel-140.png",
      imgBig: "coritel-400.png",
      short_desc: "coritel_short_desc",
      big_desc_header: "coritel_big_desc_header",
      big_desc_body: "coritel_big_desc_body"
    },
    { id: "ibm",
      name: "IBM",
      url: "http://ibm.com",
      img: "ibm-140.png",
      imgBig: "ibm-400.png",
      short_desc: "ibm_short_desc",
      big_desc_header: "ibm_big_desc_header",
      big_desc_body: "ibm_big_desc_body"
    }
  
  ],

  silver : [
  
    { id:"tuenti",
      name: "Tuenti",
      url: "http://blog.tuenti.com/dev",
      img: "tuenti-130.png",
      imgBig: "tuenti-400.png",
      short_desc: "tuenti_short_desc",
      big_desc_header: "tuenti_big_desc_header",
      big_desc_body: "tuenti_big_desc_body"
    },
    { id:"paradigma",
      name: "Paradigma Tecnológico",
      url: "http://paradigmatecnologico.com",
      img: "paradigma-140.png",
      imgBig: "paradigma-400.png",
      short_desc: "paradigma_short_desc",
      big_desc_header: "paradigma_big_desc_header",
      big_desc_body: "paradigma_big_desc_body"
    },
    { id: "amazon",
      name: "Amazon",
      url: "http://www.amazon.co.uk/careers",
      img: "amazon-140.png",
      imgBig: "amazon-400.png",
      short_desc: "amazon_short_desc",
      big_desc_header: "amazon_big_desc_header",
      big_desc_body: "amazon_big_desc_body"
    },
    { id: "tid",
      name: "Telefónica Digital",
      url: "http://www.tid.es",
      img: "tid-140.jpg",
      imgBig: "tid-400.jpg",
      short_desc: "tid_short_desc",
      big_desc_header: "tid_big_desc_header",
      big_desc_body: "tid_big_desc_body"
    },
    { id: "mozilla",
      name: "Mozilla",
      url: "http://www.mozilla.org",
      img: "mozilla-140.png",
      imgBig: "mozilla-400.png",
      short_desc: "mozilla_short_desc",
      big_desc_header: "mozilla_big_desc_header",
      big_desc_body: "mozilla_big_desc_body"
    },
    
  
]};

/*
 Expose sponsors as locals param
*/
module.exports =  function(req, res, next){
  res.locals.sponsorList =  sponsorList;
  next();
};


