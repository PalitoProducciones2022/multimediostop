/* Copyright 2021, Milkdown by Mirone. */

import { Ctx, InitReady, MilkdownPlugin, RemarkPlugin, remarkPluginsCtx } from '@milkdown/core';

export type $Remark = MilkdownPlugin & {
    plugin: RemarkPlugin;
};

export const $remark = (remark: (ctx: Ctx) => RemarkPlugin): $Remark => {
    const plugin: MilkdownPlugin = () => async (ctx) => {
        await ctx.wait(InitReady);
        const re = remark(ctx);
        ctx.update(remarkPluginsCtx, (rp) => [...rp, re]);
        (<$Remark>plugin).plugin = re;
    };

    return <$Remark>plugin;
};
