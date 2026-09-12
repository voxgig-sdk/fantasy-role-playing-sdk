import { EntityEntity } from './entity/EntityEntity';
import { RollEntity } from './entity/RollEntity';
export type * from './FantasyRolePlayingTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { FantasyRolePlayingEntityBase } from './FantasyRolePlayingEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class FantasyRolePlayingSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Entity(entopts?: Record<string, any>): EntityEntity;
    Roll(entopts?: Record<string, any>): RollEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): FantasyRolePlayingSDK;
    tester(testopts?: any, sdkopts?: any): FantasyRolePlayingSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof FantasyRolePlayingSDK;
export { stdutil, config, BaseFeature, FantasyRolePlayingEntityBase, FantasyRolePlayingSDK, SDK, };
