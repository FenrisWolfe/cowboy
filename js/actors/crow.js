var CROWS = [];

function birthCrows(ctx, a) {
  let delay = 250;
  let hatch = () => {
    var choice = Math.random();
    if (choice < .2) {
      x = COWBOY.x + (Math.random() * WIDTH - WIDTH / 2);
      y = COWBOY.y + HEIGHT / 2;
      var angle = Math.random();
      if (Math.random() < .5) {
        angle = -angle;
      }
      var speed = 1 + Math.random();

      var num = Math.floor(Math.random() * 10);
      for (var i = 0; i < num; i++) {
        birthCrow(ctx, a, x, y, speed * .2 * Math.random() * .85, angle);
      }
    }
  }

  setInterval(hatch, delay)
}

function birthCrow(ctx, a, x, y, speed, angle) {
  var crow;

  crow = {
    x: x * Math.random() * .85,
    y: y,
    alive: true,
    get label() { return "crow"; },
    get image() {
      if (!this.alive) {
        return IMAGES["crow-dead"];
      }

      return IMAGES["crow-with-shadow"];
    },
    frame_width: 7,
    frame_height: 16,
    kill: function() {
      if (this.alive) {
        this.alive = false;
      }
    },
    update: function() {
      if (!this.alive) {
        return;
      }
      this.x += 1 * speed + angle;
      this.y -= 1 + speed;

      if (!isInVisibleRect(this.x, this.y, 20)) {
        var index = CROWS.indexOf(this);
        var outed = CROWS.splice(index, 1);

        var index = KILLABLE.indexOf(this);
        var outed = KILLABLE.splice(index, 1);
      }
    },
    draw: function (ctx) {
      this.update();
      ctx.drawImage(this.image, this.x, this.y);
    },
  }

  CROWS.push(crow);
  a.push(crow);
  return crow;
}
