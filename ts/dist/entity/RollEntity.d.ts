import { FantasyRolePlayingEntityBase } from '../FantasyRolePlayingEntityBase';
import type { FantasyRolePlayingSDK } from '../FantasyRolePlayingSDK';
import type { Control } from '../types';
import type { Roll, RollLoadMatch, RollListMatch } from '../FantasyRolePlayingTypes';
declare class RollEntity extends FantasyRolePlayingEntityBase<Roll> {
    constructor(client: FantasyRolePlayingSDK, entopts: any);
    make(this: RollEntity): RollEntity;
    load(this: any, reqmatch?: RollLoadMatch, ctrl?: Control): Promise<RollEntity>;
    list(this: any, reqmatch?: RollListMatch, ctrl?: Control): Promise<RollEntity[]>;
}
export { RollEntity };
