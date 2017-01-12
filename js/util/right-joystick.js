document.addEventListener("DOMContentLoaded", function() {
  var SIZE = 100;

  var LAST_DISTANCE = undefined;
  var LAST_DEGREE = undefined;

  var rightJoystick = nipplejs.create({
    zone: document.getElementById('right-joystick'),
    mode: 'static',
    position: {top: '50%', left: '50%'},
    color: 'black',
    size: SIZE
  });

  rightJoystick.on('move', function(ev, data) {
    LAST_DISTANCE = data.distance;
    LAST_DEGREE = data.angle.degree;
  });

  rightJoystick.on('end', function(ev, data) {
    if (LAST_DISTANCE >= SIZE / 2) {
      var angle = LAST_DEGREE / 360 * 2*Math.PI;
      if (angle > Math.PI) {
        angle = -Math.PI + (angle - Math.PI);
      }

      shoot(COWBOY, PROJECTILES, angle);
    }
  });
});