function xhrFunction() {

    var xhr = null;

    if (window.XMLHttpRequest || window.ActiveXObject){
        if (window.ActiveXObject){
            try {
                xhr = new ActiveXObject("Msxml2.XHLHTTP");
            }
            catch (e) {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");

            }
        }
        else {
            xhr = new XMLHttpRequest();
        }
    }

    else {
       return false;
    }

    return xhr;
}