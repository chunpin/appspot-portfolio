// bio information
var bio = {
    "name" : "CHUN PIN CHEN" ,
    "role" : "Front End Developer",
    "contact": {
      "Abschluss":"Bachelor of Information and Communication",
      "email" :"james19840628@gmail.com",
      "github": "CHUN PIN",
      "blog":"james chen",
      "Wohnhaft": "Rosenheim, Deutschland"
    },
    "welcome_message": "Ich bin gebürtiger Taiwaner, habe in meinem Heimatland “Information & Kommunikation” studiert, und mit einem Bachelor abgeschlossen. In meiner Heimat arbeitete ich 4 Jahre lang in einem damals sehr bekanntem Medien-Design Studio.",
    "skills": [
      "Grafik Design", "Web Design", "Photoshop", "Illustrator", "After Effect", "HTML", "CSS" ,"Javascript"
    ],
    "languages": [
      "English", "Taiwanesisch", "Chinesisch", "Deutsch"
    ],
    "bioPic" :"images/persoanl_picture.jpg"
};

//display name
bio.display= function(){
  //display role
    var formattedRole = HTMLheaderRole.replace('%data%' ,bio.role);
    $("#header").prepend(formattedRole);
    //display name
    var formattedHeaderName = HTMLheaderName.replace("%data%",bio.name);
    $("#header").prepend(formattedHeaderName);
    
    //display contact
    var formattedContact = HTMLabschluss.replace("%data%", bio.contact.Abschluss);
    $("#header:last").append(formattedContact);
    //display email
    var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
    $("#header:last").append(formattedEmail);
    //display github
    //var formattedGithub = HTMLgithub.replace("%data%", bio.contact.github);
    //$("#header:last").append(formattedGithub);
    //display Blog
    //var formattedBlog = HTMLblog.replace("%data%", bio.contact.blog);
    //$("#header:last").append(formattedBlog);
    //display Location
    var formattedWohnhaft = HTMLwohnhaft.replace("%data%", bio.contact.Wohnhaft);
    $("#header:last").append(formattedWohnhaft);

    //bioPic & Welcome Massage
    var formattedBioPic = HTMLbioPic.replace("%data%",bio.bioPic);
    $("#header:last").append(formattedBioPic);
    var formattedWelcomMsg = HTMLWelcomeMsg.replace("%data%", bio.welcome_message);
    $("#header:last").append(formattedWelcomMsg);


    //display Skills
    $("#header:last").append(HTMLskillsStart);

    for(skill in bio.skills){
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#header:last").append(formattedSkills);
    };


    //display languages
   $("#header:last").append(HTMLlanguagesStart);
 
   for(language in bio.languages){
        var formattedLanguages = HTMLlanguages.replace("%data%" ,bio.languages[language] );
        $("#header:last").append(formattedLanguages);
    };

  
   
};

// bio.display();

// education section
var education = {
  "schools" : [ 
   {
    "name":"Tainan Kang Ning University, vormals Leader University",
    "location": "Tainan City, TAIWAN",
    "years":"2002-2007",
    "degree":"Bachelor",
    "major": "Information and Communication"
   },   
   {
    "name": "Kung Shang High School",
    "location": "Tainan City, TAIWAN",
    "years":"1999-2002",
    "degree":"High School",
    "major": "Elektro Ingenieurswesen"
   }  
  ],
  "onlineCourse" : [

      // {
      //   "title": " ",
      //   "school": " ",
      //   "dates": ,
      //   "url" :" "
      // },
      // {
      //   "title": " ",
      //   "school": " ",
      //   "dates": ,
      //   "url" :" "
      // },
      // {
      //   "title": " ",
      //   "school": " ",
      //   "dates": ,
      //   "url" :" "
      // },
      // {
      //   "title": " ",
      //   "school": " ",
      //   "dates": ,
      //   "url" :" "
      // },
      // {
      //   "title": " ",
      //   "school": " ",
      //   "dates": ,
      //   "url" :" "
      // },
      {
        "title": "Test Driven Development",
        "school": "Watch and Code",
        "dates": 2017,
        "url" :"https://watchandcode.com/p/premium"
      },
      {
        "title": "TodoMVC jQuery",
        "school": "Watch and Code",
        "dates": 2017,
        "url" :"https://watchandcode.com/p/premium"
      },
      {
        "title": "Practical JavaScript",
        "school": "Watch and Code",
        "dates": 2017,
        "url" :"https://watchandcode.com/p/practical-javascript"
      },
      {
        "title": "JavaScript Design Patterns",
        "school": "Udacity",
        "dates": 2017,
        "url" :"https://classroom.udacity.com/courses/ud989"
      },
      {
        "title": "Web Application Development with JavaScript and MongoDB - created by University of London Goldsmiths, University of London",
        "school": "Coursera",
        "dates": 2016,
        "url" :"https://www.coursera.org/learn/web-application-development"
      },
      {
        "title": "Introduction to Meteor.js Development - created by University of London Goldsmiths, University of London",
        "school": "Coursera",
        "dates": 2016 ,
        "url" :"https://www.coursera.org/learn/meteor-development"
      },
      {
        "title": "Meteor and React for Realtime Apps ",
        "school": "Udemy",
        "dates": 2016 ,
        "url" :"https://www.udemy.com/meteor-react-tutorial/"
      },
      {
        "title": "AngularJS JumpStart with Dan Wahlin",
        "school": "Udemy Online Course",
        "dates": 2016,
        "url" :"https://www.udemy.com/angularjs-jumpstart/"
      },
      {
        "title": "Web Tooling & Automation - created by Google",
        "school": "Udacity",
        "dates": 2016 ,
        "url" :"https://www.udacity.com/course/web-tooling-automation--ud892"
      },
      {
        "title": "How to Use Git and GitHub",
        "school": "Udacity",
        "dates": 2016,
        "url" :"https://www.udacity.com/course/how-to-use-git-and-github--ud775"
      },
      {
        "title": "Intro to AJAX",
        "school": "Udacity",
        "dates": 2016,
        "url" :"https://www.udacity.com/course/intro-to-ajax--ud110"
      },
      {
        "title": "Object-Oriented JavaScript - created by Hack Reactor",
        "school": "Udacity",
        "dates": 2016,
        "url" :"https://www.udacity.com/course/object-oriented-javascript--ud015"
      },
      {
        "title": "Intro to jQuery",
        "school": "Udacity",
        "dates": 2016,
        "url" :"https://www.udacity.com/course/intro-to-jquery--ud245"
      },
      {
        "title": "JavaScript Syntax",
        "school": "Udacity",
        "dates": 2015,
        "url" :"http://www.udacity.com/course/ud804"
      },
      {
        "title": "JavaScript Basics",
        "school": " Udactiy",
        "dates": 2015,
        "url" :"https://www.udacity.com/course/javascript-basics--ud804"
      },
      {
        "title": "Responsive Web Design Fundamental - created by Google",
        "school": "Udacity",
        "dates": 2015,
        "url" :"https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
      },
      {
        "title": "Responsive Images - created by Google",
        "school": "Udacity",
        "dates": 2015,
        "url" :"https://www.udacity.com/course/responsive-images--ud882"
      },
      {
        "title": "Website Performance Optimization - created by Google",
        "school": "Udacity",
        "dates": 2015,
        "url" :"https://www.udacity.com/course/website-performance-optimization--ud884"
      }
  ]
}; 


education.school_Display = function(){
  $("#education").append(HTMLschoolStart);

  for(school in education.schools){
      var formattedschoolName =  HTMLschoolName.replace("%data%", education.schools[school].name); 
      $(".education-entry:last").append(formattedschoolName);
      var formattedschoolDegree =  HTMLschoolDegree.replace("%data%",education.schools[school].degree) ;
      $(".education-entry:last").append(formattedschoolDegree);
      var formattedschoolDates =  HTMLschoolDates.replace("%data%",education.schools[school].years);
      $(".education-entry:last").append(formattedschoolDates);
      var formattedschoolLocation =  HTMLschoolLocation.replace("%data%",education.schools[school].location); 
      $(".education-entry:last").append(formattedschoolLocation);
      var formattedschoolMajor =  HTMLschoolMajor.replace("%data%",education.schools[school].major);
      $(".education-entry:last").append(formattedschoolMajor);
  };
};

education.onlineCourse_Display = function(){
  $(".education-entry:last").append(HTMLonlineClasses);

  for(course in education.onlineCourse){
      var formattedOnlineTitleLink = HTMLonlineTitle.replace("#", education.onlineCourse[course].url);
      var formattedOnlineTitle =  formattedOnlineTitleLink.replace("%data%", education.onlineCourse[course].title); 
      $(".education-entry:last").append(formattedOnlineTitle);
      var formattedOnlineSchool =  HTMLonlineSchool.replace("%data%",education.onlineCourse[course].school) ;
      $(".education-entry:last").append(formattedOnlineSchool);
      var formattedOnlineDates =  HTMLonlineDates.replace("%data%",education.onlineCourse[course].dates);
      $(".education-entry:last").append(formattedOnlineDates);
      /*
      var formattedOnlineURLLink =  HTMLonlineURL.replace("#",education.onlineCourse[course].url); 
      var formattedOnlineURL =  formattedOnlineURLLink.replace("%data%",education.onlineCourse[course].url); 
      $(".education-entry:last").append(formattedOnlineURL);
      */
  };
};

education.school_Display();
education.onlineCourse_Display();

//work.jobs sections
var work = {
    "jobs":[
       {
          "employer":"Ironman Design",
          "title":"Web Interface Designer",
          "dates":"2006 bis 2010",
          "location":"Tainan City,Taiwan",
          "description":"Aufsetzen von Verträgen, Grafikdesign, Layouts, Produktion"
       },
       {
          "employer":"Area Reversal Design",
          "title":"Assistance printing design",
          "dates":"2005 bis 2006",
          "location":"Tainan City,Taiwan",
          "description":"Design und Produktion von Broschüren, Katalogen, Logos und Marketing Artikeln"
       },
       {
          "employer": "The Rimrock Resort Hotel",
          "title":"Housekeeping & Roomboy, Kellner und Weinkellner",
          "dates":"2011 bis 2012",
          "location":"Banff, Canada",
          "description":"Gaststätten Gewerbe"
       },
       {
          "employer": "Happinger Hof",
          "title":"Housekeeping & Roomboy",
          "dates":"2013",
          "location":"Rosenheim,Deutschland",
          "description":"Reinigungsdienst"
       },
       {
          "employer": "Batchfield Photography",
          "title":"Webdesign und Frontend Developer",
          "dates":"2015 bis jetzt ",
          "location":"Rosenheim,Deutschland",
          "description":"Konzepte erstellen, Wired frame, user journey, Layout, Frontend Coding, uvm."
       }

    ]
};
//display jobs in work Object
work.display = function(){  
  $('#workExperience').append(HTMLworkStart);

  for(job in work.jobs){
    var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    $(".work-entry:last").append(formattedWorkEmployer);    
    var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    $(".work-entry:last").append(formattedWorkTitle);
    var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedWorkDates);
    var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedWorkLocation);
    var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedWorkDescription);
  };
};

work.display();

//projects Sections
var projects = {
    "project":[
        {"Title" :"Ironman Design Studio",
         "Dates":"2009",
         "Description":"Web-Entry des Design Studios, mein Design",
         "Images":["images/ironman_01.jpg",
                   "images/ironman_02.jpg",
                   "images/ironman_03.jpg"
                  ]
        },
        {"Title" :"Tainan Fitness",
         "Dates":"2015",
         "Description":"Website eines Fitness-Studios",
         "Images":["images/Tainan_Fitness_01.jpg",
                   "images/Tainan_Fitness_02.jpg",
                   "images/Tainan_Fitness_03.jpg"
                  ]
        },
        
        {"Title" :"PaoHuang Technology",
         "Dates":"2009",
         "Description":"PaoHuang Technology Firmen Website (Verkauf von Autoteilen)",
         "Images":["images/PaoHuang_01.jpg"]
        },

        {"Title" :"H-secure",
        "Dates":"2016",
        "Description":"Sicherheitstechnik Website",
        "Images":["images/h-secure-01.png",
                  "images/h-secure-02.png",
                  "images/h-secure-03.png",
                  "images/h-secure-04.png",
                  "images/h-secure-05.png",
                  "images/h-secure-06.png",
                  // "images/h-secure-07.png",
                  "images/h-secure-08.png",
                  "images/h-secure-09.png",
                  "images/h-secure-10.png",
                  ]
        },

        {"Title" :"Passfoto Rosenheim",
        "Dates":"2016",
        "Description":"Passfoto Website ",
        "Images":["images/passfoto-rosenheim-01.png",
                  "images/passfoto-rosenheim-02.png",
                  "images/passfoto-rosenheim-03.png",
                  "images/passfoto-rosenheim-04.png",
                  "images/passfoto-rosenheim-05.png",
                  "images/passfoto-rosenheim-06.png",
                  "images/passfoto-rosenheim-07.png",
                  "images/passfoto-rosenheim-08.png",
                  "images/passfoto-rosenheim-09.png",
                  ]
        }
    ]
};

projects.display = function(){
  $("#projects").append(HTMLprojectStart);

  for(project in projects.project){
    var formattedProjectTitle =  HTMLprojectTitle .replace("%data%", projects.project[project].Title);
    $(".project-entry:last").append(formattedProjectTitle);
    var formattedProjectDates =  HTMLprojectDates .replace("%data%", projects.project[project].Dates);
    $(".project-entry:last").append(formattedProjectDates);
    var formattedProjectDescription =  HTMLprojectDescription .replace("%data%", projects.project[project].Description);
    $(".project-entry:last").append(formattedProjectDescription);
    
    for(image in projects.project[project].Images){
        var formattedProjectImage =  HTMLprojectImage .replace("%data%", projects.project[project].Images[image]);
        $(".project-entry:last").append(formattedProjectImage);
    }
  }
};

projects.display();


