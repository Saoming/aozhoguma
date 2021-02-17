module.exports = {
    theme: {},
    variants: {},
    plugins: [],
    purge: {
      content(contentDefaults) {
        return contentDefaults.map((file) => file.replace('.js', '.ts'))
      },
      options: {}
    }
  }