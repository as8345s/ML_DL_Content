// Test function, opens new tab and displays result.
function test_func(){
    document.write(5 + 6);
}


// Core of the prediction.
function exec_prediction(){
    
    // collect variables.
    var country      = document.getElementById('idcountry').value;
    var gender   = document.getElementById('idgender').value;
    var age      = document.getElementById('idage').value;
    var products_number = document.getElementById('idproducts_number').value;
    var credit_card     = document.getElementById('idcredit_card').value;
    var active_member   = document.getElementById('idactive_member').value;
    // More inputs... 
    // - Watch out for the right spelling.
    // - Input can be parsed and so on.  
  
    // End point URL to post data for prediction.
    // - See file server.py which uses predict() to collect data and returns the result. 
    var url          = "http://localhost:5000/make_prediction";

    var country_dict    = {'France': 0, 'Spain': 1, 'Germany': 2};
    var gender_dict     = {'Male': 1, 'Female': 0}
    var prediction_text = {0: 'Churn: No', 1: 'Churn: Yes'}
    var yes_no_dict     = {'Yes':1, 'No':0}
    
    if (credit_card == null || credit_card == undefined){
        credit_card = 'No';
    }
    if (active_member == null || active_member == undefined){
        active_member = 'No';
    }
    if (country == null || country == undefined){
        country = 'Spain';
    }
    if (age == null || age == undefined){
        age = 18;
    }
    if (gender == null || gender == undefined){
        gender = 'Male';
    }

    // Scale age based on MinMaxScaler from Sklearn.
    // - Formula can be found on the website. 
    var min_age = 18;
    var max_age = 92;
    var std_age = ((Number(age) - min_age) / (max_age - min_age));
    var scaled_age = std_age * (1 - 0) + 0;
        
    // Query.
    // - Post data and get result and status.
    $.post(url, {
        country: country_dict[country],
        gender: gender_dict[gender],
        age: scaled_age,  // MinMaxScaler
        products_number: Number(products_number),
        active_member: yes_no_dict[credit_card],
        credit_card:  yes_no_dict[active_member]

    },function(data, status){ 
        console.log(data.churn_prediction);
        //document.getElementById("result").innerHTML = "Prediction: " + data.churn_prediction + " Status Request: " + status + " " + " " + (Number(age) - min_age)/ (max_age - min_age);
        document.getElementById("result").innerHTML = "Prediction: " + data.churn_prediction + ", " + prediction_text[data.churn_prediction];
        console.log(status);
    });
    

}
