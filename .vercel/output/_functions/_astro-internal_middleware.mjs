import 'es-module-lexer';
import './chunks/astro-designed-error-pages_CCJ9FzLe.mjs';
import 'kleur/colors';
import './chunks/astro/server_ChoI1nXK.mjs';
import 'clsx';
import 'cookie';
import { d as defineMiddleware, s as sequence } from './chunks/index_DmzOPf6u.mjs';
import { g as getActionContext } from './chunks/server_D_gSfzA_.mjs';

const onRequest$1 = defineMiddleware(async (context, next) => {
  if (context.isPrerendered) return next();
  const { action, setActionResult, serializeActionResult } = getActionContext(context);
  if (action?.calledFrom === "form") {
    const actionResult = await action.handler();
    setActionResult(action.name, serializeActionResult(actionResult));
  }
  return next();
});

const onRequest = sequence(
	
	
	onRequest$1
);

export { onRequest };
