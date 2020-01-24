'use strict';

var shift = 10;
var cloudShadowShift = 10;

var cloudWidth = 420;
var cloudHeight = 270;
var cloudX = 100;
var cloudY = 10;
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
  ctx.fillRect(x, y, cloudWidth, cloudHeight);
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
  renderCloud(ctx, cloudX + cloudShadowShift, cloudY + cloudShadowShift, cloudShadowColor);
  renderCloud(ctx, cloudX, cloudY, cloudColor);

  var maxTime = getMaxElement(times);

  ctx.font = fontStyle;
  ctx.fillStyle = fontColor;
  ctx.fillText(textCongrats, cloudX + shift * 2, cloudY + shift * 4);
  ctx.fillText(textStats, cloudX + shift * 2, cloudY + shift * 6);
  ctx.font = '';

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = fontColor;
    if (i === 0) {
      ctx.fillText(names[i], cloudX + barGap, cloudY + cloudHeight - shift * 1);
      ctx.fillText(Math.round(times[i]), cloudX + barGap, cloudY + cloudHeight - shift * 4 - (barMaxHeight * times[i]) / maxTime);
      if (names[i] === 'Вы') {
        ctx.fillStyle = barColorYou;
      } else {
        l = Math.floor(Math.random() * 60) + 20;
        ctx.fillStyle = 'hsl(229, 100%, ' + l.toString() + '%)';
      }
      ctx.fillRect(cloudX + barGap, cloudY + cloudHeight - barMaxHeight - shift * 3 + (barMaxHeight - (barMaxHeight * times[i]) / maxTime), barWidth, (barMaxHeight * times[i]) / maxTime, barMaxHeight);
    } else {
      ctx.fillText(names[i], cloudX + (barWidth + barGap) * (i + 1) - barGap, cloudY + cloudHeight - shift * 1);
      ctx.fillText(Math.round(times[i]), cloudX + (barWidth + barGap) * (i + 1) - barGap, cloudY + cloudHeight - shift * 4 - (barMaxHeight * times[i]) / maxTime);
      if (names[i] === 'Вы') {
        ctx.fillStyle = barColorYou;
      } else {
        l = Math.floor(Math.random() * 60) + 20;
        ctx.fillStyle = 'hsl(229, 100%, ' + l.toString() + '%)';
      }
      ctx.fillRect(cloudX + ((barWidth + barGap) * (i + 1)) - barGap, cloudY + cloudHeight - barMaxHeight - shift * 3 + (barMaxHeight - (barMaxHeight * times[i]) / maxTime), barWidth, (barMaxHeight * times[i]) / maxTime, barMaxHeight);
    }
  }
};

renderStatistics();
