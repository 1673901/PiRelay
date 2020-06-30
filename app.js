var rpio = require('rpio');
rpio.open(37, rpio.OUTPUT, rpio.LOW);
 
for (var i = 0; i < 5; i++) {
        /* On for 2 second */
        rpio.write(37, rpio.HIGH); 
        rpio.sleep(2);
 
        /* Off for 1 second */
        rpio.write(37, rpio.LOW);
        rpio.sleep(1);
}