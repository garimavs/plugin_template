import {
  Configurer,
  ConfigurerOptionalPaths
} from "@productgenie/plugin-config-utils";

export const optionals: ConfigurerOptionalPaths = [["settings"]];

export const configurer: Configurer = {
  name: "Text",
  screens: [
    {
      name: "Properties",
      content: [
        {
          type: "text",
          name: ["settings", "name"],
          optional: true,
          hidden: true
        },
        {
          type: "text",
          name: ["settings", "tag"],
          optional: true,
          hidden: true
        },
        {
          type: "text",
          name: ["text"],
          label: "Text"
        },
        {
          type: "icon-picker",
          name: ["icon"],
          label: "Icon"
        },
        {
          type: "color-picker",
          name: ["backgroundColor"],
          label: "Background Color"
        },
        {
          type: "color-picker",
          name: ["iconColor"],
          label: "Icon Color"
        },
        {
          type: "color-picker",
          name: ["textColor"],
          label: "Text Color"
        },
        {
          type: "text",
          name: ["additionalText"],
          label: "Additional Text"
        }
      ]
    }
  ]
};
