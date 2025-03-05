import { g as getActionQueryString, A as ActionError } from './astro-designed-error-pages_CCJ9FzLe.mjs';
import 'es-module-lexer';
import 'kleur/colors';
import './astro/server_ChoI1nXK.mjs';
import 'clsx';
import 'cookie';
import { c as createInvalidVariablesError, g as getEnv$1, s as setOnSetGetEnv } from './runtime_CA1GuiQI.mjs';
import * as z from 'zod';
import { Resend } from 'resend';
import Handlebars from 'handlebars';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { d as defineAction } from './server_D_gSfzA_.mjs';

function getEnvFieldType(options) {
  const optional = options.optional ? options.default !== void 0 ? false : true : false;
  let type;
  if (options.type === "enum") {
    type = options.values.map((v) => `'${v}'`).join(" | ");
  } else {
    type = options.type;
  }
  return `${type}${optional ? " | undefined" : ""}`;
}
const stringValidator = ({ max, min, length, url, includes, startsWith, endsWith }) => (input) => {
  if (typeof input !== "string") {
    return {
      ok: false,
      errors: ["type"]
    };
  }
  const errors = [];
  if (max !== void 0 && !(input.length <= max)) {
    errors.push("max");
  }
  if (min !== void 0 && !(input.length >= min)) {
    errors.push("min");
  }
  if (length !== void 0 && !(input.length === length)) {
    errors.push("length");
  }
  if (url !== void 0 && !URL.canParse(input)) {
    errors.push("url");
  }
  if (includes !== void 0 && !input.includes(includes)) {
    errors.push("includes");
  }
  if (startsWith !== void 0 && !input.startsWith(startsWith)) {
    errors.push("startsWith");
  }
  if (endsWith !== void 0 && !input.endsWith(endsWith)) {
    errors.push("endsWith");
  }
  if (errors.length > 0) {
    return {
      ok: false,
      errors
    };
  }
  return {
    ok: true,
    value: input
  };
};
const numberValidator = ({ gt, min, lt, max, int }) => (input) => {
  const num = parseFloat(input ?? "");
  if (isNaN(num)) {
    return {
      ok: false,
      errors: ["type"]
    };
  }
  const errors = [];
  if (gt !== void 0 && !(num > gt)) {
    errors.push("gt");
  }
  if (min !== void 0 && !(num >= min)) {
    errors.push("min");
  }
  if (lt !== void 0 && !(num < lt)) {
    errors.push("lt");
  }
  if (max !== void 0 && !(num <= max)) {
    errors.push("max");
  }
  if (int !== void 0) {
    const isInt = Number.isInteger(num);
    if (!(int ? isInt : !isInt)) {
      errors.push("int");
    }
  }
  if (errors.length > 0) {
    return {
      ok: false,
      errors
    };
  }
  return {
    ok: true,
    value: num
  };
};
const booleanValidator = (input) => {
  const bool = input === "true" ? true : input === "false" ? false : void 0;
  if (typeof bool !== "boolean") {
    return {
      ok: false,
      errors: ["type"]
    };
  }
  return {
    ok: true,
    value: bool
  };
};
const enumValidator = ({ values }) => (input) => {
  if (!(typeof input === "string" ? values.includes(input) : false)) {
    return {
      ok: false,
      errors: ["type"]
    };
  }
  return {
    ok: true,
    value: input
  };
};
function selectValidator(options) {
  switch (options.type) {
    case "string":
      return stringValidator(options);
    case "number":
      return numberValidator(options);
    case "boolean":
      return booleanValidator;
    case "enum":
      return enumValidator(options);
  }
}
function validateEnvVariable(value, options) {
  const isOptional = options.optional || options.default !== void 0;
  if (isOptional && value === void 0) {
    return {
      ok: true,
      value: options.default
    };
  }
  if (!isOptional && value === void 0) {
    return {
      ok: false,
      errors: ["missing"]
    };
  }
  return selectValidator(options)(value);
}

const ENCODED_DOT = "%2E";
function toActionProxy(actionCallback = {}, aggregatedPath = "") {
  return new Proxy(actionCallback, {
    get(target, objKey) {
      if (objKey in target || typeof objKey === "symbol") {
        return target[objKey];
      }
      const path = aggregatedPath + encodeURIComponent(objKey.toString()).replaceAll(".", ENCODED_DOT);
      function action(param) {
        return handleAction(param, path, this);
      }
      Object.assign(action, {
        queryString: getActionQueryString(path),
        toString: () => action.queryString,
        // Progressive enhancement info for React.
        $$FORM_ACTION: function() {
          const searchParams = new URLSearchParams(action.toString());
          return {
            method: "POST",
            // `name` creates a hidden input.
            // It's unused by Astro, but we can't turn this off.
            // At least use a name that won't conflict with a user's formData.
            name: "_astroAction",
            action: "?" + searchParams.toString()
          };
        },
        // Note: `orThrow` does not have progressive enhancement info.
        // If you want to throw exceptions,
        //  you must handle those exceptions with client JS.
        async orThrow(param) {
          const { data, error } = await handleAction(param, path, this);
          if (error) throw error;
          return data;
        }
      });
      return toActionProxy(action, path + ".");
    }
  });
}
async function handleAction(param, path, context) {
  {
    const { getAction } = await import('./server_D_gSfzA_.mjs').then(n => n.a);
    const action = await getAction(path);
    if (!action) throw new Error(`Action not found: ${path}`);
    return action.bind(context)(param);
  }
}
toActionProxy();

const schema = {"RESEND_API_KEY":{"context":"server","access":"secret","type":"string"},"MY_EMAIL":{"context":"server","access":"secret","type":"string"}};

// @ts-check

// @ts-expect-error
/** @returns {string} */
// used while generating the virtual module
// biome-ignore lint/correctness/noUnusedFunctionParameters: `key` is used by the generated code
// biome-ignore lint/correctness/noUnusedVariables: `key` is used by the generated code
const getEnv = (key) => {
	return getEnv$1(key);
};

const _internalGetSecret = (key) => {
	const rawVariable = getEnv(key);
	const variable = rawVariable === '' ? undefined : rawVariable;
	const options = schema[key];

	const result = validateEnvVariable(variable, options);
	if (result.ok) {
		return result.value;
	}
	const type = getEnvFieldType(options);
	throw createInvalidVariablesError(key, type, result);
};

setOnSetGetEnv(() => {
	RESEND_API_KEY = _internalGetSecret("RESEND_API_KEY");
MY_EMAIL = _internalGetSecret("MY_EMAIL");

});
let RESEND_API_KEY = _internalGetSecret("RESEND_API_KEY");
let MY_EMAIL = _internalGetSecret("MY_EMAIL");

const SERVICES = [
	{
		id: 1,
		title: "Landing Page",
		price: 75,
		description: "Perfect for businesses looking for a professional online presence.",
		benefits: [
			"High-quality code",
			"Fully responsive design",
			"SEO-optimized structure",
			"Fast loading speed",
			"1 free extra revision after launch"
		]
	},
	{
		id: 2,
		title: "E-Commerce",
		price: 225,
		description: "Ideal for selling products online with security and ease.",
		benefits: [
			"High-quality code",
			"Fully responsive online store",
			"Secure payment gateway integration",
			"Product management system",
			"Ongoing support and maintenance"
		]
	},
	{
		id: 3,
		title: "E-Commerce + Admin Dashboard",
		price: 325,
		description: "Perfect for businesses that want full control over their online store.",
		benefits: [
			"High-quality code",
			"Fully responsive online store",
			"Secure payment gateway integration",
			"Custom admin dashboard",
			"Advanced analytics and reporting",
			"Ongoing support and maintenance"
		]
	}
];

const resend = new Resend(RESEND_API_KEY);
const server = {
  hireService: defineAction({
    accept: "form",
    input: z.object({
      email: z.string().email(),
      message: z.string().optional(),
      serviceId: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
        message: "serviceId must be a valid number greater than 0"
      }).transform((val) => Number(val))
    }),
    handler: async (input) => {
      const { serviceId, email, message } = input;
      const service = SERVICES.find((service2) => service2.id === serviceId);
      if (!service) {
        throw new ActionError({
          code: "NOT_FOUND",
          message: `Service with id: ${serviceId} not found`
        });
      }
      const templateSource = readFileSync(
        join(process.cwd(), "src/assets/templates/hire-service.hbs"),
        "utf-8"
      );
      const template = Handlebars.compile(templateSource);
      const html = template({
        service,
        email,
        message
      });
      const { error } = await resend.emails.send({
        /* This is just because I'm using free plan, you can setup a domain 
        on your resend account to send emails from there */
        from: "Portfolio <onboarding@resend.dev>",
        to: [MY_EMAIL],
        subject: "New Service Hired!",
        html
      });
      if (error) {
        throw new ActionError({
          code: "BAD_REQUEST",
          message: error.message
        });
      }
      return {
        message: "Email sent successfully"
      };
    }
  })
};

export { server };
