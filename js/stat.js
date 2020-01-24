'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var BAR_MAX_HEIGHT = 150;

var SHIFT = 10;
var CLOUD_SHADOW_SHIFT = 10;

var CLOUD_COLOR = 'rgba(255, 255, 255, 1)';
var CLOUD_SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';

var TEXT_CONGRATS = 'Ура вы победили!';
var TEXT_STATS = 'Список результатов:';

var BAR_WIDTH = 40;
var BAR_GAP = 50;
var BAR_COLOR_YOU = 'rgba(255, 0, 0, 1)';

var FONT_COLOR = 'rgba(0, 0, 0, 1)';
var FONT_STYLE = '16px PT Mono, Arial, sans-serif';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_SHADOW_SHIFT, CLOUD_Y + CLOUD_SHADOW_SHIFT, CLOUD_SHADOW_COLOR);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR);

  var maxTime = getMaxElement(times);

  ctx.font = FONT_STYLE;
  ctx.fillStyle = FONT_COLOR;
  ctx.fillText(TEXT_CONGRATS, CLOUD_X + SHIFT * 2, CLOUD_Y + SHIFT * 4);
  ctx.fillText(TEXT_STATS, CLOUD_X + SHIFT * 2, CLOUD_Y + SHIFT * 6);
  ctx.font = '';

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = FONT_COLOR;
    ctx.fillText(names[i], CLOUD_X + (BAR_WIDTH + BAR_GAP) * (i + 1) - BAR_GAP, CLOUD_Y + CLOUD_HEIGHT - SHIFT * 1);
    ctx.fillText(Math.round(times[i]), CLOUD_X + (BAR_WIDTH + BAR_GAP) * (i + 1) - BAR_GAP, CLOUD_Y + CLOUD_HEIGHT - SHIFT * 4 - (BAR_MAX_HEIGHT * times[i]) / maxTime);
    if (names[i] === 'Вы') {
      ctx.fillStyle = BAR_COLOR_YOU;
    } else {
      var l = Math.floor(Math.random() * 60) + 20;
      ctx.fillStyle = 'hsl(229, 100%, ' + l.toString() + '%)';
    }
    ctx.fillRect(CLOUD_X + ((BAR_WIDTH + BAR_GAP) * (i + 1)) - BAR_GAP, CLOUD_Y + CLOUD_HEIGHT - BAR_MAX_HEIGHT - SHIFT * 3 + (BAR_MAX_HEIGHT - (BAR_MAX_HEIGHT * times[i]) / maxTime), BAR_WIDTH, (BAR_MAX_HEIGHT * times[i]) / maxTime, BAR_MAX_HEIGHT);
  }
};

renderStatistics();
