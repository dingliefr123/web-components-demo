export const LangKey = {
  CN: 'CN',
  FR: 'FR',
  EN: 'EN'
}

let langKey = LangKey.EN;

export const I18NKeys = {
  COMMON_CONFIRM: 'COMMON_CONFIRM',
  COMMON_CANCEL: 'COMMON_CANCEL',
  SPLASH_ALL_FUNS: 'SPLASH_ALL_FUNS'
}

const I18NMap = {
  [LangKey.CN]: {
    [I18NKeys.COMMON_CONFIRM]: '确认',
    [I18NKeys.COMMON_CANCEL]: '取消',
    [I18NKeys.SPLASH_ALL_FUNS]: '全部功能'
  },
  [LangKey.EN]: {
    [I18NKeys.COMMON_CONFIRM]: 'Confirm',
    [I18NKeys.COMMON_CANCEL]: 'Cancel',
    [I18NKeys.SPLASH_ALL_FUNS]: 'All functionalities'
  },
  [LangKey.FR]: {
    [I18NKeys.COMMON_CONFIRM]: 'Confirmer',
    [I18NKeys.COMMON_CANCEL]: 'Annuler',
    [I18NKeys.SPLASH_ALL_FUNS]: 'Tous'
  }
}

export function getLocalizedStrByKey (key) {
  if (!key) return '';
  const map = I18NMap[langKey];
  return map[key] ?? '';
}
