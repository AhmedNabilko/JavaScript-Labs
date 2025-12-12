
let styles = [

    { property: 'font-family', id: 'arial', value: 'arial' },
    { property: 'font-family', id: 'courier', value: 'courier' },
    { property: 'font-family', id: 'geogria', value: 'geogria' },
    { property: 'font-family', id: 'impact', value: 'impact' },
    { property: 'font-family', id: 'verdana', value: 'verdana' },


    { property: 'text-align', id: 'left', value: 'left' },
    { property: 'text-align', id: 'center', value: 'center' },
    { property: 'text-align', id: 'right', value: 'right' },
    { property: 'text-align', id: 'justify', value: 'justify' },


    { property: 'line-height', id: 'line-normal', value: 'normal' },
    { property: 'line-height', id: 'line-10px', value: '10px' },
    { property: 'line-height', id: 'line-15px', value: '15px' },
    { property: 'line-height', id: 'line-1-5', value: '1.5' },


    { property: 'letter-spacing', id: 'spacing-normal', value: 'normal' },
    { property: 'letter-spacing', id: 'spacing-1px', value: '-1px' },
    { property: 'letter-spacing', id: 'spacing-2px', value: '2px' },
    { property: 'letter-spacing', id: 'spacing-3px', value: '3px' },


    { property: 'text-indent', id: 'indent-0px', value: '0px' },
    { property: 'text-indent', id: 'indent-5px', value: '5px' },
    { property: 'text-indent', id: 'indent-15px', value: '15px' },
    { property: 'text-indent', id: 'indent-25px', value: '25px' },


    { property: 'text-transform', id: 'transform-none', value: 'none' },
    { property: 'text-transform', id: 'transform-capitalize', value: 'capitalize' },
    { property: 'text-transform', id: 'transform-uppercase', value: 'uppercase' },
    { property: 'text-transform', id: 'transform-lowercase', value: 'lowercase' },


    { property: 'text-decoration', id: 'decoration-none', value: 'none' },
    { property: 'text-decoration', id: 'decoration-line-through', value: 'line-through' },
    { property: 'text-decoration', id: 'decoration-overline', value: 'overline' },
    { property: 'text-decoration', id: 'decoration-underline', value: 'underline' }
];


let p = document.getElementById("par");


for (let i in styles) {
    let ratio = document.getElementById(styles[i].id);
    let onChange = function () {
        updatePar(i);
    }

    ratio.addEventListener("change", onChange);
}

function updatePar(i) {

    p.style[styles[i].property] = styles[i].value;


}
