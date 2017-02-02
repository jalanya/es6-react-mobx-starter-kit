export const getAssets = async ({ query, isDevelopment }) => {
  const useSelfHosted = query.local || isDevelopment;
  let cssAssets = [
    '/libs/materialize/materialize.min.css',
  ];

  let jsAssets = [
    useSelfHosted ? '/libs/jquery/jquery.js' : '//cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0/jquery.min.js',
    '/libs/materialize/materialize.min.js',
  ];

  return {
    jsAssets,
    cssAssets,
  };
};
