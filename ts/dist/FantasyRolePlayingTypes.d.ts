export interface Entity {
    description?: string;
    id?: string;
    name?: string;
}
export interface EntityListMatch {
    description?: string;
    id?: string;
    name?: string;
}
export interface Roll {
}
export interface RollLoadMatch {
    $action?: string;
    [action: string]: any;
}
export interface RollListMatch {
    $action?: string;
    [action: string]: any;
}
