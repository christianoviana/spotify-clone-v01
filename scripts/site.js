window.onload = () =>{         
    var widowScrollTop = document.body.scrollTop | document.documentElement.scrollTop;
    var clientHeight = document.body.clientHeight;
    var windowBottom = widowScrollTop + clientHeight;

    var elements = document.querySelectorAll('.target'); 
    
    elements.forEach(e => {   
        var elementPositionTop = e.offsetTop;        

        if (elementPositionTop >= 0 && elementPositionTop <= windowBottom){
            e.classList.add('fadein-on');
        }         
    });     

    window.onscroll = (event) => { 
        var widowScrollTop = document.body.scrollTop | document.documentElement.scrollTop;
        var clientHeight = document.body.clientHeight;
        var windowBottom = widowScrollTop + clientHeight;

        elements.forEach(e => {   
            var elementPositionTop = e.offsetTop;        

            if (elementPositionTop >= 0 && elementPositionTop <= windowBottom){
                e.classList.add('fadein-on');
            }         
        });     
    }
};