module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "Create a screen or a component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name?",
      },
      {
        type: "input",
        name: "path",
        message: "Component path? src/screens/",
      },
      {
        type: "list",
        name: "type",
        message: "Do you want a Screen or Component?",
        choices: ["Screen", "Component"],
      },
    ],
    actions: function (answers) {
      const templateFile =
        answers.type === "Screen"
          ? "plop-templates/screen.tsx.hbs"
          : "plop-templates/component.tsx.hbs";

      return [
        {
          type: "add",
          path: "src/screens/{{path}}/{{name}}/{{name}}.tsx",
          templateFile,
        },
        {
          type: "add",
          path: "src/screens/{{path}}/{{name}}/{{name}}.styles.ts",
          templateFile: "plop-templates/component.styles.ts.hbs",
        },
      ];
    },
  });
};
