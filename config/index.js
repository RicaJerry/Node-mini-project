const getConfig = () => {
  const { NODE_ENV, AIR_API_KEY } = process.env;
  const isProd = NODE_ENV === 'production';
  const isTest = NODE_ENV === 'local';

  const config = {
    isProd,
    isTest,
    port: process.env.PORT || 3001,
    mongoUrl: process.env.MONGO_URL,
    airVisualKey: AIR_API_KEY || require('./airVisualApiKeys.json').AIR_API_KEY
  }
  return config;
}

module.exports = getConfig()