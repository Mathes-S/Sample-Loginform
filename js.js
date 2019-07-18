function form1()
{
	var uname = document.forms["loginform"]["uname"].value;
	var psword = document.forms["loginform"]["psword"].value;

	if (uname == "" ||  uname ==  null)
	{
	
     document.getElementById("errorBox").innerHTML =
               "enter the user name";
                return false;
	}

	if (psword == "" ||  psword == null)
	{
		 document.getElementById("errorBox").innerHTML =
                   "enter the password";
                 return false;
	}

	if(uname != "" && psword != "")
	{
		 alert("Login successfully");
    }
}

function form2(){
	var uname1 = document.forms["registerform"]["uname"].value;
	var email = document.forms["registerform"]["email"].value;
	var psword1 = document.forms["registerform"]["paswd"].value;
	var updatepsword = document.forms["registerform"]["repaswd"].value;

	if (uname1 == "" || uname1 ==  null ){
                document.getElementById("errorBox").innerHTML =
               "enter the user name";
                return false;
	}

	      if(email==null || email==""){
                  document.getElementById("errorBox").innerHTML =
                  "enter the email";
                  return false;
        }

        if(psword1==null || psword1=="" ){
                  document.getElementById("errorBox").innerHTML =
                  "enter the password";
                 return false;
        }

        if(updatepsword==null || updatepsword==""){
                  document.getElementById("errorBox").innerHTML =
                   "enter the re-password";
                 return false;}

 		   if(psword1 != updatepsword){
                  document.getElementById("errorBox").innerHTML =
                   "password dont match";
                 return false;
             }

         if (uname1 != '' && email != '' && psword1 != '' && updatepsword != '' && psword1 == updatepsword){
          alert("Register successfull");
        }
    }