import { DeploymentTestPage } from './app.po';

describe('deployment-test App', function() {
  let page: DeploymentTestPage;

  beforeEach(() => {
    page = new DeploymentTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
