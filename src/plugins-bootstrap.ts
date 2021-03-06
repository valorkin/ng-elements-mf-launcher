declare global {
  interface Window { __appShellPluginsJson__: any; }
}

export const loadPluginsJson = (): Promise<void> => {
  return new Promise(async(resolve, reject) => {
    const pathToFile = './assets/config/plugins.json';
    const response = await window.fetch(pathToFile) as Response;

    let json = [];
    try {
      if (response.ok) {
        json = await response.json();
      }
    } catch (e) {}
    const windowConfig = Array.isArray(window.__appShellPluginsJson__) ? window.__appShellPluginsJson__ : [];

    window.__appShellPluginsJson__ = json.concat(windowConfig);
    return resolve();
  });
};
