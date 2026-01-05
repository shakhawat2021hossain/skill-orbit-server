interface SendEmailOptions {
    to: string;
    subject: string;
    html: string;
}
export declare const sendEmail: ({ to, subject, html }: SendEmailOptions) => Promise<void>;
export {};
//# sourceMappingURL=sendEmail.d.ts.map