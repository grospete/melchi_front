function encodeController(element){
                    var encodeAttribute = encodeImageFileAsURL(element);
                    console.log(encodeAttribute);
                }
                function encodeImageFileAsURL(element) {
                    let file = element.files[0];
                    let reader = new FileReader();
                    let imgShow;
                    reader.onloadend = function(){
                        imgShow = reader.result;
                        imgArray = imgShow.split(',');
                        imgShow = imgShow.replace(/^.+,/,"");
                        imgShow = imgArray[0] +','+ imgShow;
                        //document.getElementById("fotoCrypted").setAttribute("value", imgShow);   
                        document.getElementById("fotoCrypted").setAttribute("value", imgShow); 
                    }
                    reader.readAsDataURL(file);  
                    return imgShow;   
                }