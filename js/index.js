document.addEventListener( "DOMContentLoaded", () => {
    document.querySelectorAll( ".collapsible .title" ).forEach( function( title ){
        title.addEventListener( "click", function(){
            let collapsible = this.parentElement;
            let content = collapsible.querySelector( ".content" );
            collapsible.classList.toggle( "active" );
            collapsible.classList.forEach( function( el ){
                if( el.substr( 0, 2 ) == "d-" ){
                    let seconds = el.substr( 2 );
                    content.style.transitionDuration = seconds + "s";
                }
            });
            if( content.style.maxHeight ){
                content.style.maxHeight = null;
                content.style.padding = "0px 30px";
            }else{
                content.style.maxHeight = content.scrollHeight + "px";
                content.style.padding = "20px 30px";
            }
        });
    });
    document.querySelectorAll( ".disableHover" ).forEach( function( disablehover ){
        let bgcolor = window.getComputedStyle( disablehover, null ).getPropertyValue( "background-color" );
        disablehover.addEventListener( "mouseover", function(){
            console.log( disablehover.style.backgroundColor );
        });
    });
});