// Data retrieved from:
// https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente+segundo+os+Censos+total+e+por+dimens%c3%a3o+dos+lugares-24
export const POPULATION_PT =       10562178;
export const POPULATION_NORTH =     3689682;
export const POPULATION_CENTER =    2327755;
export const POPULATION_LISBOA =    2821876;
export const POPULATION_ALENTEJO =   757302;
export const POPULATION_ALGARVE =    451006;
// https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente+segundo+os+Censos+total+e+por+grupo+et%c3%a1rio-19
export const POPULATION_0_9 =       482647 + 525087;
export const POPULATION_10_19 =     564595 + 565250;
export const POPULATION_20_29 =     582065 + 656076;
export const POPULATION_30_39 =     773567 + 824683;
export const POPULATION_40_49 =     73098 + 770294;
export const POPULATION_50_59 =     722360 + 677651;
export const POPULATION_60_69 =     634741 + 551701;
export const POPULATION_70_PLUS =   496438 + 961925;

export function regionToPopulation(region) {
  switch (region) {
    case 'Norte':
      return POPULATION_NORTH;
    case 'Centro':
      return POPULATION_CENTER;
    case 'Lisboa e Vale do Tejo':
      return POPULATION_LISBOA;
    case 'Alentejo':
      return POPULATION_ALENTEJO;
    case 'Algarve':
      return POPULATION_ALGARVE;
    default:
      return 0;
  }
}
