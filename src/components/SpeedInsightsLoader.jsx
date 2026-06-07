import { lazy, Suspense } from 'react';

const SpeedInsights = lazy(() => import('@vercel/speed-insights/react').then((module) => ({
  default: module.SpeedInsights,
})));

const SpeedInsightsLoader = () => {
  if (!import.meta.env.PROD) return null;

  return (
    <Suspense fallback={null}>
      <SpeedInsights />
    </Suspense>
  );
};

export default SpeedInsightsLoader;
