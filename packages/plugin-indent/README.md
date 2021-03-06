# @milkdown/plugin-indent

Indent support for [milkdown](https://saul-mirone.github.io/milkdown/).

# Example Usage

```typescript
import { Editor } from '@milkdown/core';
import { commonmark } from '@milkdown/preset-commonmark';
import { nord } from '@milkdown/theme-nord';

import { indent } from '@milkdown/plugin-indent';

Editor.make().use(nord).use(commonmark).use(indent).create();
```

# Config

```typescript
import { indent, indentPlugin } from '@milkdown/plugin-indent';

Editor.make()
    .use(nord)
    .use(commonmark)
    .use(
        indent.configure(indentPlugin, {
            type: 'space', // available values: 'tab', 'space',
            size: 4,
        }),
    )
    .create();
```

# License

Milkdown is open sourced software licensed under [MIT license](https://github.com/Saul-Mirone/milkdown/blob/main/LICENSE).
