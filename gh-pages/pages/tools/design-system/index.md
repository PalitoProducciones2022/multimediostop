# Design System

Design system is the foundation of themes.

```mermaid
graph TD;
	theme{{Theme}};
	system((Design System));

    theme --> system;
    system --> Node;
    system --> Mark;
    system --> Plugin;
```

Design system is something like a contract.
Theme implements design system, and design system can be consumed by different nodes, marks and plugins.

In [writing theme plugins](/#/writing-theme-plugins) section, we learnt how to define a theme. And this section will show how to use it.

## Theme Tool

Design system should be used by access to `themeToolCtx`.

```typescript
import { themeToolCtx } from '@milkdown/core';

import { createProsePlugin } from '@milkdown/utils';

export const myProsemirrorPlugin = createProsePlugin((_, utils) => {
    const themeTool = utils.ctx.get(themeToolCtx);

    // ...
});
```

### font

```typescript
const { typography, code } = themeTool.font;

css`
    p {
        font-family: ${typography};
    }

    code {
        font-family: ${code};
    }
`;
```

### size

```typescript
const { radius, lineWidth } = themeTool.size;

css`
    border-radius: ${radius}px;
    border: ${lineWidth}px solid #000;
`;
```

### palette

Palette can be used to generate color based on current theme.

```typescript
const { palette } = themeTool;

css`
    background: ${palette('background')};
    // 0.8 means it has 0.8 opacity.
    color: ${palette('primary', 0.8)};
`;
```

### mixin

```typescript
const { scrollbar, shadow, border } = themeTool.mixin;

css`
    ul {
        ${scrollbar()};
    }
    div {
        ${shadow()};
        ${border()};
    }
`;
```

### slots

```typescript
const { icon } = themeTool.slots;

const loadingIcon = icon('loading');
div.appendChild(loadingIcon);
```
