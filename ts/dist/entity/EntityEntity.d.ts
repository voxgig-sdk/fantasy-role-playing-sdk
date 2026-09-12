import { FantasyRolePlayingEntityBase } from '../FantasyRolePlayingEntityBase';
import type { FantasyRolePlayingSDK } from '../FantasyRolePlayingSDK';
import type { Control } from '../types';
import type { Entity, EntityListMatch } from '../FantasyRolePlayingTypes';
declare class EntityEntity extends FantasyRolePlayingEntityBase<Entity> {
    constructor(client: FantasyRolePlayingSDK, entopts: any);
    make(this: EntityEntity): EntityEntity;
    list(this: any, reqmatch?: EntityListMatch, ctrl?: Control): Promise<EntityEntity[]>;
}
export { EntityEntity };
