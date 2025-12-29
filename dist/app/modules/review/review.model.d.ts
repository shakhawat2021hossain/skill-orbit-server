import { Schema } from "mongoose";
import type { IReview } from "./review.interface.js";
export declare const Review: import("mongoose").Model<IReview, {}, {}, {
    id: string;
}, import("mongoose").Document<unknown, {}, IReview, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<IReview & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, Schema<IReview, import("mongoose").Model<IReview, any, any, any, import("mongoose").Document<unknown, any, IReview, any, import("mongoose").DefaultSchemaOptions> & IReview & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any, IReview>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IReview, import("mongoose").Document<unknown, {}, IReview, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<IReview & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    studentId?: import("mongoose").SchemaDefinitionProperty<import("mongoose").Types.ObjectId, IReview, import("mongoose").Document<unknown, {}, IReview, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<IReview & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    courseId?: import("mongoose").SchemaDefinitionProperty<import("mongoose").Types.ObjectId, IReview, import("mongoose").Document<unknown, {}, IReview, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<IReview & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    rating?: import("mongoose").SchemaDefinitionProperty<number, IReview, import("mongoose").Document<unknown, {}, IReview, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<IReview & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    review?: import("mongoose").SchemaDefinitionProperty<string | undefined, IReview, import("mongoose").Document<unknown, {}, IReview, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<IReview & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    reviewer?: import("mongoose").SchemaDefinitionProperty<string | undefined, IReview, import("mongoose").Document<unknown, {}, IReview, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<IReview & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    isEdited?: import("mongoose").SchemaDefinitionProperty<boolean, IReview, import("mongoose").Document<unknown, {}, IReview, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<IReview & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    createdAt?: import("mongoose").SchemaDefinitionProperty<Date, IReview, import("mongoose").Document<unknown, {}, IReview, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<IReview & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    updatedAt?: import("mongoose").SchemaDefinitionProperty<Date, IReview, import("mongoose").Document<unknown, {}, IReview, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<IReview & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
}, IReview>, IReview>;
//# sourceMappingURL=review.model.d.ts.map