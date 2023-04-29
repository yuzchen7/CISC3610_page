var m, cm, mouse;

window.onload = function () {
    initialize_circles_pointer();
    
    m = document.getElementById("num-in-m");
    cm = document.getElementById("num-in-cm");
    mouse = document.getElementById("circle");

    if (sessionStorage) { // or using localStorage
        var m_value = sessionStorage.getItem("m_value");
        var cm_value = sessionStorage.getItem("cm_value");
        if (m_value != null) {
            m.value = m_value;
            cm.value = m_to_cm(m_value);
        } else if (cm_value != null) {
            cm.value = cm_value;
            m_value = cm_to_m(cm_value);
        } else {
            sessionStorage.setItem("m_value", 0);
            sessionStorage.setItem("cm_value", 0);
            m.value = 0;
            cm.value = 0;
        }
    }

    m.onblur = function () {
        var value = this.value;
        if (isNaN(value) || value < 0) {
            window.alert("input text must be a non-Nagetive!!")
            this.value = 0;
            return;
        }

        value = parseFloat(value);
        cm.value = m_to_cm(value);

        if (sessionStorage) {
            sessionStorage.setItem("m_value", value);
        }
    };

    cm.onblur = function () {
        var value = this.value;
        if (isNaN(value) || value < 0) {
            window.alert("input text must be a non-Nagetive!!")
            this.value = 0;
            return;
        }
        value = parseFloat(value);
        m.value = cm_to_m(value);

        if (sessionStorage) {
            sessionStorage.setItem("cm_value", value);
        }
    };
};

function m_to_cm(cm) {
    return cm * 100;
}

function cm_to_m(m) {
    return m / 100;
}