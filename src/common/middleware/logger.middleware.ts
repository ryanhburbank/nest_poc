export function logger(_: Request, __: Response, next: () => void) {
  // tslint:disable-next-line:no-console
  console.log(`Request...`);
  next();
}
