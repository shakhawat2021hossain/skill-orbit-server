import { Schema, Types } from "mongoose";
import { Category, type ICourse, type ILesson } from "./course.interface.js";
export declare const Lesson: import("mongoose").Model<ILesson, {}, {}, {
    id: string;
}, import("mongoose").Document<unknown, {}, ILesson, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<ILesson & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, Schema<ILesson, import("mongoose").Model<ILesson, any, any, any, import("mongoose").Document<unknown, any, ILesson, any, import("mongoose").DefaultSchemaOptions> & ILesson & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any, ILesson>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ILesson, import("mongoose").Document<unknown, {}, ILesson, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<ILesson & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    title?: import("mongoose").SchemaDefinitionProperty<string, ILesson, import("mongoose").Document<unknown, {}, ILesson, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<ILesson & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    videoUrl?: import("mongoose").SchemaDefinitionProperty<string | undefined, ILesson, import("mongoose").Document<unknown, {}, ILesson, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<ILesson & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    duration?: import("mongoose").SchemaDefinitionProperty<number | undefined, ILesson, import("mongoose").Document<unknown, {}, ILesson, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<ILesson & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    courseId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, ILesson, import("mongoose").Document<unknown, {}, ILesson, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<ILesson & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
}, ILesson>, ILesson>;
export declare const Course: import("mongoose").Model<ICourse, {}, {}, {
    id: string;
}, import("mongoose").Document<unknown, {}, ICourse, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<ICourse & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, Schema<ICourse, import("mongoose").Model<ICourse, any, any, any, import("mongoose").Document<unknown, any, ICourse, any, import("mongoose").DefaultSchemaOptions> & ICourse & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any, ICourse>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ICourse, import("mongoose").Document<unknown, {}, ICourse, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<ICourse & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    title?: import("mongoose").SchemaDefinitionProperty<string, ICourse, import("mongoose").Document<unknown, {}, ICourse, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<ICourse & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    description?: import("mongoose").SchemaDefinitionProperty<string, ICourse, import("mongoose").Document<unknown, {}, ICourse, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<ICourse & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    price?: import("mongoose").SchemaDefinitionProperty<number, ICourse, import("mongoose").Document<unknown, {}, ICourse, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<ICourse & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    category?: import("mongoose").SchemaDefinitionProperty<Category, ICourse, import("mongoose").Document<unknown, {}, ICourse, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<ICourse & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    isPublished?: import("mongoose").SchemaDefinitionProperty<boolean, ICourse, import("mongoose").Document<unknown, {}, ICourse, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<ICourse & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    instructor?: import("mongoose").SchemaDefinitionProperty<string, ICourse, import("mongoose").Document<unknown, {}, ICourse, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<ICourse & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    introVideo?: import("mongoose").SchemaDefinitionProperty<string | undefined, ICourse, import("mongoose").Document<unknown, {}, ICourse, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<ICourse & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    resources?: import("mongoose").SchemaDefinitionProperty<import("./course.interface.js").TResource[] | undefined, ICourse, import("mongoose").Document<unknown, {}, ICourse, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<ICourse & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    thumbnail?: import("mongoose").SchemaDefinitionProperty<string | undefined, ICourse, import("mongoose").Document<unknown, {}, ICourse, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<ICourse & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    tags?: import("mongoose").SchemaDefinitionProperty<string[] | undefined, ICourse, import("mongoose").Document<unknown, {}, ICourse, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<ICourse & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    syllabus?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId[] | undefined, ICourse, import("mongoose").Document<unknown, {}, ICourse, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<ICourse & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    totalDuration?: import("mongoose").SchemaDefinitionProperty<number | undefined, ICourse, import("mongoose").Document<unknown, {}, ICourse, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<ICourse & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    createdBy?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, ICourse, import("mongoose").Document<unknown, {}, ICourse, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<ICourse & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    students?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId[] | undefined, ICourse, import("mongoose").Document<unknown, {}, ICourse, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<ICourse & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    isDeleted?: import("mongoose").SchemaDefinitionProperty<boolean | undefined, ICourse, import("mongoose").Document<unknown, {}, ICourse, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<ICourse & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
}, ICourse>, ICourse>;
//# sourceMappingURL=course.model.d.ts.map