function getThemeFromRGB(r,g,b, hasBackground=true, otherOptions={}) {
  const unified = `${r},${g},${b}`;
  return {
    backgroundColor: hasBackground ? `rgba(${unified},0.4)` : 'rgba(0,0,0,0)',
    borderColor: `rgba(${unified},1)`,
    pointBorderColor: `rgba(${unified},1)`,
    pointHoverBackgroundColor: `rgba(${unified},1)`,
    ...otherOptions,
  }
}

// CYAN
export const themeCyan = getThemeFromRGB(75, 192, 192);
export const themeCyanNoBG = getThemeFromRGB(75, 192, 192, false);


// MAGENTA
export const themeMagenta = getThemeFromRGB(192, 75, 192);
export const themeMagentaNoBG = getThemeFromRGB(192, 75, 192, false);
export const themeMagentaLight = getThemeFromRGB(217, 128, 217);
export const themeMagentaDark = getThemeFromRGB(140, 83, 140);


// YELLOW
export const themeYellow = getThemeFromRGB(192, 192, 75);
export const themeYellowNoBG = getThemeFromRGB(192, 192, 75, false);
export const themeYellowLight = getThemeFromRGB(217, 217, 128);
export const themeYellowDark = getThemeFromRGB(140, 140, 83);


// BLUE
export const themeBlue = getThemeFromRGB(0, 80, 255);
export const themeBlueNoBG = getThemeFromRGB(0, 80, 255, false);


// GREEN
export const themeGreen = getThemeFromRGB(0, 255, 80);
export const themeGreenNoBG = getThemeFromRGB(0, 255, 80, false);


// RED
export const themeRed = getThemeFromRGB(255, 80, 30);


// OTHERS
export const themeGreyTransparent = getThemeFromRGB(200, 200, 200, false, {pointRadius:0, pointHitRadius:0, borderDash:[8]});
export const themeDark = getThemeFromRGB(20, 20, 20);

export const severityTheme1 = getThemeFromRGB(255, 189, 0, false);
export const severityTheme2 = getThemeFromRGB(255, 84, 0, false);
export const severityTheme3 = getThemeFromRGB(158, 0, 89, false);
