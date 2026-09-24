"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FantasyRolePlayingError = void 0;
class FantasyRolePlayingError extends Error {
    isFantasyRolePlayingError = true;
    sdk = 'FantasyRolePlaying';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.FantasyRolePlayingError = FantasyRolePlayingError;
//# sourceMappingURL=FantasyRolePlayingError.js.map