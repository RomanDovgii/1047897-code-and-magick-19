'use strict';

var shift = 10;
var cloudShadowShift = 10;

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_y = 10;
var cloudColor = 'rgba(255, 255, 255, 1)';
var cloudShadowColor = 'rgba(0, 0, 0, 0.7)';

var textCongrats = 'Ура вы победили!';
var textStats = 'Список результатов:';

var barWidth = 40;
var barGap = 50;
var barColorYou = 'rgba(255, 0, 0, 1)';
var barMaxHeight = 150;

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
  renderCloud(ctx, CLOUD_X + cloudShadowShift, CLOUD_y + cloudShadowShift, cloudShadowColor);
  renderCloud(ctx, CLOUD_X, CLOUD_y, cloudColor);

  var maxTime = getMaxElement(times);

  ctx.font = fontStyle;
  ctx.fillStyle = fontColor;
  ctx.fillText(textCongrats, CLOUD_X + shift * 2, CLOUD_y + shift * 4);
  ctx.fillText(textStats, CLOUD_X + shift * 2, CLOUD_y + shift * 6);
  ctx.font = '';

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = fontColor;
    if (i === 0) {
      ctx.fillText(names[i], CLOUD_X + barGap, CLOUD_y + CLOUD_HEIGHT - shift * 1);
      ctx.fillText(Math.round(times[i]), CLOUD_X + barGap, CLOUD_y + CLOUD_HEIGHT - shift * 4 - (barMaxHeight * times[i]) / maxTime);
      if (names[i] === 'Вы') {
        ctx.fillStyle = barColorYou;
      } else {
        l = Math.floor(Math.random() * 60) + 20;
        ctx.fillStyle = 'hsl(229, 100%, ' + l.toString() + '%)';
      }
      ctx.fillRect(CLOUD_X + barGap, CLOUD_y + CLOUD_HEIGHT - barMaxHeight - shift * 3 + (barMaxHeight - (barMaxHeight * times[i]) / maxTime), barWidth, (barMaxHeight * times[i]) / maxTime, barMaxHeight);
    } else {
      ctx.fillText(names[i], CLOUD_X + (barWidth + barGap) * (i + 1) - barGap, CLOUD_y + CLOUD_HEIGHT - shift * 1);
      ctx.fillText(Math.round(times[i]), CLOUD_X + (barWidth + barGap) * (i + 1) - barGap, CLOUD_y + CLOUD_HEIGHT - shift * 4 - (barMaxHeight * times[i]) / maxTime);
      if (names[i] === 'Вы') {
        ctx.fillStyle = barColorYou;
      } else {
        l = Math.floor(Math.random() * 60) + 20;
        ctx.fillStyle = 'hsl(229, 100%, ' + l.toString() + '%)';
      }
      ctx.fillRect(CLOUD_X + ((barWidth + barGap) * (i + 1)) - barGap, CLOUD_y + CLOUD_HEIGHT - barMaxHeight - shift * 3 + (barMaxHeight - (barMaxHeight * times[i]) / maxTime), barWidth, (barMaxHeight * times[i]) / maxTime, barMaxHeight);
    }
  }
};

renderStatistics();
