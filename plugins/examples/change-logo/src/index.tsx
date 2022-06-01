import { Headlamp, LogoProps, Plugin, Registry } from '@kinvolk/headlamp-plugin/lib';
import { SvgIcon } from '@material-ui/core';
import React from 'react';
import LogoWithTextLight from './icon-large-light.svg';
import LogoLight from './icon-small-light.svg';

/**
 * A simple logo using two different SVG files.
 * One for the small logo (used in mobile view), and a larger one used in desktop view.
 */
function SimpleLogo(props: LogoProps) {
  const { logoType, className } = props;

  return (
    <SvgIcon
      className={className}
      component={logoType === 'large' ? LogoWithTextLight : LogoLight}
      viewBox="0 0 auto 32"
    />
  );
}

/**
 * This logo example shows how you can customize the logo more for different conditions.
 */
function ReactiveLogo(props: LogoProps) {
  const { logoType, themeName } = props;

  if (logoType === 'small' && themeName === 'dark') {
    // Dark mode theme, has a dark background.
    // Small logo is shown on mobile view.
    return <p>small dark theme logo</p>;
  } else if (logoType === 'small' && themeName === 'light') {
    // Light mode theme, has a light background.
    return <p>small light theme logo</p>;
  } else if (logoType === 'large' && themeName === 'dark') {
    // The large logo is shown on tablet and desktop views.
    return <p>large light theme logo</p>;
  } else if (logoType === 'large' && themeName === 'light') {
    return <p>large light theme logo</p>;
  }
}

class MyPlugin extends Plugin {
  initialize(registry: Registry) {
    console.log('change-logo initialized');

    const showSimple = true;
    if (showSimple) {
      registry.registerAppLogo(SimpleLogo);
    } else {
      registry.registerAppLogo(ReactiveLogo);
    }
    return true;
  }
}

Headlamp.registerPlugin('change-logo', new MyPlugin());
