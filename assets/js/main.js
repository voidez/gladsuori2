document.addEventListener('DOMContentLoaded', () => 
{
    let mybutton = document.getElementById("btn-back-to-top");

    window.onscroll = function () 
    {
        scrollFunction();
    };

    function scrollFunction() 
    {
        if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150)
            mybutton.style.opacity = "1";
        else
            mybutton.style.opacity = "0";
    }

    const goToTop = () => 
    {
        document.body.scrollIntoView({ 
            behavior: 'smooth',
        });
    };
   

    mybutton.addEventListener("click", goToTop);
});