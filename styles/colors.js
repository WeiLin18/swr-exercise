const palette = {
  yellow: "#FDB44BE5",
  yellowLight: "#FFE67B",
  yellowA11y: "#C68417",
  blue: "#00BBF0",
  blueFade: "#00AAE0",
  blueLight: "#67EEFF",
  blueA11y: "#008BBD",
  red: "#FF6F6E",
  redLight: "#FFF3F8",
  redA11y: "#D32F2F",
  green: "#00BA88",
  greenLight: "#F2FFFB",
  greenAlly: "#00966D",
  purple: "#7879F1",
};

const status = {
  primary: palette.blue,
  secondary: palette.yellow,
  error: palette.red,
  success: palette.green,
};

const text = {
  textPrimary: "#00204A",
  textSecondary: "#fff",
  textDefault: "#1A365C",
  textHint: "#4D6380",
};

export const MuiPalette = {
  primary: {
    main: status.primary,
    contrastText: "#fff",
  },
  secondary: {
    main: status.secondary,
    contrastText: "#fff",
  },
  error: {
    main: status.error,
  },
  success: {
    main: status.success,
  },
  text: {
    primary: text.textPrimary,
    secondary: text.textSecondary,
    default: text.default,
    hint: text.textHint,
  },
};

const color = {
  ...palette,
  ...status,
  ...text,
};

export default color;
