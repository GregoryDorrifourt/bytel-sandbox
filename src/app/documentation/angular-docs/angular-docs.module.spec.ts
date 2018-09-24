import { AngularDocsModule } from './angular-docs.module';

describe('AngularDocsModule', () => {
  let angularDocsModule: AngularDocsModule;

  beforeEach(() => {
    angularDocsModule = new AngularDocsModule();
  });

  it('should create an instance', () => {
    expect(angularDocsModule).toBeTruthy();
  });
});
