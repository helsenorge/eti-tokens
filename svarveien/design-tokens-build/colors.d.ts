/* This file is deprecated and will be removed in a future release. Use types.d.ts instead */
/* build: v1.4.0 */
import type {} from '@digdir/designsystemet/types';

// Augment types based on theme
declare module '@digdir/designsystemet/types' {
  export interface ColorDefinitions {
    primary: never;
    secondary: never;
    accent: never;
    teal: never;
    peach: never;
    turqouise: never;
    pink: never;
    forrest: never;
    neutral: never;
  }
  export interface SeverityColorDefinitions {
    info: never;
    success: never;
    warning: never;
    danger: never;
  }
}
