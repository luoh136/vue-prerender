module.exports = {
  pluginOptions: {
    prerenderSpa: {
      renderRoutes: [
        '/',
        '/about'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}
