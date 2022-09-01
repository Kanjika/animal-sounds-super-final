function soundClassification()
{
    navigator.mediaDevices.getUserMedia({ audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/fjjfr8c6o/', modelReady)
}

function modelReady()
{
    clasisifer.classify(gotResults);
}

function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/FulMQQRt4/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error, results) {
if (error) {
    console.log(error);
} else{
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255)+1;
    random_number_g = Math.floor(Math.random() * 255)+1;
    random_number_b = Math.floor(Math.random() * 255)+1;

    document.getElementById("result_label").innerHTML= 'I can hear '+results[0].label;
    document.getElementById("result_voice").innerHTML = 'Accuracy'+(results[0].confidence*100).toFixed(2)+"%";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_voice").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

    img.src = "dog.webp";
    img.src = "CAT.png";
    img.src = "LION.png";
    img.src = "cow.webp"


    if (results[0].label == "Background Noise")
    {
        img.src = "dog.webp";
    } else if(results[0].label == "Cat")
    {
        img.src = "CAT.png";
    } else if(results[0].label == "Lion")
    {
        img.src = "LION.png";
    } else if(results[0].label == "Cow")
    
    {
        img.src = "cow.webp";
    }
}
}