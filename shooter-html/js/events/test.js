'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var desk = '<svg width="2048" height="1792" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1856 992v-832q0-13-9.5-22.5t-22.5-9.5h-1600q-13 0-22.5 9.5t-9.5 22.5v832q0 13 9.5 22.5t22.5 9.5h1600q13 0 22.5-9.5t9.5-22.5zm128-832v1088q0 66-47 113t-113 47h-544q0 37 16 77.5t32 71 16 43.5q0 26-19 45t-45 19h-512q-26 0-45-19t-19-45q0-14 16-44t32-70 16-78h-544q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h1600q66 0 113 47t47 113z"/></svg>';
var game = '<svg width="2048" height="1792" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg"><path d="M896 1088v-128q0-14-9-23t-23-9h-192v-192q0-14-9-23t-23-9h-128q-14 0-23 9t-9 23v192h-192q-14 0-23 9t-9 23v128q0 14 9 23t23 9h192v192q0 14 9 23t23 9h128q14 0 23-9t9-23v-192h192q14 0 23-9t9-23zm576 64q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zm256-256q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zm256 128q0 212-150 362t-362 150q-192 0-338-128h-220q-146 128-338 128-212 0-362-150t-150-362 150-362 362-150h896q212 0 362 150t150 362z"/></svg>';
var flask = '<svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1591 1448q56 89 21.5 152.5t-140.5 63.5h-1152q-106 0-140.5-63.5t21.5-152.5l503-793v-399h-64q-26 0-45-19t-19-45 19-45 45-19h512q26 0 45 19t19 45-19 45-45 19h-64v399zm-779-725l-272 429h712l-272-429-20-31v-436h-128v436z"/></svg>';
var gear = '<svg width="2048" height="1792" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg"><path d="M960 896q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm768 512q0-52-38-90t-90-38-90 38-38 90q0 53 37.5 90.5t90.5 37.5 90.5-37.5 37.5-90.5zm0-1024q0-52-38-90t-90-38-90 38-38 90q0 53 37.5 90.5t90.5 37.5 90.5-37.5 37.5-90.5zm-384 421v185q0 10-7 19.5t-16 10.5l-155 24q-11 35-32 76 34 48 90 115 7 11 7 20 0 12-7 19-23 30-82.5 89.5t-78.5 59.5q-11 0-21-7l-115-90q-37 19-77 31-11 108-23 155-7 24-30 24h-186q-11 0-20-7.5t-10-17.5l-23-153q-34-10-75-31l-118 89q-7 7-20 7-11 0-21-8-144-133-144-160 0-9 7-19 10-14 41-53t47-61q-23-44-35-82l-152-24q-10-1-17-9.5t-7-19.5v-185q0-10 7-19.5t16-10.5l155-24q11-35 32-76-34-48-90-115-7-11-7-20 0-12 7-20 22-30 82-89t79-59q11 0 21 7l115 90q34-18 77-32 11-108 23-154 7-24 30-24h186q11 0 20 7.5t10 17.5l23 153q34 10 75 31l118-89q8-7 20-7 11 0 21 8 144 133 144 160 0 8-7 19-12 16-42 54t-45 60q23 48 34 82l152 23q10 2 17 10.5t7 19.5zm640 533v140q0 16-149 31-12 27-30 52 51 113 51 138 0 4-4 7-122 71-124 71-8 0-46-47t-52-68q-20 2-30 2t-30-2q-14 21-52 68t-46 47q-2 0-124-71-4-3-4-7 0-25 51-138-18-25-30-52-149-15-149-31v-140q0-16 149-31 13-29 30-52-51-113-51-138 0-4 4-7 4-2 35-20t59-34 30-16q8 0 46 46.5t52 67.5q20-2 30-2t30 2q51-71 92-112l6-2q4 0 124 70 4 3 4 7 0 25-51 138 17 23 30 52 149 15 149 31zm0-1024v140q0 16-149 31-12 27-30 52 51 113 51 138 0 4-4 7-122 71-124 71-8 0-46-47t-52-68q-20 2-30 2t-30-2q-14 21-52 68t-46 47q-2 0-124-71-4-3-4-7 0-25 51-138-18-25-30-52-149-15-149-31v-140q0-16 149-31 13-29 30-52-51-113-51-138 0-4 4-7 4-2 35-20t59-34 30-16q8 0 46 46.5t52 67.5q20-2 30-2t30 2q51-71 92-112l6-2q4 0 124 70 4 3 4 7 0 25-51 138 17 23 30 52 149 15 149 31z"/></svg>';
var bulb = '<svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1120 576q0 13-9.5 22.5t-22.5 9.5-22.5-9.5-9.5-22.5q0-46-54-71t-106-25q-13 0-22.5-9.5t-9.5-22.5 9.5-22.5 22.5-9.5q50 0 99.5 16t87 54 37.5 90zm160 0q0-72-34.5-134t-90-101.5-123-62-136.5-22.5-136.5 22.5-123 62-90 101.5-34.5 134q0 101 68 180 10 11 30.5 33t30.5 33q128 153 141 298h228q13-145 141-298 10-11 30.5-33t30.5-33q68-79 68-180zm128 0q0 155-103 268-45 49-74.5 87t-59.5 95.5-34 107.5q47 28 47 82 0 37-25 64 25 27 25 64 0 52-45 81 13 23 13 47 0 46-31.5 71t-77.5 25q-20 44-60 70t-87 26-87-26-60-70q-46 0-77.5-25t-31.5-71q0-24 13-47-45-29-45-81 0-37 25-64-25-27-25-64 0-54 47-82-4-50-34-107.5t-59.5-95.5-74.5-87q-103-113-103-268 0-99 44.5-184.5t117-142 164-89 186.5-32.5 186.5 32.5 164 89 117 142 44.5 184.5z"/></svg>';

var code = '<svg width="2048" height="1792" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg"><path d="M681 1399l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23t-10 23zm591-1067l-373 1291q-4 13-15.5 19.5t-23.5 2.5l-62-17q-13-4-19.5-15.5t-2.5-24.5l373-1291q4-13 15.5-19.5t23.5-2.5l62 17q13 4 19.5 15.5t2.5 24.5zm657 651l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23t-10 23z"/></svg>';
var data = [desk, game, flask, gear, bulb, code];

var max = 50;

var particles = [];

var Ball = function () {
  function Ball(shape) {
    _classCallCheck(this, Ball);

    this.shape = $(shape);
    this.speed = 2 + Math.random() * 12;
    this.vx = Math.random() * this.speed - Math.random() * this.speed;
    this.vy = Math.random() * this.speed - Math.random() * this.speed;
    this.radius = 10 + Math.round(Math.random() * 50);
    this.w = $(window).width();
    this.h = $(window).height();
    this.x = (this.w - this.radius) / 2;
    this.y = (this.h - this.radius) / 2;

    $(window).on("resize", this.resize.bind(this));
    this.render();
  }

  Ball.prototype.render = function render() {
    $(this.shape).css({
      width: this.radius,
      height: this.radius,
      "z-index":-1
    });
    $(".particles-bg").append(this.shape);
  };

  Ball.prototype.resize = function resize() {
    this.w = $(window).width();
    this.h = $(window).height();
  };

  Ball.prototype.move = function move() {
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    this.shape.css({
      left: this.x,
      top: this.y,
      transform: "rotate(" + this.y + "deg)"
    });

    if (this.x < 0 || this.x > this.w - this.radius) {
      this.vx = -this.vx;
      $(this.shape).toggleClass("highlight");
    }
    if (this.y < 0 || this.y > this.h - this.radius) {
      this.vy = -this.vy;
      $(this.shape).toggleClass("highlight");
    }
    return this;
  };

  return Ball;
}();

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

for (var i = 0; i < max; i++) {
  particles.push(new Ball(data[randomInt(0, data.length - 1)]));
}

function update() {
  particles = particles.filter(function (p) {
    return p.move();
  });
  requestAnimationFrame(update.bind(this));
}
update();
