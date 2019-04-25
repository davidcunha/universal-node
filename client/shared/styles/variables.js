import utils from './mixins/utils';

/* ==========================================================================
  Grid Gutters
========================================================================== */
const grid = {
  mediaQuery: 'only screen',
  gridSize: {
    xs: 6,
    sm: 6,
    md: 12,
    lg: 12,
  },
  gutterWidth: {
    xs: 16,
    sm: 16,
    md: 16,
    lg: 16,
  },
  outerMargin: {
    xs: 16,
    sm: 16,
    md: 40,
    lg: 64,
  },
  container: {
    xs: 293,
    sm: 530,
    md: 754,
    lg: 1120,
  },
  breakpoints: {
    xs: 0,
    sm: 578,
    md: 834,
    lg: 1200,
  },
};

/* ==========================================================================
  Colors
========================================================================== */
const colors = {
  primaryBlack: '#000',
  primaryWhite: '#fff',
  primaryGray: 'gray',
  secondaryGray: '#a9a9a9',
  primaryRed: '#d22030',
};

/* ==========================================================================
  Animations
========================================================================== */
const animations = {
  defaultTiming: '0.2s',
};

/* ==========================================================================
  Typography
========================================================================== */
const typography = {
  browserContext: utils.rem(16),
  smallText: utils.rem(14),
  largeText: utils.rem(18),
  h4: utils.rem(16),
  h3: utils.rem(24),
  h2: utils.rem(40),
  h1: utils.rem(64),
};

/* ==========================================================================
  Layout
========================================================================== */
const layout = {
  micro: utils.rem(8),
  tiny: utils.rem(16),
  small: utils.rem(24),
  medium: utils.rem(40),
  large: utils.rem(64),
  xl: utils.rem(104),
  xxl: utils.rem(168),
  xl3: utils.rem(264),
  xl4: utils.rem(424),
  xl5: utils.rem(680),
  xl6: utils.rem(1088),
};

export default {
  grid,
  colors,
  animations,
  typography,
  layout,
};
