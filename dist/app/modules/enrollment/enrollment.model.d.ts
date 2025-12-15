import { Schema } from "mongoose";
import { PaymentStatus, type IEnrollment } from "./enrollment.interface.js";
export declare const Enrollment: import("mongoose").Model<IEnrollment, {}, {}, {
    id: string;
}, import("mongoose").Document<unknown, {}, IEnrollment, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<IEnrollment & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, Schema<IEnrollment, import("mongoose").Model<IEnrollment, any, any, any, import("mongoose").Document<unknown, any, IEnrollment, any, import("mongoose").DefaultSchemaOptions> & IEnrollment & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any, IEnrollment>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IEnrollment, import("mongoose").Document<unknown, {}, IEnrollment, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<IEnrollment & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    studentId?: import("mongoose").SchemaDefinitionProperty<import("mongoose").Types.ObjectId, IEnrollment, import("mongoose").Document<unknown, {}, IEnrollment, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<IEnrollment & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    courseId?: import("mongoose").SchemaDefinitionProperty<import("mongoose").Types.ObjectId, IEnrollment, import("mongoose").Document<unknown, {}, IEnrollment, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<IEnrollment & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    paymentIntentId?: import("mongoose").SchemaDefinitionProperty<string | undefined, IEnrollment, import("mongoose").Document<unknown, {}, IEnrollment, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<IEnrollment & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    checkoutSessionId?: import("mongoose").SchemaDefinitionProperty<string | undefined, IEnrollment, import("mongoose").Document<unknown, {}, IEnrollment, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<IEnrollment & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    amountPaid?: import("mongoose").SchemaDefinitionProperty<number | undefined, IEnrollment, import("mongoose").Document<unknown, {}, IEnrollment, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<IEnrollment & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    paymentStatus?: import("mongoose").SchemaDefinitionProperty<PaymentStatus | undefined, IEnrollment, import("mongoose").Document<unknown, {}, IEnrollment, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<IEnrollment & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    progress?: import("mongoose").SchemaDefinitionProperty<number, IEnrollment, import("mongoose").Document<unknown, {}, IEnrollment, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<IEnrollment & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    completedLessons?: import("mongoose").SchemaDefinitionProperty<import("mongoose").Types.ObjectId[], IEnrollment, import("mongoose").Document<unknown, {}, IEnrollment, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<IEnrollment & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
}, IEnrollment>, IEnrollment>;
//# sourceMappingURL=enrollment.model.d.ts.map