//-----------------INITIALIZATION---------------------------------------
        const input1 = document.querySelector("#input1");
        const input2 = document.querySelector("#input2");
        const calculate = document.querySelector("#calculate");
        const outPut = document.querySelector("#outPut");

        const modal = document.querySelector(".modal");

        const container = document.querySelector(".container");
        
        const requestName = document.querySelector("#requestName");
        const proceed = document.querySelector("#proceed");
        
        // GET CURENT YEAR
        const time = new Date();
        let year = time.getFullYear();
        input1.value = year;

        //-----------------END OF INITIALIZATION---------------------------------
        
        proceed.addEventListener('click', function() {
            if(requestName.value == "") {
                alert("Please input your name")
            } else {
                modal.classList.add("close-modal");
                container.setAttribute("style","display:flex;");
            }

        })
        

        calculate.addEventListener('click', () => {
                outPut.innerHTML = "Please Wait...."
                setTimeout( () => {
                var total = input1.value - input2.value;

//-------------------------INPUT VALIDATION-------------------------------- 
                if(isNaN(input1.value) || isNaN(input2.value)) {
                    outPut.innerHTML = "Input is not a number";
                    // input1.value = "";
                    input2.value = "";
                    return false;
                }else if(input1.value.length > 4 || input2.value.length > 4) {
                    outPut.innerHTML = "Input is greater than four(4)";
                    // input1.value = "";
                    input2.value = "";
                    return false;
                } else if(input1.value == "" || input2.value == "") {
                    outPut.innerHTML = "Please input a valid year";
                    return false;
                };
//----------------------END OF INPUT VALIDATION--------------------------------
                function proceedCalculation() {
                    outPut.innerHTML = requestName.value + " you are " + total + " Years Old.";
                    // input1.value = "";
                    input2.value = "";
                }
                
                setTimeout(function() {
                    window.location.reload();
                }, 6000)
                proceedCalculation()
            }, 3000);
            
        });

        