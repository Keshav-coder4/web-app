Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach( '#camera' );

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="capture_image" src"'+data_uri+'"/>';  
    });
    
}
console.log('ml5 version:', ml5.version);
//ml5.js helps to work with different models and do a comparison between our input
//It compares (images , audio, etc) with the model, and give the result
//one of the features of ml5.js is provodes a pre-trained model which detects a images from a video OR wedcam live view.

//ml5.imageClassifier() is a predefined function of the library that is perform image classification using a pre-tarined model
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/zQj7hehQS/model.json',modelLoaded);




function modelLoaded(){
console.log('Model Loaded');
}

function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if (error){
        console.log(error) 
    } else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}


