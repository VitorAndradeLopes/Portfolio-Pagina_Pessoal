function Loaded()
{
    document.getElementById('LoadContent').style.transition = "opacity 2s linear";
    document.getElementById('LoadContent').style.opacity = "0";
    ////////////////////////////////////////////////////////////////////////////////////
    document.getElementById('PáginaPrincipal').style.transition = "opacity 2s linear 2.2s";
    document.getElementById('PáginaPrincipal').style.opacity = "1";
    setInterval(function(){
        document.getElementById('LoadContent').style.display = "none";
        document.getElementById('PáginaPrincipal').style.display = "block";
    }, 2000);
}