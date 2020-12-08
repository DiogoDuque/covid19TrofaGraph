function getThemeFromRGB(r,g,b, hasBackground=true) {
  const unified = `${r},${g},${b}`;
  return {
    backgroundColor: hasBackground ? `rgba(${unified},0.4)` : 'rgba(0,0,0,0)',
    borderColor: `rgba(${unified},1)`,
    pointBorderColor: `rgba(${unified},1)`,
    pointHoverBackgroundColor: `rgba(${unified},1)`,
  }
}

export const themeCyan = getThemeFromRGB(75, 192, 192);

export const themeMagenta = getThemeFromRGB(192, 75, 192);

export const themeMagentaLight = getThemeFromRGB(217, 128, 217);

export const themeMagentaDark = getThemeFromRGB(140, 83, 140);

export const themeYellow = getThemeFromRGB(192, 192, 75);


export const severityTheme1 = getThemeFromRGB(255, 189, 0, false);

export const severityTheme2 = getThemeFromRGB(255, 84, 0, false);

export const severityTheme3 = getThemeFromRGB(158, 0, 89, false);
