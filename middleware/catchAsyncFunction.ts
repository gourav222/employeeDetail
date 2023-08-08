const catchAsyncFunction =
  (theFunc: any) => (req: any, res: any, next: any) => {
    Promise.resolve(theFunc(req, res, next)).catch(next);
  };
export default catchAsyncFunction;
