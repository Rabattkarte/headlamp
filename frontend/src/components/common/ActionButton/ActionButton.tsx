import { Icon, IconifyIcon } from '@iconify/react';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import React from 'react';
import { useTranslation } from 'react-i18next';

export interface ActionButtonProps {
  /** Label is a description of the action.
   *
   * Internally it is passed into t() i18n translation.
   */
  label: string;
  /** Either a string icon, or imported icon. */
  icon: string | IconifyIcon;
  /** The action when it's activated. */
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  /** The icon color. */
  color?: string | 'inherit' | 'primary' | 'secondary' | 'default';
  /** The icon width. */
  width?: string;
  /**
   * If given, uses a negative margin to counteract the padding on one side
   * (this is often helpful for aligning the left or right side of the icon
   * with content above or below, without ruining the border size and shape).
   */
  edge?: false | 'end' | 'start' | undefined;
}

export default function ActionButton({
  label,
  icon,
  onClick,
  color,
  width,
  edge,
}: ActionButtonProps) {
  const { t } = useTranslation();
  return (
    <Tooltip title={t(label)}>
      <IconButton
        aria-label={t(label)}
        onClick={onClick}
        // @ts-ignore
        color={color}
        width={width}
        edge={edge}
      >
        <Icon icon={icon} />
      </IconButton>
    </Tooltip>
  );
}
