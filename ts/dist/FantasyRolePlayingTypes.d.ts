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
    advantages?: any[];
    attributes?: Record<string, any>;
    class?: string;
    description?: string;
    disadvantages?: any[];
    id?: string;
    items?: any[];
    level?: number;
    name?: string;
    race?: string;
    skills?: any[];
}
export interface RollLoadMatch {
    advantages?: any[];
    attributes?: Record<string, any>;
    class?: string;
    description?: string;
    disadvantages?: any[];
    id: string;
    items?: any[];
    level?: number;
    name?: string;
    race?: string;
    skills?: any[];
    $action?: string;
    [action: string]: any;
}
export interface RollListMatch {
    advantages?: any[];
    attributes?: Record<string, any>;
    class?: string;
    description?: string;
    disadvantages?: any[];
    id?: string;
    items?: any[];
    level?: number;
    name?: string;
    race?: string;
    skills?: any[];
    $action?: string;
    [action: string]: any;
}
