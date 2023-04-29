var Frame = {
    canvas : undefined,
    canvasContext : undefined,
    currentFrameCount : 0,
    totalFrameCount : 33,
    bubble: undefined
};

// all picture source is from following link
// https://www.artstation.com/artwork/GaLodB
// Delete if infringement
var monaFrame = [
    
    {
        "filename": "Assets/tile000.png", 
        "framSize" : {
            "x" : 0, 
            "y" : 0, 
            "width" : 600, 
            "height" : 600
        }
    }, 
    {
        "filename": "Assets/tile001.png", 
        "framSize" : {
            "x" : 0, 
            "y" : 0, 
            "width" : 600, 
            "height" : 600
        }
    }, 
    {
        "filename": "Assets/tile002.png", 
        "framSize" : {
            "x" : 0, 
            "y" : 0, 
            "width" : 600, 
            "height" : 600
        }
    }, 
    {
        "filename": "Assets/tile003.png", 
        "framSize" : {
            "x" : 0, 
            "y" : 0, 
            "width" : 600, 
            "height" : 600
        }
    }, 
    {
        "filename": "Assets/tile004.png", 
        "framSize" : {
            "x" : 0, 
            "y" : 0, 
            "width" : 600, 
            "height" : 600
        }
    }, 
    {
        "filename": "Assets/tile005.png", 
        "framSize" : {
            "x" : 0, 
            "y" : 0, 
            "width" : 600, 
            "height" : 600
        }
    }, 
    {
        "filename": "Assets/tile006.png", 
        "framSize" : {
            "x" : 0, 
            "y" : 0, 
            "width" : 600, 
            "height" : 600
        }
    }, 
    {
        "filename": "Assets/tile007.png", 
        "framSize" : {
            "x" : 0, 
            "y" : 0, 
            "width" : 600, 
            "height" : 600
        }
    }, 
    {
        "filename": "Assets/tile008.png", 
        "framSize" : {
            "x" : 0, 
            "y" : 0, 
            "width" : 600, 
            "height" : 600
        }
    }, 
    {
        "filename": "Assets/tile009.png", 
        "framSize" : {
            "x" : 0, 
            "y" : 0, 
            "width" : 600, 
            "height" : 600
        }
    }, 
    {
        "filename": "Assets/tile010.png", 
        "framSize" : {
            "x" : 0, 
            "y" : 0, 
            "width" : 600, 
            "height" : 600
        }
    }, 
    {
        "filename": "Assets/tile011.png", 
        "framSize" : {
            "x" : 0, 
            "y" : 0, 
            "width" : 600, 
            "height" : 600
        }
    }, 
    {
        "filename": "Assets/tile012.png", 
        "framSize" : {
            "x" : 0, 
            "y" : 0, 
            "width" : 600, 
            "height" : 600
        }
    }, 
    {
        "filename": "Assets/tile013.png", 
        "framSize" : {
            "x" : 0, 
            "y" : 0, 
            "width" : 600, 
            "height" : 600
        }
    }, 
    {
        "filename": "Assets/tile014.png", 
        "framSize" : {
            "x" : 0, 
            "y" : 0, 
            "width" : 600, 
            "height" : 600
        }
    }, 
    {
        "filename": "Assets/tile015.png", 
        "framSize" : {
            "x" : 0, 
            "y" : 0, 
            "width" : 600, 
            "height" : 600
        }
    }, 
    {
        "filename": "Assets/tile016.png", 
        "framSize" : {
            "x" : 0, 
            "y" : 0, 
            "width" : 600, 
            "height" : 600
        }
    }, 
    {
        "filename": "Assets/tile017.png", 
        "framSize" : {
            "x" : 0, 
            "y" : 0, 
            "width" : 600, 
            "height" : 600
        }
    }, 
    {
        "filename": "Assets/tile018.png", 
        "framSize" : {
            "x" : 0, 
            "y" : 0, 
            "width" : 600, 
            "height" : 600
        }
    }, 
    {
        "filename": "Assets/tile019.png", 
        "framSize" : {
            "x" : 0, 
            "y" : 0, 
            "width" : 600, 
            "height" : 600
        }
    }, 
    {
        "filename": "Assets/tile020.png", 
        "framSize" : {
            "x" : 0, 
            "y" : 0, 
            "width" : 600, 
            "height" : 600
        }
    }, 
    {
        "filename": "Assets/tile021.png", 
        "framSize" : {
            "x" : 0, 
            "y" : 0, 
            "width" : 600, 
            "height" : 600
        }
    },
    {
        "filename": "Assets/tile022.png", 
        "framSize" : {
            "x" : 0, 
            "y" : 0, 
            "width" : 600, 
            "height" : 600
        }
    }, 
    {
        "filename": "Assets/tile023.png", 
        "framSize" : {
            "x" : 0, 
            "y" : 0, 
            "width" : 600, 
            "height" : 600
        }
    }, 
    {
        "filename": "Assets/tile024.png", 
        "framSize" : {
            "x" : 0, 
            "y" : 0, 
            "width" : 600, 
            "height" : 600
        }
    }, 
    {
        "filename": "Assets/tile025.png", 
        "framSize" : {
            "x" : 0, 
            "y" : 0, 
            "width" : 600, 
            "height" : 600
        }
    }, 
    {
        "filename": "Assets/tile026.png", 
        "framSize" : {
            "x" : 0, 
            "y" : 0, 
            "width" : 600, 
            "height" : 600
        }
    }, 
    {
        "filename": "Assets/tile027.png", 
        "framSize" : {
            "x" : 0, 
            "y" : 0, 
            "width" : 600, 
            "height" : 600
        }
    }, 
    {
        "filename": "Assets/tile028.png", 
        "framSize" : {
            "x" : 0, 
            "y" : 0, 
            "width" : 600, 
            "height" : 600
        }
    }, 
    {
        "filename": "Assets/tile029.png", 
        "framSize" : {
            "x" : 0, 
            "y" : 0, 
            "width" : 600, 
            "height" : 600
        }
    }, 
    {
        "filename": "Assets/tile030.png", 
        "framSize" : {
            "x" : 0, 
            "y" : 0, 
            "width" : 600, 
            "height" : 600
        }
    }, 
    {
        "filename": "Assets/tile031.png", 
        "framSize" : {
            "x" : 0, 
            "y" : 0, 
            "width" : 600, 
            "height" : 600
        }
    }, 
    {
        "filename": "Assets/tile032.png", 
        "framSize" : {
            "x" : 0, 
            "y" : 0, 
            "width" : 600, 
            "height" : 600
        }
    }
];