export default async function Preflight({ req }) {
  return {
    pageTitle: getPageTitle(req.path),
  };
}

function getPageTitle(path) {
  const titleMap = {
    "/": "Piano practices",
    "/practice": "New practice",
  };

  return titleMap[path];
}
