module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "Create component with styles",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name?",
      },
      {
        type: "input",
        name: "path",
        message: "Component path?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/screens/{{path}}/{{name}}/{{name}}.tsx",
        templateFile: "plop-templates/component.tsx.hbs",
      },
      {
        type: "add",
        path: "src/screens/{{path}}/{{name}}/{{name}}.styles.ts",
        templateFile: "plop-templates/component.styles.ts.hbs",
      },
    ],
  });
};
