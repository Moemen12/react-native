import*as e from"../../../../core/sdk/sdk.js";import*as t from"../../legacy.js";let r;t.UIUtils.registerRenderer({contextTypes:()=>[e.RemoteObject.RemoteObject],loadRenderer:async()=>(await async function(){return r||(r=await import("./object_ui.js")),r}()).ObjectPropertiesSection.Renderer.instance()});