jQuery(document).ready(function(){
    jQuery(".register-now").click(function(e){
       
        var first_name =jQuery("#h-firstname").val();
		var last_name =jQuery("#h-lastname").val();
		
        var email =jQuery("#h-email").val();
        var phone =jQuery("#h-phonenumber").val();

        var password =jQuery("#h-password").val();
        var confirm_password =jQuery("#h-retypepassword").val();
        

        var flg=0;
        if(first_name == ""){
            jQuery("#first_name_message").addClass("error_color");
            jQuery("#first_name_message").html("");
            jQuery("#first_name_message").append("please fill out this field");
            flg=1;
        }else{
            jQuery("#first_name_message").removeClass("error_color");
            jQuery("#first_name_message").html("");

        }
        if(last_name == ""){
            jQuery("#last_name_message").addClass("error_color");
            jQuery("#last_name_message").html("");
            jQuery("#last_name_message").append("please fill out this field");
            flg=1;
        }else{
            jQuery("#last_name_message").removeClass("error_color");
            jQuery("#last_name_message").html("");

        }
        
        if(phone == ""){
            jQuery("#phone_no_message").addClass("error_color");
            jQuery("#phone_no_message").html("");
            jQuery("#phone_no_message").append("please fill out this field");
            flg=1;
        }else {
            jQuery("#phone_no_message").removeClass("error_color");
            jQuery("#phone_no_message").html("");
        }
        var validEmail = 0;
        var atpos = email.indexOf("@");
        var dotpos = email.lastIndexOf(".");
        if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
            validEmail = 1;
        }
        if(email == ""){
            jQuery("#email_message").addClass("error_color");
            jQuery("#email_message").html("");
            jQuery("#email_message").append("please fill out this field");
            flg=1;
        }else if(validEmail == 1){
            jQuery("#email_message").addClass("error_color");
            jQuery("#email_message").html("");
            jQuery("#email_message").append("Please enter valid email.");
            flg=1;
        }
        else {
            jQuery("#email_message").removeClass("error_color");
            jQuery("#email_message").html("");
        }

        if(password == ""){
            jQuery("#pass_message").addClass("error_color");
            jQuery("#pass_message").html("");
            jQuery("#pass_message").append("please fill out this field");
            flg=1;
        }else {
            jQuery("#pass_message").removeClass("error_color");
            jQuery("#pass_message").html("");
        }
        if(password != confirm_password || confirm_password==""){
            jQuery("#re_pass_message").addClass("error_color");
            jQuery("#re_pass_message").html("");
            jQuery("#re_pass_message").append("please fill out this field");
            flg=1;
        }else {
            jQuery("#re_pass_message").removeClass("error_color");
            jQuery("#re_pass_message").html("");
        }

        


        if(flg==1){
            e.preventDefault();
            return false;
        }else{

            jQuery("#register-now").submit();
        }
    });
	 jQuery("#btn_login_header").click(function(e){
		        
        var unm =jQuery("#user_name").val();
		var pass =jQuery("#login_pwd").val();
		
		var flg1=0;
        if(unm == ""){
            jQuery("#login_usernm_message").addClass("error_color");
            jQuery("#login_usernm_message").html("");
            jQuery("#login_usernm_message").append("please fill out this field");
            flg1=1;
        }else{
            jQuery("#login_usernm_message").removeClass("error_color");
            jQuery("#login_usernm_message").html("");

        }
        if(pass == ""){
            jQuery("#login_pwd_message").addClass("error_color");
            jQuery("#login_pwd_message").html("");
            jQuery("#login_pwd_message").append("please fill out this field");
            flg1=1;
        }else{
            jQuery("#login_pwd_message").removeClass("error_color");
            jQuery("#login_pwd_message").html("");

        }
		
		
		if(flg1==1){
            e.preventDefault();
            return false;
        }else{

            jQuery("#login_frm").submit();
        }
		
		
	});	
	
	
	
	 jQuery("#btn_login_frm").click(function(e){
		        
        var unm =jQuery("#user_name").val();
		var pass =jQuery("#login_pwd").val();
		
		var flg2=0;
        if(unm == ""){
            jQuery("#login_usernm_message").addClass("error_color");
            jQuery("#login_usernm_message").html("");
            jQuery("#login_usernm_message").append("please fill out this field");
            flg2=1;
        }else{
            jQuery("#login_usernm_message").removeClass("error_color");
            jQuery("#login_usernm_message").html("");

        }
        if(pass == ""){
            jQuery("#login_pwd_message").addClass("error_color");
            jQuery("#login_pwd_message").html("");
            jQuery("#login_pwd_message").append("please fill out this field");
            flg2=1;
        }else{
            jQuery("#login_pwd_message").removeClass("error_color");
            jQuery("#login_pwd_message").html("");

        }
		
		
		if(flg2==1){
            e.preventDefault();
            return false;
        }else{

            jQuery("#login_frm1").submit();
        }
		
		
	});		
	
	jQuery("#custom_quick_registor_btn").click(function(e){
		var quick_first_name =jQuery("#quick_first_name").val();
		var quick_last_name =jQuery("#quick_last_name").val();
		var quick_email =jQuery("#quick_email").val();
		var quick_password =jQuery("#quick_password").val();
		var quick_retype_password =jQuery("#quick_retype_password").val();
		var quick_ph_no =jQuery("#quick_ph_no").val();	
		var quick_registor_flg=0;
		if(quick_first_name == ""){
            jQuery("#quick_first_name_message").addClass("error_color");
            jQuery("#quick_first_name_message").html("");
            jQuery("#quick_first_name_message").append("please fill out this field");
            quick_registor_flg=1;
        }else{
            jQuery("#quick_first_name_message").removeClass("error_color");
            jQuery("#quick_first_name_message").html("");

        }
		if(quick_last_name == ""){
            jQuery("#quick_last_name_message").addClass("error_color");
            jQuery("#quick_last_name_message").html("");
            jQuery("#quick_last_name_message").append("please fill out this field");
            quick_registor_flg=1;
        }else{
            jQuery("#quick_last_name_message").removeClass("error_color");
            jQuery("#quick_last_name_message").html("");

        }
		if(quick_email == ""){
            jQuery("#quick_email_message").addClass("error_color");
            jQuery("#quick_email_message").html("");
            jQuery("#quick_email_message").append("please fill out this field");
            quick_registor_flg=1;
        }
		else if(validateEmail(quick_email) != true){
			jQuery("#quick_email_message").addClass("error_color");
            jQuery("#quick_email_message").html("");
            jQuery("#quick_email_message").append("Invalid Email Format");
            quick_registor_flg=1;
		}
		else{
            jQuery("#quick_email_message").removeClass("error_color");
            jQuery("#quick_email_message").html("");

        }
		if(quick_password == ""){
            jQuery("#quick_password_message").addClass("error_color");
            jQuery("#quick_password_message").html("");
            jQuery("#quick_password_message").append("please fill out this field");
            quick_registor_flg=1;
        }
		else if(validatePass(quick_password) != true ){
			jQuery("#quick_password_message").addClass("error_color");
            jQuery("#quick_password_message").html("");
            jQuery("#quick_password_message").append("Password must be 6 characters and minimum 1 number ");
            quick_registor_flg=1;
		}
		else{
			jQuery("#quick_password_message").removeClass("error_color");
            jQuery("#quick_password_message").html("");
		}
		 if(quick_retype_password == ""){
			jQuery("#quick_retype_password_message").addClass("error_color");
            jQuery("#quick_retype_password_message").html("");
            jQuery("#quick_retype_password_message").append("please fill out this field");
            quick_registor_flg=1;
		}
		
		else if(quick_password != quick_retype_password){
			jQuery("#quick_retype_password_message").addClass("error_color");
            jQuery("#quick_retype_password_message").html("");
            jQuery("#quick_retype_password_message").append("the password must be same that password");
            quick_registor_flg=1;
		}else{	
            jQuery("#quick_password_message").removeClass("error_color");
            jQuery("#quick_password_message").html("");
			jQuery("#quick_retype_password_message").removeClass("error_color");
            jQuery("#quick_retype_password_message").html("");
        }
		if(quick_ph_no == ""){
            jQuery("#quick_ph_no_message").addClass("error_color");
            jQuery("#quick_ph_no_message").html("");
            jQuery("#quick_ph_no_message").append("please fill out this field");
            quick_registor_flg=1;
        }
		else if(isNumeric(quick_ph_no) != true){
			jQuery("#quick_ph_no_message").addClass("error_color");
            jQuery("#quick_ph_no_message").html("");
            jQuery("#quick_ph_no_message").append("Phone number must be only numbers");
            quick_registor_flg=1;
		}
		else{
            jQuery("#quick_ph_no_message").removeClass("error_color");
            jQuery("#quick_ph_no_message").html("");

        }

		if(quick_registor_flg==1){
            e.preventDefault();
            return false;
        }else{

            jQuery("#quick_registor").submit();
        }	
	});

	/*contact form*/	
	jQuery("#contact_form_submit_btn").click(function(e){
		var contact_name =jQuery("#contact_name").val();
		var contact_phone =jQuery("#contact_phone").val();
		var contact_email =jQuery("#contact_email").val();
		var contact_subject =jQuery("#contact_subject").val();
		var contact_message =jQuery("#contact_message").val();
		var contact_flg=0;
		if(contact_name == ""){
            jQuery("#contact_name_message").addClass("error_color");
            jQuery("#contact_name_message").html("");
            jQuery("#contact_name_message").append("please fill out this field");
            contact_flg=1;
        }else{
            jQuery("#contact_name_message").removeClass("error_color");
            jQuery("#contact_name_message").html("");

        }
		if(contact_phone == ""){
            jQuery("#contact_phone_message").addClass("error_color");
            jQuery("#contact_phone_message").html("");
            jQuery("#contact_phone_message").append("please fill out this field");
            contact_flg=1;
        }
		else if(isNumeric(contact_phone) != true){
			jQuery("#contact_phone_message").addClass("error_color");
            jQuery("#contact_phone_message").html("");
            jQuery("#contact_phone_message").append("Phone number must be only numbers");
            contact_flg=1;
		}
		else{
            jQuery("#contact_phone_message").removeClass("error_color");
            jQuery("#contact_phone_message").html("");

        }
		if(contact_email == ""){
            jQuery("#contact_email_message").addClass("error_color");
            jQuery("#contact_email_message").html("");
            jQuery("#contact_email_message").append("please fill out this field");
            contact_flg=1;
        }
		else if(validateEmail(contact_email) != true){
			jQuery("#contact_email_message").addClass("error_color");
            jQuery("#contact_email_message").html("");
            jQuery("#contact_email_message").append("Invalid Email Format");
            contact_flg=1;
		}
		else{
            jQuery("#contact_email_message").removeClass("error_color");
            jQuery("#contact_email_message").html("");

        }
		if(contact_subject == ""){
            jQuery("#contact_subject_message").addClass("error_color");
            jQuery("#contact_subject_message").html("");
            jQuery("#contact_subject_message").append("please fill out this field");
            contact_flg=1;
        }else{	
            jQuery("#contact_subject_message").removeClass("error_color");
            jQuery("#contact_subject_message").html("");
        }
		if(contact_message == ""){
            jQuery("#contact_message_err").addClass("error_color");
            jQuery("#contact_message_err").html("");
            jQuery("#contact_message_err").append("please fill out this field");
            contact_flg=1;
        }else{
            jQuery("#contact_message_err").removeClass("error_color");
            jQuery("#contact_message_err").html("");

        }

		if(contact_flg==1){
            e.preventDefault();
            return false;
        }else{

            jQuery("#contact_form_class").submit();
        }	
	});
	
	/*change password*/
	 jQuery(".change_pass_frm_btn_submit").click(function(e){
       
        var change_pass =jQuery("#password_change_pass_frm").val();
		var chnge_new_pass =jQuery("#change_pass_frm_new_pass").val();
		var change_pass_retype_pass =jQuery("#change_pass_frm_retype_pass").val();
		var flg_change_pass=0;
		if(change_pass == ""){
			jQuery("#change_pass_message").addClass("error_color");
			jQuery("#change_pass_message").html("");
			jQuery("#change_pass_message").append("please fill out this field");
			flg_change_pass=1;
		}else{
			jQuery("#change_pass_message").removeClass("error_color");
			jQuery("#change_pass_message").html("");

		}
		if(chnge_new_pass == ""){
			jQuery("#change_new_pass_message").addClass("error_color");
			jQuery("#change_new_pass_message").html("");
			jQuery("#change_new_pass_message").append("please fill out this field");
			flg_change_pass=1;
		}else{
			jQuery("#change_new_pass_message").removeClass("error_color");
			jQuery("#change_new_pass_message").html("");
		}
		  
		if(change_pass_retype_pass == ""){
			jQuery("#change_retype_pass_message").addClass("error_color");
			jQuery("#change_retype_pass_message").html("");
			jQuery("#change_retype_pass_message").append("please fill out this field");
			flg_change_pass=1;
		}else{
			jQuery("#change_retype_pass_message").removeClass("error_color");
			jQuery("#change_retype_pass_message").html("");
		}
		  
		if(flg_change_pass==1){
			e.preventDefault();
			return false;
		}else{

			jQuery("#change_pass_frm").submit();
		}
	});
	
	/*registor form*/
	jQuery("#registor_submit_btn").click(function(e){
		var registor_first_name =jQuery("#registor_first_name").val();
		var registor_last_name =jQuery("#registor_last_name").val();
		var registor_ph_no =jQuery("#registor_ph_no").val();
		var registor_country =jQuery("#registor_country").val();
		var registor_email =jQuery("#registor_email").val();
		var registor_password =jQuery("#registor_password").val();	
		var registor_retype_pwd =jQuery("#registor_retype_pwd").val();	
		var registor__flg=0;
		if(registor_first_name == ""){
            jQuery("#registor_first_name_err").addClass("error_color");
            jQuery("#registor_first_name_err").html("");
            jQuery("#registor_first_name_err").append("please fill out this field");
            registor__flg=1;
        }else{
            jQuery("#registor_first_name_err").removeClass("error_color");
            jQuery("#registor_first_name_err").html("");

        }
		if(registor_last_name == ""){
            jQuery("#registor_last_name_err").addClass("error_color");
            jQuery("#registor_last_name_err").html("");
            jQuery("#registor_last_name_err").append("please fill out this field");
            registor__flg=1;
        }else{
            jQuery("#registor_last_name_err").removeClass("error_color");
            jQuery("#registor_last_name_err").html("");

        }
		if(registor_ph_no == ""){
            jQuery("#registor_ph_no_err").addClass("error_color");
            jQuery("#registor_ph_no_err").html("");
            jQuery("#registor_ph_no_err").append("please fill out this field");
            registor__flg=1;
        }
		else if(isNumeric(registor_ph_no) != true){
			jQuery("#registor_ph_no_err").addClass("error_color");
            jQuery("#registor_ph_no_err").html("");
            jQuery("#registor_ph_no_err").append("Phone number must be only numbers");
            registor__flg=1;
		}
		else{
            jQuery("#registor_ph_no_err").removeClass("error_color");
            jQuery("#registor_ph_no_err").html("");

        }
		if(registor_country == ""){
            jQuery("#registor_country_err").addClass("error_color");
            jQuery("#registor_country_err").html("");
            jQuery("#registor_country_err").append("please fill out this field");
            registor__flg=1;
        }else{
            jQuery("#registor_country_err").removeClass("error_color");
            jQuery("#registor_country_err").html("");

        }
		if(registor_email == ""){
            jQuery("#registor_email_err").addClass("error_color");
            jQuery("#registor_email_err").html("");
            jQuery("#registor_email_err").append("please fill out this field");
            registor__flg=1;
        }
		else if(validateEmail(registor_email) != true){
			jQuery("#registor_email_err").addClass("error_color");
            jQuery("#registor_email_err").html("");
            jQuery("#registor_email_err").append("Invalid Email Format");
            registor__flg=1;
		}
		else{
            jQuery("#registor_email_err").removeClass("error_color");
            jQuery(registor_email_err).html("");

        }
		if(registor_password == ""){
            jQuery("#registor_password_err").addClass("error_color");
            jQuery("#registor_password_err").html("");
            jQuery("#registor_password_err").append("please fill out this field");
            registor__flg=1;
        }
		else if(validatePass(registor_password) != true ){
			jQuery("#registor_password_err").addClass("error_color");
            jQuery("#registor_password_err").html("");
            jQuery("#registor_password_err").append("Password must be 6 characters and minimum 1 number ");
            registor__flg=1;
		}
		else {
			jQuery("#registor_password_err").removeClass("error_color");
            jQuery("#registor_password_err").html("");
		}
		if(registor_retype_pwd == ""){
			jQuery("#registor_retype_pwd_err").addClass("error_color");
            jQuery("#registor_retype_pwd_err").html("");
            jQuery("#registor_retype_pwd_err").append("please fill out this field");
            registor__flg=1;
		}else if(registor_password != registor_retype_pwd){
			jQuery("#registor_retype_pwd_err").addClass("error_color");
            jQuery("#registor_retype_pwd_err").html("");
            jQuery("#registor_retype_pwd_err").append("the password must be same that password");
            registor__flg=1;
		}else{	
            
			jQuery("#registor_retype_pwd_err").removeClass("error_color");
            jQuery("#registor_retype_pwd_err").html("");
        }
		

		if(registor__flg==1){
            e.preventDefault();
            return false;
        }else{

            jQuery("#registor_submit_btn").submit();
        }	
	});
	
	/*forgot password*/
	jQuery("#reset_pwd_btn").click(function(e){        
        var forgot_email =jQuery("#forgot_email").val();
		var forgot_pwd_flg=0;
        if(forgot_email == ""){
            jQuery("#forgot_email_err").addClass("error_color");
            jQuery("#forgot_email_err").html("");
            jQuery("#forgot_email_err").append("please fill out this field");
            forgot_pwd_flg=1;
        }
		else if(validateEmail(forgot_email) != true){
			jQuery("#forgot_email_err").addClass("error_color");
            jQuery("#forgot_email_err").html("");
            jQuery("#forgot_email_err").append("Invalid Email Format");
            forgot_pwd_flg=1;
		}
		else{
            jQuery("#forgot_email_err").removeClass("error_color");
            jQuery("#forgot_email_err").html("");

        }
		if(forgot_pwd_flg==1){
            e.preventDefault();
            return false;
        }else{

            jQuery("#forgot_your_password").submit();
        }	
	});	
	
	/*personal details*/
	jQuery(".personal_frm_btn_save").click(function(e){
	  var personal_frm_gender =jQuery("#personal_frm_gender").val();	
      var personal_frm_firstname =jQuery("#personal_frm_firstname").val();
	  var personal_frm_lastname =jQuery("#personal_frm_lastname").val();
	  var personal_frm_phonenumber =jQuery("#personal_frm_phonenumber").val();
	  var personal_frm_country =jQuery("#personal_frm_country").val();
	  var personal_frm_street =jQuery("#personal_frm_street").val();
	  var personal_frm_h_number =jQuery("#personal_frm_h-number").val();
	  var personal_frm_city =jQuery("#personal_frm_city").val();
	  var personal_frm_postal_code =jQuery("#personal_frm_postal_code").val();
	  
	  
	  var personal_frm_flg=0;
			if(personal_frm_gender == ""){
				jQuery("#personal_frm_gender_message").addClass("error_color");
				jQuery("#personal_frm_gender_message").html("");
				jQuery("#personal_frm_gender_message").append("please fill out this field");
				personal_frm_flg=1;
			}else{
				jQuery("#personal_frm_gender_message").removeClass("error_color");
				jQuery("#personal_frm_gender_message").html("");

			}
			if(personal_frm_firstname == ""){
				jQuery("#personal_frm_firstname_message").addClass("error_color");
				jQuery("#personal_frm_firstname_message").html("");
				jQuery("#personal_frm_firstname_message").append("please fill out this field");
				personal_frm_flg=1;
			}else{
				jQuery("#personal_frm_firstname_message").removeClass("error_color");
				jQuery("#personal_frm_firstname_message").html("");

			}
	   if(personal_frm_lastname == ""){
				jQuery("#personal_frm_lastname_message").addClass("error_color");
				jQuery("#personal_frm_lastname_message").html("");
				jQuery("#personal_frm_lastname_message").append("please fill out this field");
				personal_frm_flg=1;
			}else{
				jQuery("#personal_frm_lastname_message").removeClass("error_color");
				jQuery("#personal_frm_lastname_message").html("");

			}
	   if(personal_frm_phonenumber == ""){
				jQuery("#personal_frm_phonenumber_message").addClass("error_color");
				jQuery("#personal_frm_phonenumber_message").html("");
				jQuery("#personal_frm_phonenumber_message").append("please fill out this field");
				personal_frm_flg=1;
			}else{
				jQuery("#personal_frm_phonenumber_message").removeClass("error_color");
				jQuery("#personal_frm_phonenumber_message").html("");

			}
	   if(personal_frm_country == ""){
				jQuery("#personal_frm_country_message").addClass("error_color");
				jQuery("#personal_frm_country_message").html("");
				jQuery("#personal_frm_country_message").append("please fill out this field");
				personal_frm_flg=1;
			}else{
				jQuery("#personal_frm_country_message").removeClass("error_color");
				jQuery("#personal_frm_country_message").html("");

			}
	   if(personal_frm_street == ""){
				jQuery("#personal_frm_street_message").addClass("error_color");
				jQuery("#personal_frm_street_message").html("");
				jQuery("#personal_frm_street_message").append("please fill out this field");
				personal_frm_flg=1;
			}else{
				jQuery("#personal_frm_street_message").removeClass("error_color");
				jQuery("#personal_frm_street_message").html("");

			}
	  
	  if(personal_frm_h_number == ""){
				jQuery("#personal_frm_h-number_message").addClass("error_color");
				jQuery("#personal_frm_h-number_message").html("");
				jQuery("#personal_frm_h-number_message").append("please fill out this field");
				personal_frm_flg=1;
			}else{
				jQuery("#personal_frm_h-number_message").removeClass("error_color");
				jQuery("#personal_frm_h-number_message").html("");

			}
	   if(personal_frm_city == ""){
				jQuery("#personal_frm_city_message").addClass("error_color");
				jQuery("#personal_frm_city_message").html("");
				jQuery("#personal_frm_city_message").append("please fill out this field");
				personal_frm_flg=1;
			}else{
				jQuery("#personal_frm_city_message").removeClass("error_color");
				jQuery("#personal_frm_city_message").html("");

			}
	   if(personal_frm_postal_code == ""){
				jQuery("#personal_frm_postal_code_message").addClass("error_color");
				jQuery("#personal_frm_postal_code_message").html("");
				jQuery("#personal_frm_postal_code_message").append("please fill out this field");
				personal_frm_flg=1;
			}else{
				jQuery("#personal_frm_postal_code_message").removeClass("error_color");
				jQuery("#personal_frm_postal_code_message").html("");

			}
	  
	  
	 if(personal_frm_flg==1){
				e.preventDefault();
				return false;
			}else{

				jQuery("#personl_detail_frm").submit();
			}
	  
	  
	 });
	 
	 /*deposit fund*/
	 jQuery("#deposit_now_submit_btn").click(function(e){  
        var deposit_fund_amount =jQuery("#deposit_fund_amount").val();
		var deposit_fund_card_type =jQuery("#deposit_fund_card_type").val();
		var deposit_fund_card_number =jQuery("#deposit_fund_card_number").val();
		var deposit_fund_card_cvv =jQuery("#deposit_fund_card_cvv").val();
		var deposit_fund_first_name =jQuery("#deposit_fund_first_name").val();
		var deposit_fund_last_name =jQuery("#deposit_fund_last_name").val();
		var deposit_fund_adresse_line1 =jQuery("#deposit_fund_adresse_line1").val();
		var deposit_fund_adresse_line2 =jQuery("#deposit_fund_adresse_line2").val();
		var deposit_fund_postal_code =jQuery("#deposit_fund_postal_code").val();
		var deposit_fund_country =jQuery("#deposit_fund_country").val();
		var deposit_fund_flg=0;
        if(deposit_fund_amount == ""){
            jQuery("#deposit_fund_amount_err").addClass("error_color");
            jQuery("#deposit_fund_amount_err").html("");
            jQuery("#deposit_fund_amount_err").append("please fill out this field");
            deposit_fund_flg=1;
        }
		else if(isNumeric(deposit_fund_amount) != true){
			jQuery("#deposit_fund_amount_err").addClass("error_color");
            jQuery("#deposit_fund_amount_err").html("");
            jQuery("#deposit_fund_amount_err").append("Amount must be only number");
            deposit_fund_flg=1;
		}
		else{
            jQuery("#deposit_fund_amount_err").removeClass("error_color");
            jQuery("#deposit_fund_amount_err").html("");

        }
		if(deposit_fund_card_type == ""){
            jQuery("#deposit_fund_card_type_err").addClass("error_color");
            jQuery("#deposit_fund_card_type_err").html("");
            jQuery("#deposit_fund_card_type_err").append("please fill out this field");
            deposit_fund_flg=1;
        }else{
            jQuery("#deposit_fund_card_type_err").removeClass("error_color");
            jQuery("#deposit_fund_card_type_err").html("");

        }
		if(deposit_fund_card_number == ""){
            jQuery("#deposit_fund_card_number_err").addClass("error_color");
            jQuery("#deposit_fund_card_number_err").html("");
            jQuery("#deposit_fund_card_number_err").append("please fill out this field");
            deposit_fund_flg=1;
        }else{
            jQuery("#deposit_fund_card_number_err").removeClass("error_color");
            jQuery("#deposit_fund_card_number_err").html("");

        }
		if(deposit_fund_card_cvv == ""){
            jQuery("#deposit_fund_card_cvv_err").addClass("error_color");
            jQuery("#deposit_fund_card_cvv_err").html("");
            jQuery("#deposit_fund_card_cvv_err").append("please fill out this field");
            deposit_fund_flg=1;
        }
		else if(isNumeric(deposit_fund_card_cvv) != true){
			jQuery("#deposit_fund_card_cvv_err").addClass("error_color");
            jQuery("#deposit_fund_card_cvv_err").html("");
            jQuery("#deposit_fund_card_cvv_err").append("CVV must be only numbers");
            deposit_fund_flg=1;
		}else if(deposit_fund_card_cvv.length >3){
			jQuery("#deposit_fund_card_cvv_err").addClass("error_color");
            jQuery("#deposit_fund_card_cvv_err").html("");
            jQuery("#deposit_fund_card_cvv_err").append("only 3 numbers");
            deposit_fund_flg=1;
		}		
		else{
            jQuery("#deposit_fund_card_cvv_err").removeClass("error_color");
            jQuery("#deposit_fund_card_cvv_err").html("");

        }
		if(deposit_fund_first_name == ""){
            jQuery("#deposit_fund_first_name_err").addClass("error_color");
            jQuery("#deposit_fund_first_name_err").html("");
            jQuery("#deposit_fund_first_name_err").append("please fill out this field");
            deposit_fund_flg=1;
        }else{
            jQuery("#deposit_fund_first_name_err").removeClass("error_color");
            jQuery("#deposit_fund_first_name_err").html("");

        }
		if(deposit_fund_last_name == ""){
            jQuery("#deposit_fund_last_name_err").addClass("error_color");
            jQuery("#deposit_fund_last_name_err").html("");
            jQuery("#deposit_fund_last_name_err").append("please fill out this field");
            deposit_fund_flg=1;
        }else{
            jQuery("#deposit_fund_last_name_err").removeClass("error_color");
            jQuery("#deposit_fund_last_name_err").html("");

        }
		if(deposit_fund_adresse_line1 == ""){
            jQuery("#deposit_fund_adresse_line1_err").addClass("error_color");
            jQuery("#deposit_fund_adresse_line1_err").html("");
            jQuery("#deposit_fund_adresse_line1_err").append("please fill out this field");
            deposit_fund_flg=1;
        }else{
            jQuery("#deposit_fund_adresse_line1_err").removeClass("error_color");
            jQuery("#deposit_fund_adresse_line1_err").html("");

        }
		if(deposit_fund_adresse_line2 == ""){
            jQuery("#deposit_fund_adresse_line2_err").addClass("error_color");
            jQuery("#deposit_fund_adresse_line2_err").html("");
            jQuery("#deposit_fund_adresse_line2_err").append("please fill out this field");
            deposit_fund_flg=1;
        }else{
            jQuery("#deposit_fund_adresse_line2_err").removeClass("error_color");
            jQuery("#deposit_fund_adresse_line2_err").html("");

        }
		if(deposit_fund_postal_code == ""){
            jQuery("#deposit_fund_postal_code_err").addClass("error_color");
            jQuery("#deposit_fund_postal_code_err").html("");
            jQuery("#deposit_fund_postal_code_err").append("please fill out this field");
            deposit_fund_flg=1;
        }else{
            jQuery("#deposit_fund_postal_code_err").removeClass("error_color");
            jQuery("#deposit_fund_postal_code_err").html("");

        }
		if(deposit_fund_country == ""){
            jQuery("#deposit_fund_country_err").addClass("error_color");
            jQuery("#deposit_fund_country_err").html("");
            jQuery("#deposit_fund_country_err").append("please fill out this field");
            deposit_fund_flg=1;
        }else{
            jQuery("#deposit_fund_country_err").removeClass("error_color");
            jQuery("#deposit_fund_country_err").html("");

        }
		if(deposit_fund_flg==1){
            e.preventDefault();
            return false;
        }else{

            jQuery("#deposit_fund_form").submit();
        }	
	});

	/*bitcoin*/	
	jQuery("#bitcoin_submit_btn").click(function(e){  
        var bitcoin_amount =jQuery("#bitcoin_amount").val();
		var deposit_fund_bitcoin_flg=0;
		if(bitcoin_amount == ""){
            jQuery("#bitcoin_amount_err").addClass("error_color");
            jQuery("#bitcoin_amount_err").html("");
            jQuery("#bitcoin_amount_err").append("please fill out this field");
            deposit_fund_bitcoin_flg=1;
        }
		else if(isNumeric(bitcoin_amount) != true){
			jQuery("#bitcoin_amount_err").addClass("error_color");
            jQuery("#bitcoin_amount_err").html("");
            jQuery("#bitcoin_amount_err").append("Amount must be only a number");
            deposit_fund_bitcoin_flg=1;
		}
		else{
            jQuery("#bitcoin_amount_err").removeClass("error_color");
            jQuery("#bitcoin_amount_err").html("");

        }
		if(deposit_fund_bitcoin_flg==1){
            e.preventDefault();
            return false;
        }else{

            jQuery("#deposit_fund_bitcoin").submit();
        }
	});

	/*withdrow request step1 bitcoin*/	
	jQuery("#withdrawl_req_step_1_btn_proceed").click(function(e){  
        var withdrawl_req_step_1_amount =jQuery("#withdrawl_req_step_1_amount").val();
		var withdrawl_req_step_2_flag=0;
		if(withdrawl_req_step_1_amount == ""){
            jQuery("#withdrawl_req_step_1_amount_message").addClass("error_color");
            jQuery("#withdrawl_req_step_1_amount_message").html("");
            jQuery("#withdrawl_req_step_1_amount_message").append("please fill out this field");
            withdrawl_req_step_2_flag=1;
        }else{
            jQuery("#withdrawl_req_step_1_amount_message").removeClass("error_color");
            jQuery("#withdrawl_req_step_1_amount_message").html("");

        }
		if(withdrawl_req_step_2_flag==1){
            e.preventDefault();
            return false;
        }else{

            jQuery("#withdrawal_request_step1_frm").submit();
        }
	});
	
	/*wire transfer*/	
	jQuery("#wire_transfer_submit_btn").click(function(e){  
        var wire_transfer_amount =jQuery("#wire_transfer_amount").val();
		var wire_transfer_country =jQuery("#wire_transfer_country").val();
		var wire_transfer_flag=0;
		if(wire_transfer_amount == ""){
            jQuery("#wire_transfer_amount_err").addClass("error_color");
            jQuery("#wire_transfer_amount_err").html("");
            jQuery("#wire_transfer_amount_err").append("please fill out this field");
            wire_transfer_flag=1;
        }else{
            jQuery("#wire_transfer_amount_err").removeClass("error_color");
            jQuery("#wire_transfer_amount_err").html("");

        }
		if(wire_transfer_country == ""){
            jQuery("#wire_transfer_country_err").addClass("error_color");
            jQuery("#wire_transfer_country_err").html("");
            jQuery("#wire_transfer_country_err").append("please fill out this field");
            wire_transfer_flag=1;
        }else{
            jQuery("#wire_transfer_country_err").removeClass("error_color");
            jQuery("#wire_transfer_country_err").html("");

        }
		if(wire_transfer_flag==1){
            e.preventDefault();
            return false;
        }else{

            jQuery("#deposit_fund_wire_transfer").submit();
        }
	});
	
	/*withdrawal request step2*/
	jQuery("#withdrawal_request_step2_btn").click(function(e){  
        var withdrawal_req_step2_amount =jQuery("#withdrawal_req_step2_amount").val();
		var files_input_upload =jQuery("#files-input-upload").val();
		var files_input_upload1 =jQuery("#files-input-upload1").val();
		var files_input_upload2 =jQuery("#files-input-upload2").val();
		var files_input_upload3 =jQuery("#files-input-upload3").val();
		var withdrawal_request_step2_flag=0;
		if(withdrawal_req_step2_amount == ""){
            jQuery("#withdrawal_req_step2_amount_message").addClass("error_color");
            jQuery("#withdrawal_req_step2_amount_message").html("");
            jQuery("#withdrawal_req_step2_amount_message").append("please fill out this field");
            withdrawal_request_step2_flag=1;
        }
		else if(isNumeric(withdrawal_req_step2_amount) != true){
			 jQuery("#withdrawal_req_step2_amount_message").addClass("error_color");
            jQuery("#withdrawal_req_step2_amount_message").html("");
            jQuery("#withdrawal_req_step2_amount_message").append("Amount must be only a number");
            withdrawal_request_step2_flag=1;
		}
		else{
            jQuery("#withdrawal_req_step2_amount_message").removeClass("error_color");
            jQuery("#withdrawal_req_step2_amount_message").html("");

        }
		if(files_input_upload == ""){
            jQuery("#files-input-upload_message").addClass("error_color");
            jQuery("#files-input-upload_message").html("");
            jQuery("#files-input-upload_message").append("please fill out this field");
            withdrawal_request_step2_flag=1;
        }else{
            jQuery("#files-input-upload_message").removeClass("error_color");
            jQuery("#files-input-upload_message").html("");

        }
		if(files_input_upload1 == ""){
            jQuery("#files-input-upload1_message").addClass("error_color");
            jQuery("#files-input-upload1_message").html("");
            jQuery("#files-input-upload1_message").append("please fill out this field");
            withdrawal_request_step2_flag=1;
        }else{
            jQuery("#files-input-upload1_message").removeClass("error_color");
            jQuery("#files-input-upload1_message").html("");

        }
		if(files_input_upload2 == ""){
            jQuery("#files-input-upload2_message").addClass("error_color");
            jQuery("#files-input-upload2_message").html("");
            jQuery("#files-input-upload2_message").append("please fill out this field");
            withdrawal_request_step2_flag=1;
        }else{
            jQuery("#files-input-upload2_message").removeClass("error_color");
            jQuery("#files-input-upload2_message").html("");

        }
		if(files_input_upload3 == ""){
            jQuery("#files-input-upload3_message").addClass("error_color");
            jQuery("#files-input-upload3_message").html("");
            jQuery("#files-input-upload3_message").append("please fill out this field");
            withdrawal_request_step2_flag=1;
        }else{
            jQuery("#files-input-upload3_message").removeClass("error_color");
            jQuery("#files-input-upload3_message").html("");

        }
		if(withdrawal_request_step2_flag==1){
            e.preventDefault();
            return false;
        }else{

            jQuery("#withdrawal_request_step2_frm").submit();
        }
	});	

	jQuery(".promotion-box").click(function(e){
		jQuery(".promotion-box").removeClass('active');
		jQuery(this).addClass('active');
		var data_class_name=jQuery(this).attr('class_name');
		jQuery(".center-crypto").removeClass('active');
		jQuery("."+data_class_name).addClass('active');
	});
	
	
});

/**/
// -- navbar start here -->
$(".navbar-toggle").click(function() {
    $("#backgroundmenu").fadeIn('slow');
    document.getElementById("myNavbar").style.width = "250px";
 $(".navbar-toggle").addClass("navbar-tog");
  $(".menuclose").fadeIn('slow');
  $("body").css("overflow", "hidden");
});
$("#backgroundmenu").click(function() {
    $(this).fadeOut('slow');
 $(".navbar-toggle").removeClass("navbar-tog");
    document.getElementById("myNavbar").style.width = "0";
 $(".menuclose").fadeOut('slow');
 $("body").css("overflow", "scroll");

});
$(".menuclose").click(function() {
   $(".navbar-toggle").removeClass("navbar-tog");
   $("#backgroundmenu").fadeOut('slow')
    document.getElementById("myNavbar").style.width = "0";
 $(".menuclose").fadeOut('slow');
 $("body").css("overflow", "scroll");
});
/*
function validateEmail(emailField){
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if (reg.test(emailField.value) == false) 
        {
           
            return false;
        }
		else{
        return true;
		}

}*/
function validateEmail(emailField) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(emailField);
}
function validatePass(pass){
 
var matches = pass.match(/\d+/g);
if ((matches != null )&&(pass.length >= 6) ) {
    return true;
}else{
	return false;
}       

}
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
$(document).ready(function() {

   $("#owl-demo1").owlCarousel({
     items : 4, //10 items above 1000px browser width
     itemsDesktop : [1024,4], //5 items between 1000px and 901px
	 itemsDesktopSmall : [768,3], // 3 items betweem 900px and 601px
	 itemsTablet: [767,2], //2 items between 600 and 0;
	 itemsMobile : [480,2], // itemsMobile disabled - inherit from itemsTablet option      
	 navigation: true	  
 	});
	
});


$(document).ready(function() {

   $("#owl-demo").owlCarousel({
     items : 12, //10 items above 1000px browser width
     itemsDesktop : [1024,10], //5 items between 1000px and 901px
	 itemsDesktopSmall : [768,8], // 3 items betweem 900px and 601px
	 itemsTablet: [767,5], //2 items between 600 and 0;
	 itemsMobile : [480,4], // itemsMobile disabled - inherit from itemsTablet option      
	 navigation: true	  
 	});
	
});


$('#webTicker').webTicker({
						  hoverpause:false,
						  });
function loadRandom1() {
	var datahtml="";
	var class2="";
	var class3="";
	 var obj = jQuery.parseJSON( '{"d":[{"Asset":"AUDUSD","Direction":1,"Price":"0.76106"},{"Asset":"GBPJPY","Direction":1,"Price":"148.4725"},{"Asset":"DUBAI","Direction":1,"Price":"3460.93"},{"Asset":"COKE","Direction":1,"Price":"45.835"},{"Asset":"EURCAD","Direction":2,"Price":"1.51088"},{"Asset":"ETCUSD","Direction":1,"Price":"17.693"},{"Asset":"BCHUSD","Direction":2,"Price":"1647.7000"},{"Asset":"XRPUSD","Direction":2,"Price":"0.2318"},{"Asset":"BCHEUR","Direction":2,"Price":"1388.33"},{"Asset":"BCHGBP","Direction":1,"Price":"1236.5292"},{"Asset":"ETHEUR","Direction":2,"Price":"336.7008"},{"Asset":"ETHGBP","Direction":1,"Price":"299.8866"},{"Asset":"ETCEUR","Direction":2,"Price":"14.9078"},{"Asset":"ETCGBP","Direction":1,"Price":"13.2778"},{"Asset":"DSHGBP","Direction":2,"Price":"411.1832"},{"Asset":"DSHEUR","Direction":2,"Price":"461.6603"},{"Asset":"DSHUSD","Direction":2,"Price":"547.91"},{"Asset":"LTCEUR","Direction":2,"Price":"61.3094"},{"Asset":"LTCUSD","Direction":2,"Price":"72.764"},{"Asset":"LTCGBP","Direction":2,"Price":"54.6059"},{"Asset":"XRPGBP","Direction":2,"Price":"0.1740"},{"Asset":"XRPEUR","Direction":2,"Price":"0.1953"},{"Asset":"ETHUSD","Direction":2,"Price":"399.605"}]}' );
	 
  $.each(obj, function( index, value ) {
	  $.each(value, function( index2, value2 ) {    
	  
	   if(value2.Direction==1){ class2='fa-caret-up '; class3='gean-box' }else{ class2='fa-caret-down'; class3='rad-box' }
	   datahtml=datahtml+'<li data-update="item'+index2+'" ><p><span>'+value2.Asset+'</span><span class="usdcad-col '+class3+' "><i class="fa '+class2+'" aria-hidden="true"></i><span>'+value2.Price+'</span></span></p></li>';
    });      
	
  });

$("#webTicker").webTicker('update',datahtml,
        'swap',
        true,
        false
    );
	
}

setInterval(function() {
    
	 loadRandom1();
  },10000);	