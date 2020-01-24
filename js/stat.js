'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var BAR_MAX_HEIGHT = 150;

var shift = 10;
var cloudShadowShift = 10;

var cloudColor = 'rgba(255, 255, 255, 1)';
var cloudShadowColor = 'rgba(0, 0, 0, 0.7)';

var textCongrats = 'Ура вы победили!';
var textStats = 'Список результатов:';

var barWidth = 40;
var barGap = 50;
var barColorYou = 'rgba(255, 0, 0, 1)';

var fontColor = 'rgba(0, 0, 0, 1)';
var fontStyle = '16px PT Mono, Arial, sans-serif';

var l = 0;

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
  renderCloud(ctx, CLOUD_X + cloudShadowShift, CLOUD_Y + cloudShadowShift, cloudShadowColor);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, cloudColor);

  var maxTime = getMaxElement(times);

  ctx.font = fontStyle;
  ctx.fillStyle = fontColor;
  ctx.fillText(textCongrats, CLOUD_X + shift * 2, CLOUD_Y + shift * 4);
  ctx.fillText(textStats, CLOUD_X + shift * 2, CLOUD_Y + shift * 6);
  ctx.font = '';

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = fontColor;
    ctx.fillText(names[i], CLOUD_X + (barWidth + barGap) * (i + 1) - barGap, CLOUD_Y + CLOUD_HEIGHT - shift * 1);
    ctx.fillText(Math.round(times[i]), CLOUD_X + (barWidth + barGap) * (i + 1) - barGap, CLOUD_Y + CLOUD_HEIGHT - shift * 4 - (BAR_MAX_HEIGHT * times[i]) / maxTime);
    if (names[i] === 'Вы') {
      ctx.fillStyle = barColorYou;
    } else {
      l = Math.floor(Math.random() * 60) + 20;
      ctx.fillStyle = 'hsl(229, 100%, ' + l.toString() + '%)';
    }
    ctx.fillRect(CLOUD_X + ((barWidth + barGap) * (i + 1)) - barGap, CLOUD_Y + CLOUD_HEIGHT - BAR_MAX_HEIGHT - shift * 3 + (BAR_MAX_HEIGHT - (BAR_MAX_HEIGHT * times[i]) / maxTime), barWidth, (BAR_MAX_HEIGHT * times[i]) / maxTime, BAR_MAX_HEIGHT);
  }
};

renderStatistics();
