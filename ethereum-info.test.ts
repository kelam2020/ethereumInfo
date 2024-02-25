import * as ethereumInfo from './ethereum-info';

describe('Ethereum Info App', () => {
  test('Get last block number', async () => {
    const blockNumber = await ethereumInfo.getLastBlockNumber();
    expect(blockNumber).toBeGreaterThan(0);
  });

  test('Get USDT balance', async () => {
    const address = '0x123456789...'; // استبدلها بالعنوان الفعلي
    const balance = await ethereumInfo.getUSDTBalance(address);
    expect(balance).toBeGreaterThan(0);
  });
});