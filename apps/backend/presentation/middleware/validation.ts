export const validateBody = (schema: any) => {
  return (
    req: { body: any },
    res: {
      status: (arg0: number) => {
        (): any;
        new (): any;
        json: { (arg0: { message: string }): any; new (): any };
      };
    },
    next: () => void
  ) => {
    try {
      const result = schema.validate(req.body).toPromise();
      req.body = result;
      next();
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  };
};
