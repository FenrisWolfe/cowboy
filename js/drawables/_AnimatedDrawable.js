function AnimatedDrawable(label) {
  Drawable.call(this, label);
  this.frames = new Array();
  this.timings = new Array();
}

AnimatedDrawable.prototype = Object.create(Drawable.prototype, {
  hasImage: {
    get: function() {
      return this.frames.length > 0;
    }
  },
  
  totalTime: {
    get: function() {
      return this.timings.reduce(function(a, b) { return a + b; }, 0);
    }
  },

  // Returns the current HTMLImageElement for the given frame.
  image: {
    get: function () {
      if (!this.hasImage) { return null; }

      var time = (Date.now() - START_TIME) % this.totalTime;
      
      for (var i = 0; i < this.timings.length; i++) {
        if (time <= this.timings[i]) {
          return IMAGES[this.frames[i]];
        } else {
          time -= this.timings[i];
        }
      }
    }
  }
});

/**
  Adds an frame to the AnimatedDrawable with the given filename. A length
  of time (in milliseconds) can be supplied for how long the particular
  image is shown. By default, the length is 1000 milliseconds.
  
  parameters:
    - filename: string
    - time (optional): number
 */
AnimatedDrawable.prototype.addFrame = function(filename, time) {
  var time = time || 1000;
  this.frames.push(filename)
  this.timings.push(time);
};

/** 
  Batch adds images with given arrays.
  
  parameters:
    - filenames: Array[string]
    - timings (optional): Array[number]
 */
AnimatedDrawable.prototype.addFrames = function(filenames, timings) {
  if (!Array.isArray(timings)) {
    timings = new Array();
  }
  for (var i = 0; i < filenames.length; i++) {
    this.addFrame(filenames[i], timings[i]);
  }
};
