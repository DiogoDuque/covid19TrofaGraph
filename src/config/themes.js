function getThemeFromRGB(r,g,b) {
  const unified = `${r},${g},${b}`;
  return {
    backgroundColor: `rgba(${unified},0.4)`,
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
