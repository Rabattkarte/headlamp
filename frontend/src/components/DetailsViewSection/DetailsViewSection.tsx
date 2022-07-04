import React, { ComponentType, ReactElement, useMemo } from 'react';
import { KubeObject } from '../../lib/k8s/cluster';
import { useTypedSelector } from '../../redux/reducers/reducers';

export interface DetailsViewSectionProps {
  resource: KubeObject;
}
export type DetailsViewSectionType = ComponentType<DetailsViewSectionProps> | ReactElement | null;

/**
 * View components registered by plugins in the different Details views.
 *
 * @see registerDetailsViewSection
 */
export default function DetailsViewSection(props: DetailsViewSectionProps) {
  const { resource } = props;
  const detailViews = useTypedSelector(state => state.ui.views.details.pluginAppendedDetailViews);
  const memoizedComponents = useMemo(
    () =>
      detailViews.map((sectionFunc, index) => {
        const pluginDetailsObj = sectionFunc(resource);
        if (pluginDetailsObj) {
          const { component: Component } = pluginDetailsObj;
          return (
            <React.Fragment key={index}>
              <Component resource={resource} />
            </React.Fragment>
          );
        }
      }),
    [detailViews]
  );
  return <>{memoizedComponents}</>;
}
