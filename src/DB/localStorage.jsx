const KEY = "installed_apps";

export const getInstalledApps = () => {
  return JSON.parse(localStorage.getItem(KEY)) || [];
};

export const saveAppDB = (id) => {
  const appsID = getInstalledApps();
  console.log(appsID);
  const exists = appsID.find((a) => a == id);

  if (!exists) {
    localStorage.setItem(KEY, JSON.stringify([...appsID, id]));
  }
};

export const removeApp = (id) => {
  const apps = getInstalledApps();
  const updated = apps.filter((appID) => appID !== id);
  localStorage.setItem(KEY, JSON.stringify(updated));
};
