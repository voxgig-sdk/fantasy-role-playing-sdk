import { Context } from './Context';
declare class FantasyRolePlayingError extends Error {
    isFantasyRolePlayingError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { FantasyRolePlayingError };
