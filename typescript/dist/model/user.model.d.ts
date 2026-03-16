export declare enum Role {
    ADMIN = "ADMIN",
    CUSTOMER = "CUSTOMER"
}
export declare class User {
    id: number;
    username: string;
    email: string;
    role: Role;
    constructor(id: number, username: string, email: string, role: Role);
}
//# sourceMappingURL=user.model.d.ts.map