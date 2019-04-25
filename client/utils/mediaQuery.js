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

  static isMobile = () => {
    if (
      window.innerWidth >= variables.grid.breakpoints.xs
      && window.innerWidth < variables.grid.breakpoints.md
    ) {
      return true;
    }
    return false;
  };

  static isDesktop = () => {
    if (window.innerWidth >= variables.grid.breakpoints.md) {
      return true;
    }
    return false;
  };
}
