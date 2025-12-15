import bcrypt from "bcrypt";
import { User } from "../modules/auth/auth.model.js";
import { envVars } from "../config/envVars.js";
import { Role } from "../modules/auth/auth.interface.js";
export const adminSeed = async () => {
    try {
        const isExist = await User.findOne({ email: envVars.ADMIN_EMAIL });
        if (isExist) {
            console.log("Admin already exist!");
            return;
        }
        const hashedPass = await bcrypt.hash(envVars.ADMIN_PASS, 10);
        const admin = {
            email: envVars.ADMIN_EMAIL,
            name: "Admin",
            password: hashedPass,
            role: Role.ADMIN
        };
        const result = await User.create(admin);
        console.log("Super Admin Created Successfuly!");
        console.log(result);
    }
    catch (error) {
        console.log(error);
    }
};
//# sourceMappingURL=adminSeed.js.map