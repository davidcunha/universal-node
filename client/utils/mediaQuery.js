import variables from '~/shared/styles/variables';

export default class MediaQuery {
  static breakpoint = () => {
    let breakpoint = 'xs';
    if (window.innerWidth >= variables.grid.breakpoints.sm) {
      breakpoint = 'sm';
    }
    if (window.innerWidth >= variables.grid.breakpoints.md) {
      breakpoint = 'md';
    }
    if (window.innerWidth >= variables.grid.breakpoints.lg) {
      breakpoint = 'lg';
    }
    return breakpoint;
  };

  static isMobile = () => window.innerWidth >= variables.grid.breakpoints.xs
    && window.innerWidth < variables.grid.breakpoints.md;

  static isDesktop = () => window.innerWidth >= variables.grid.breakpoints.md;
}
