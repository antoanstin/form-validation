const input=document.getElementsByClassName("control")
		const pass=document.getElementById("password");
		const confirmpass=document.getElementById("confirm-password");
		const btn=document.getElementById("btn")
		btn.addEventListener("click",function(el){
		
		

		// const onSignUp=(el)=>{
			el.preventDefault();
			for(let x=0;x<input.length;x++){
				var valid=0;
				if(input[x].value===""){
					valid++;
					input[x].nextElementSibling.classList.add("invalid-input")
				}
				else {
					input[x].nextElementSibling.classList.remove("invalid-input")
				}
				
			}

			if(valid===0){
				if(pass.value.length<6){
					document.getElementsByClassName("password-msg")[0].classList.add("invalid-input")
				}
				else {
					document.getElementsByClassName("password-msg")[0].classList.remove("invalid-input")
					if(pass.value!==confirmpass.value){
					document.getElementsByClassName("confpass-msg")[0].classList.add("invalid-input")
				}
				else {
					document.getElementsByClassName("confpass-msg")[0].classList.remove("invalid-input")
				}
				}
			
			}
		})