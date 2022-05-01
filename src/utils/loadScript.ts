var filesadded = "" //list of files already added

function checkFile(filename) {
    if (filesadded.indexOf("[" + filename + "]") == -1) {
        
        return false
    }
    else
    //console.log('lib ' + filename + ' already load')
        return true
}

function addFile(filename) {
    filesadded += "[" + filename + "]" //List of files added in the form "[filename1],[filename2],etc"
}


export function loadScript(url: any, element?: any) {

    return new Promise((resolve) => {

        if (checkFile(url)) {
            resolve(null)
        }
        else {
            var script = document.createElement("script")
            script.type = "text/javascript";

            script.onload = () => {

                //console.log('load Script done :'+url)
                addFile(url)
                resolve(null)
            }

            script.src = url;

            if(element)
            {
                element.appendChild(script)
            }else{
                document.getElementsByTagName("head")[0].appendChild(script);
            }
            
        }
    })
}

export function loadModule(url: any, element?: any) {

    return new Promise((resolve) => {

        if (checkFile(url)) {
            resolve(null)
        }
        else {
            var script = document.createElement("script")
            script.type = "module";

            script.onload = () => {

                //console.log('load Module done :'+url)
                addFile(url)
                resolve(null)
            }

            script.src = url;

            if(element)
            {
                element.appendChild(script)
            }else{
                document.getElementsByTagName("head")[0].appendChild(script);
            }
            
        }
    })
}

export function loadNoModule(url: any, element?: any) {

    return new Promise((resolve) => {

        if (checkFile(url)) {
            resolve(null)
        }
        else {
            var script = document.createElement("script")
            script.noModule = true

            resolve(null)

            // script.onload = () => {

            //     //console.log('load NoModule done :'+url)
            //     addFile(url)
            //     resolve(null)
            // }

            script.src = url;

            if(element)
            {
                element.appendChild(script)
            }else{
                document.getElementsByTagName("head")[0].appendChild(script);
            }
            
        }
    })
}

export function loadCss(url: any, element?: any) {

    return new Promise((resolve) => {

        if (checkFile(url)) {
            resolve(null)
        }
        else {

            var link = document.createElement("link")
            link.type = "text/css";
            link.rel = "stylesheet"

            link.onload = () => {

                //console.log('load done')
                addFile(url)
                resolve(null)
            }

            link.href = url;

            if(element)
            {
                element.appendChild(link)
            }else{
                document.getElementsByTagName("head")[0].appendChild(link);
            }
        }
    })
}
