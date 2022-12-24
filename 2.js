function preload(){
    classifier = ml5.imageClassifier("DoodleNet");
    }
    function setup(){
    canvas = createCanvas(300,300)
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
    }
    function draw(){
    strokeWeight(13);
    stroke("gold");
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY);
    }
    
    }
    
    function classifyCanvas(){
        classifier.classify(canvas, gotResults);
    }
    
    function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("label").innerHTML = "Xander Says You Drew: "+results[0].label;
        document.getElementById("confidence").innerHTML = "How Sure He Is: "+Math.round(results[0].confidence*100)+"%";
        utterThis = new SpeechSynthesisUtterance("You drew "+results[0].label);
        synth.speak(utterThis); 
    }
    }
    
    function clearCanvas(){
    background("white");
    }