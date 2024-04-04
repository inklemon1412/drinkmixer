let app = document.getElementById('app');
         
        let selectedDrink1 = "";
        let selectedDrink2 = "";
        
        let infoTekst = "";
        let buttonDisabledOrNot = "disabled"


        updateView()
        function updateView(){
           app.innerHTML = /*HTML*/`
           <h3>Drinkbestiller:</h3>
           <div class="drinks1">
            Drikke 1: <br />
           <input type="radio" onchange="selectDrink1('vodka')" ${selectedDrink1 == "vodka" ? "checked" : ""}/>Vodka
            <input type="radio" onchange="selectDrink1('gin')" ${selectedDrink1 == "gin" ? "checked" : ""}/>Gin 
            <input type="radio" onchange="selectDrink1('rom')" ${selectedDrink1 == "rom" ? "checked" : ""}/>Rom
            <input type="radio" onchange="selectDrink1('tequila')" ${selectedDrink1 == "tequila" ? "checked" : ""}/>Tequila
            <br />
            Drikke 2: <br />
            <input type="radio" onchange="selectDrink2('cola')" ${selectedDrink2 == "cola" ? "checked" : ""}/>Cola
            <input type="radio" onchange="selectDrink2('melk')" ${selectedDrink2 == "melk" ? "checked" : ""}/>Melk
            <input type="radio" onchange="selectDrink2('sprite')" ${selectedDrink2 == "sprite" ? "checked" : ""}/>Sprite
            <input type="radio" onchange="selectDrink2('tonic')" ${selectedDrink2 == "tonic" ? "checked" : ""}/>Tonic
            </div>

            <div class="results">
            <button ${buttonDisabledOrNot} onclick="alert('Drink bestilt');">Bestill drink</button><br>
            Du har valgt å mikse: <br>
            Drikke 1: ${selectedDrink1} <br>
            Drikke 2: ${selectedDrink2} <br>
            ${infoTekst}
            </div>
            `;

          
        }
        function info(){
            infoTekst = "";
            if(selectedDrink1 == 'gin' && selectedDrink2 == 'melk'){
            infoTekst = "Av en eller annen grunn så har du valgt å mikse disse to tingene. Hvorfor";

            }
            else if(selectedDrink1 == 'vodka' && selectedDrink2 == 'melk'){
                infoTekst = "Melkespreng, ja. Akseptabelt";

            }
            else if(selectedDrink1 == 'tequila'  && selectedDrink2 == 'melk'){
                infoTekst = "Vennligst ikke bland disse tingene sammen";
            }
            else if(selectedDrink1 == 'rom'  && selectedDrink2 == 'melk'){
                infoTekst = "Nei nå altså";
            }
            else if(selectedDrink1 == 'gin' && selectedDrink2 == 'tonic'){
                infoTekst = "Ah! En klassiker";
            }
            else if (selectedDrink1 && selectedDrink2){
                infoTekst = "Greit nok!";
            buttonDisabledOrNot = "";
            }
            else {
           let deltekst = "";
          if(!selectedDrink1){deltekst += "Velg basedrinken! <br>"}
          if(!selectedDrink2){deltekst += "Sikker på at du ikke vil mikse det med noe? <br>"}
       

        infoTekst += deltekst;
            }

            updateView()
            }
        
    
    
        

        function selectDrink1(selectedOption){
            selectedDrink1 = selectedOption;
            info()

        }
        function selectDrink2(selectedOption){
            selectedDrink2 = selectedOption;
            info()
        }