function isDivisible(x, y, z) {
    x = Number(x);
    y = Number(y);
    z = Number(z);

    if ((typeof x == 'number') && (typeof y == 'number') && (typeof z == 'number')) {
        if ((!isNaN(x)) && (!isNaN(y)) && (!isNaN(z))) {
            if (y !== 0 || z !== 0) {

                let isY = (x % y === 0);
                let isZ = (x % z === 0);
                if (isY && isZ) {
                    console.log(x + " is divisible by both " + y + " and " + z);
                }
                else if (isY) {
                    console.log(x + " is divisible by  " + y + " only.");
                }
                else if (isZ) {
                    console.log(x + " is divisible by  " + z + " only. ");
                }
            }
            else {
                console.log("Zero invalid divisior ")
            }


        }
    }
}

let x = prompt("Enter X :");
let y = prompt("Enter Y :");
let z = prompt("Enter Z :");

isDivisible(x, y, z);
