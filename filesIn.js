function buildFilesIn (evt) {
  switch(evt.params.data.id) {
    case "1":
      var filesIn = {
		  "fmri": {
		    "session1": {
			   "rest": "\/home\/pbellec\/demo_niak\/func_40003.mnc.gz",
				}
		  }
      };
      break;
    case "2":
      var filesIn = {
		  "fmri": {
		    "session1": {
			   "rest": "\/home\/pbellec\/demo_niak\/func_40008.mnc.gz"
			 }
		  }
	   };
	   break;
  };
  return filesIn
}

var opt = {
	"folder_out": "\/home\/pbellec\/demo_niak\/fmri_preprocess\/",
	"flag_p2p": "False",
  "flag_global_prop": "False",
  "flag_local_prop": "False",
  "flag_rmap": "True",
  "flag_test": "False"
}
